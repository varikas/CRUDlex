<?php

/*
 * This file is part of the CRUDlex package.
 *
 * (c) Philip Lehmann-Böhm <philip@philiplb.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace CRUDlex;

use CRUDlex\CRUDEntity;
use CRUDlex\CRUDData;
use CRUDlex\CRUDFileProcessorInterface;

/**
 * MySQL CRUDData implementation using a given Doctrine DBAL instance.
 */
class CRUDMySQLData extends CRUDData {

    /**
     * Holds the Doctrine DBAL instance.
     */
    protected $db;

    /**
     * Performs the actual deletion.
     *
     * @param string $id
     * the id of the entry to delete
     *
     * @param boolean $deleteCascade
     * whether to delete children and subchildren
     *
     * @return boolean
     * true on successful deletion
     */
    protected function doDelete($id, $deleteCascade) {
        if ($deleteCascade) {
            foreach ($this->definition->getChildren() as $childArray) {
                $childData = $this->definition->getServiceProvider()->getData($childArray[2]);
                $children = $childData->listEntries(array($childArray[1] => $id));
                foreach ($children as $child) {
                    $childData->doDelete($child->get('id'), $deleteCascade);
                }
            }
        } else {
            foreach ($this->definition->getChildren() as $child) {
                $sql = 'SELECT COUNT(id) AS amount FROM '.$child[0].' WHERE ';
                $sql .= $child[1].' = ? AND deleted_at IS NULL';
                $result = $this->db->fetchAssoc($sql, array($id));
                if ($result['amount'] > 0) {
                    return false;
                }
            }
        }

        $sql = 'UPDATE '.$this->definition->getTable().' SET deleted_at = NOW() WHERE id = ?';
        $this->db->executeUpdate($sql, array($id));
        return true;
    }

    /**
     * Constructor.
     *
     * @param CRUDEntityDefinition $definition
     * the entity definition
     * @param CRUDFileProcessorInterface $fileProcessor
     * the file processor to use
     * @param $db
     * the Doctrine DBAL instance to use
     */
    public function __construct(CRUDEntityDefinition $definition, CRUDFileProcessorInterface $fileProcessor, $db) {
        $this->definition = $definition;
        $this->fileProcessor = $fileProcessor;
        $this->db = $db;
    }

    /**
     * {@inheritdoc}
     */
    public function get($id) {
        $entities = $this->listEntries(array('id' => $id));
        if (count($entities) == 0) {
            return null;
        }
        return $entities[0];
    }

    /**
     * {@inheritdoc}
     */
    public function listEntries(array $filter = array()) {
        $fieldNames = $this->definition->getFieldNames();
        $sql = 'SELECT `'.implode('`,`', $fieldNames).'`';
        $sql .= ' FROM '.$this->definition->getTable().' WHERE deleted_at IS NULL';
        $values = array();
        foreach ($filter as $field => $value) {
            $sql .= ' AND `'.$field.'` = ?';
            $values[] = $value;
        }
        $rows = $this->db->fetchAll($sql, $values);
        $entities = array();
        foreach ($rows as $row) {
            $entities[] = $this->hydrate($row);
        }
        return $entities;
    }

    /**
     * {@inheritdoc}
     */
    public function create(CRUDEntity $entity) {
        $formFields = $this->definition->getEditableFieldNames();
        $fields = array_merge(array('created_at', 'updated_at', 'version'),
                $formFields);
        $placeHolders = array();
        $values = array();
        for ($i = 0; $i < count($formFields); ++$i) {
            $placeHolders[] = '?';
            $value = $entity->get($formFields[$i]);
            $type = $this->definition->getType($formFields[$i]);
            if ($type == 'bool') {
                $value = $value ? 1 : 0;
            }
            if ($type == 'date' || $type == 'datetime') {
                $value = $value == '' ? null : $value;
            }
            $values[] = $value;
        }
        $sql = 'INSERT INTO '.$this->definition->getTable().' (`'.implode('`,`', $fields).'`) VALUES (NOW(), NOW(), 0, '.implode(',', $placeHolders).')';
        $this->db->executeUpdate($sql, $values);

        $entity->set('id', $this->db->lastInsertId());
    }

    /**
     * {@inheritdoc}
     */
    public function update(CRUDEntity $entity) {
        $formFields = $this->definition->getEditableFieldNames();
        $fields = array_merge(array('updated_at', 'version'),
                $formFields);
        $values = array();
        $sets = array();
        for ($i = 0; $i < count($formFields); ++$i) {
            $value = $entity->get($formFields[$i]);
            $type = $this->definition->getType($formFields[$i]);
            if ($type == 'bool') {
                $value = $value ? 1 : 0;
            }
            if ($type == 'date' || $type == 'datetime') {
                $value = $value == '' ? null : $value;
            }
            $values[] = $value;
            $sets[] = '`'.$formFields[$i].'`=?';
        }
        $values[] = $entity->get('id');
        $sql = 'UPDATE '.$this->definition->getTable().' SET updated_at = NOW(), ';
        $sql .= implode(',', $sets).' WHERE id=?';
        $this->db->executeUpdate($sql, $values);

        return $this->db->lastInsertId();
    }

    /**
     * {@inheritdoc}
     */
    public function delete($id) {
        return $this->doDelete($id, $this->definition->isDeleteCascade());
    }

    /**
     * {@inheritdoc}
     */
    public function getReferences($table, $nameField) {
        $sql = 'SELECT id, `'.$nameField.'` FROM '.$table.' WHERE deleted_at IS NULL ORDER BY `'.$nameField.'`';
        $entries = $this->db->fetchAll($sql);
        $result = array();
        foreach ($entries as $entry) {
            $result[$entry['id']] = $entry[$nameField];
        }
        return $result;
    }

    /**
     * {@inheritdoc}
     */
    public function countBy($table, array $params, array $paramsOperators, $includeDeleted) {
        $sql = 'SELECT COUNT(id) AS amount FROM '.$table;
        $paramValues = array();
        $paramSQLs = array();
        foreach($params as $name => $value) {
            $paramSQLs[] = '`'.$name.'`'.$paramsOperators[$name].'?';
            $paramValues[] = $value;
        }
        $sql .= ' WHERE '.implode(' AND ', $paramSQLs);
        if ($includeDeleted) {
            $sql .= ' AND deleted_at IS NULL';
        }
        $result = $this->db->fetchAssoc($sql, $paramValues);
        return intval($result['amount']);
    }

    /**
     * {@inheritdoc}
     */
    public function fetchReferences(CRUDEntity $entity = null) {
        if (!$entity) {
            return;
        }
        foreach ($this->definition->getFieldNames() as $field) {
            if ($this->definition->getType($field) !== 'reference') {
                continue;
            }
            $nameField = $this->definition->getReferenceNameField($field);
            $sql = 'SELECT '.$nameField.' FROM ';
            $sql .= $this->definition->getReferenceTable($field).' WHERE id = ? AND deleted_at IS NULL';
            $result = $this->db->fetchAssoc($sql, array($entity->get($field)));
            if ($result) {
                $entity->set($field,
                    array('id' => $entity->get($field), 'name' => $result[$nameField]));
            }
        }
    }

}
