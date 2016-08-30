Search.setIndex({envversion:46,filenames:["api/AbstractData","api/ControllerProvider","api/DataFactoryInterface","api/Entity","api/EntityDefinition","api/EntityDefinitionFactory","api/EntityDefinitionFactoryInterface","api/EntityDefinitionValidator","api/EntityDefinitionValidatorInterface","api/EntityValidator","api/FileProcessorInterface","api/MySQLData","api/MySQLDataFactory","api/ReferenceValidator","api/ServiceProvider","api/SimpleFilesystemFileProcessor","api/StreamedFileResponse","api/UniqueValidator","index","manual/addons","manual/constraints","manual/datastructures","manual/datatypes","manual/definitionvalidation","manual/events","manual/extendedfeatures","manual/introduction","manual/layouts","manual/setup","manual/templates"],objects:{"":{"AbstractData::$definition":[0,1,1,""],"AbstractData::$events":[0,1,1,""],"AbstractData::$fileProcessor":[0,1,1,""],"AbstractData::DELETION_FAILED_EVENT":[0,2,1,""],"AbstractData::DELETION_FAILED_STILL_REFERENCED":[0,2,1,""],"AbstractData::DELETION_SUCCESS":[0,2,1,""],"AbstractData::countBy":[0,0,1,""],"AbstractData::create":[0,0,1,""],"AbstractData::createEmpty":[0,0,1,""],"AbstractData::createFiles":[0,0,1,""],"AbstractData::delete":[0,0,1,""],"AbstractData::deleteFile":[0,0,1,""],"AbstractData::deleteFiles":[0,0,1,""],"AbstractData::doDelete":[0,0,1,""],"AbstractData::fetchReferences":[0,0,1,""],"AbstractData::get":[0,0,1,""],"AbstractData::getDefinition":[0,0,1,""],"AbstractData::getReferences":[0,0,1,""],"AbstractData::hydrate":[0,0,1,""],"AbstractData::listEntries":[0,0,1,""],"AbstractData::performOnFiles":[0,0,1,""],"AbstractData::popEvent":[0,0,1,""],"AbstractData::pushEvent":[0,0,1,""],"AbstractData::renderFile":[0,0,1,""],"AbstractData::shouldExecuteEvents":[0,0,1,""],"AbstractData::update":[0,0,1,""],"AbstractData::updateFiles":[0,0,1,""],"ControllerProvider::buildUpListFilter":[1,0,1,""],"ControllerProvider::connect":[1,0,1,""],"ControllerProvider::create":[1,0,1,""],"ControllerProvider::delete":[1,0,1,""],"ControllerProvider::deleteFile":[1,0,1,""],"ControllerProvider::edit":[1,0,1,""],"ControllerProvider::getAfterDeleteRedirectParameters":[1,0,1,""],"ControllerProvider::getNotFoundPage":[1,0,1,""],"ControllerProvider::modifyEntity":[1,0,1,""],"ControllerProvider::modifyFilesAndSetFlashBag":[1,0,1,""],"ControllerProvider::renderFile":[1,0,1,""],"ControllerProvider::setLocale":[1,0,1,""],"ControllerProvider::setValidationFailedFlashes":[1,0,1,""],"ControllerProvider::setupI18n":[1,0,1,""],"ControllerProvider::setupRoutes":[1,0,1,""],"ControllerProvider::setupTemplates":[1,0,1,""],"ControllerProvider::show":[1,0,1,""],"ControllerProvider::showList":[1,0,1,""],"ControllerProvider::staticFile":[1,0,1,""],"DataFactoryInterface::createData":[2,0,1,""],"Entity::$definition":[3,1,1,""],"Entity::$entity":[3,1,1,""],"Entity::__construct":[3,0,1,""],"Entity::get":[3,0,1,""],"Entity::getDefinition":[3,0,1,""],"Entity::getRaw":[3,0,1,""],"Entity::populateViaRequest":[3,0,1,""],"Entity::set":[3,0,1,""],"Entity::toType":[3,0,1,""],"EntityDefinition::$children":[4,1,1,""],"EntityDefinition::$childrenLabelFields":[4,1,1,""],"EntityDefinition::$deleteCascade":[4,1,1,""],"EntityDefinition::$fields":[4,1,1,""],"EntityDefinition::$filter":[4,1,1,""],"EntityDefinition::$initialSortAscending":[4,1,1,""],"EntityDefinition::$initialSortField":[4,1,1,""],"EntityDefinition::$label":[4,1,1,""],"EntityDefinition::$listFields":[4,1,1,""],"EntityDefinition::$locale":[4,1,1,""],"EntityDefinition::$localeLabels":[4,1,1,""],"EntityDefinition::$pageSize":[4,1,1,""],"EntityDefinition::$serviceProvider":[4,1,1,""],"EntityDefinition::$standardFieldLabels":[4,1,1,""],"EntityDefinition::$table":[4,1,1,""],"EntityDefinition::__construct":[4,0,1,""],"EntityDefinition::addChild":[4,0,1,""],"EntityDefinition::checkFieldNames":[4,0,1,""],"EntityDefinition::getChildren":[4,0,1,""],"EntityDefinition::getChildrenLabelFields":[4,0,1,""],"EntityDefinition::getDescription":[4,0,1,""],"EntityDefinition::getEditableFieldNames":[4,0,1,""],"EntityDefinition::getFieldLabel":[4,0,1,""],"EntityDefinition::getFieldNames":[4,0,1,""],"EntityDefinition::getFieldValue":[4,0,1,""],"EntityDefinition::getFilePath":[4,0,1,""],"EntityDefinition::getFilter":[4,0,1,""],"EntityDefinition::getFilteredFieldNames":[4,0,1,""],"EntityDefinition::getFixedValue":[4,0,1,""],"EntityDefinition::getFloatStep":[4,0,1,""],"EntityDefinition::getInitialSortField":[4,0,1,""],"EntityDefinition::getLabel":[4,0,1,""],"EntityDefinition::getListFields":[4,0,1,""],"EntityDefinition::getPageSize":[4,0,1,""],"EntityDefinition::getPublicFieldNames":[4,0,1,""],"EntityDefinition::getReadOnlyFields":[4,0,1,""],"EntityDefinition::getReferenceEntity":[4,0,1,""],"EntityDefinition::getReferenceNameField":[4,0,1,""],"EntityDefinition::getReferenceTable":[4,0,1,""],"EntityDefinition::getReferenceValue":[4,0,1,""],"EntityDefinition::getServiceProvider":[4,0,1,""],"EntityDefinition::getSetItems":[4,0,1,""],"EntityDefinition::getTable":[4,0,1,""],"EntityDefinition::getType":[4,0,1,""],"EntityDefinition::isConstraint":[4,0,1,""],"EntityDefinition::isDeleteCascade":[4,0,1,""],"EntityDefinition::isInitialSortAscending":[4,0,1,""],"EntityDefinition::isRequired":[4,0,1,""],"EntityDefinition::isUnique":[4,0,1,""],"EntityDefinition::setChildrenLabelFields":[4,0,1,""],"EntityDefinition::setDeleteCascade":[4,0,1,""],"EntityDefinition::setDescription":[4,0,1,""],"EntityDefinition::setFieldLabel":[4,0,1,""],"EntityDefinition::setFieldValue":[4,0,1,""],"EntityDefinition::setFilePath":[4,0,1,""],"EntityDefinition::setFilter":[4,0,1,""],"EntityDefinition::setFixedValue":[4,0,1,""],"EntityDefinition::setFloatStep":[4,0,1,""],"EntityDefinition::setInitialSortAscending":[4,0,1,""],"EntityDefinition::setInitialSortField":[4,0,1,""],"EntityDefinition::setLabel":[4,0,1,""],"EntityDefinition::setListFields":[4,0,1,""],"EntityDefinition::setLocale":[4,0,1,""],"EntityDefinition::setPageSize":[4,0,1,""],"EntityDefinition::setRequired":[4,0,1,""],"EntityDefinition::setServiceProvider":[4,0,1,""],"EntityDefinition::setSetItems":[4,0,1,""],"EntityDefinition::setTable":[4,0,1,""],"EntityDefinition::setType":[4,0,1,""],"EntityDefinition::setUnique":[4,0,1,""],"EntityDefinitionFactory::createEntityDefinition":[5,0,1,""],"EntityDefinitionFactoryInterface::createEntityDefinition":[6,0,1,""],"EntityDefinitionValidator::validate":[7,0,1,""],"EntityDefinitionValidatorInterface::validate":[8,0,1,""],"EntityValidator::$definition":[9,1,1,""],"EntityValidator::$entity":[9,1,1,""],"EntityValidator::__construct":[9,0,1,""],"EntityValidator::buildUpData":[9,0,1,""],"EntityValidator::buildUpRules":[9,0,1,""],"EntityValidator::fieldToRules":[9,0,1,""],"EntityValidator::validate":[9,0,1,""],"FileProcessorInterface::createFile":[10,0,1,""],"FileProcessorInterface::deleteFile":[10,0,1,""],"FileProcessorInterface::renderFile":[10,0,1,""],"FileProcessorInterface::updateFile":[10,0,1,""],"MySQLData::$database":[11,1,1,""],"MySQLData::$definition":[11,1,1,""],"MySQLData::$events":[11,1,1,""],"MySQLData::$fileProcessor":[11,1,1,""],"MySQLData::$useUUIDs":[11,1,1,""],"MySQLData::DELETION_FAILED_EVENT":[11,2,1,""],"MySQLData::DELETION_FAILED_STILL_REFERENCED":[11,2,1,""],"MySQLData::DELETION_SUCCESS":[11,2,1,""],"MySQLData::__construct":[11,0,1,""],"MySQLData::addFilter":[11,0,1,""],"MySQLData::addPagination":[11,0,1,""],"MySQLData::addSort":[11,0,1,""],"MySQLData::countBy":[11,0,1,""],"MySQLData::create":[11,0,1,""],"MySQLData::createEmpty":[11,0,1,""],"MySQLData::createFiles":[11,0,1,""],"MySQLData::delete":[11,0,1,""],"MySQLData::deleteChildren":[11,0,1,""],"MySQLData::deleteFile":[11,0,1,""],"MySQLData::deleteFiles":[11,0,1,""],"MySQLData::doDelete":[11,0,1,""],"MySQLData::fetchReferences":[11,0,1,""],"MySQLData::fetchReferencesForField":[11,0,1,""],"MySQLData::generateUUID":[11,0,1,""],"MySQLData::get":[11,0,1,""],"MySQLData::getDefinition":[11,0,1,""],"MySQLData::getReferences":[11,0,1,""],"MySQLData::hasChildren":[11,0,1,""],"MySQLData::hydrate":[11,0,1,""],"MySQLData::listEntries":[11,0,1,""],"MySQLData::performOnFiles":[11,0,1,""],"MySQLData::popEvent":[11,0,1,""],"MySQLData::pushEvent":[11,0,1,""],"MySQLData::renderFile":[11,0,1,""],"MySQLData::setValuesAndParameters":[11,0,1,""],"MySQLData::shouldExecuteEvents":[11,0,1,""],"MySQLData::update":[11,0,1,""],"MySQLData::updateFiles":[11,0,1,""],"MySQLDataFactory::$database":[12,1,1,""],"MySQLDataFactory::$useUUIDs":[12,1,1,""],"MySQLDataFactory::__construct":[12,0,1,""],"MySQLDataFactory::createData":[12,0,1,""],"ReferenceValidator::getInvalidDetails":[13,0,1,""],"ReferenceValidator::isValid":[13,0,1,""],"ServiceProvider::$datas":[14,1,1,""],"ServiceProvider::$manageI18n":[14,1,1,""],"ServiceProvider::basename":[14,0,1,""],"ServiceProvider::configureDefinition":[14,0,1,""],"ServiceProvider::createDefinition":[14,0,1,""],"ServiceProvider::formatDate":[14,0,1,""],"ServiceProvider::formatDateTime":[14,0,1,""],"ServiceProvider::formatFloat":[14,0,1,""],"ServiceProvider::formatTime":[14,0,1,""],"ServiceProvider::getData":[14,0,1,""],"ServiceProvider::getEntities":[14,0,1,""],"ServiceProvider::getLanguageName":[14,0,1,""],"ServiceProvider::getLocaleLabels":[14,0,1,""],"ServiceProvider::getLocales":[14,0,1,""],"ServiceProvider::getTemplate":[14,0,1,""],"ServiceProvider::init":[14,0,1,""],"ServiceProvider::initChildren":[14,0,1,""],"ServiceProvider::initLocales":[14,0,1,""],"ServiceProvider::initMissingServiceProviders":[14,0,1,""],"ServiceProvider::isManagingI18n":[14,0,1,""],"ServiceProvider::readYaml":[14,0,1,""],"ServiceProvider::register":[14,0,1,""],"ServiceProvider::setLocale":[14,0,1,""],"ServiceProvider::validateEntityDefinition":[14,0,1,""],"SimpleFilesystemFileProcessor::$basePath":[15,1,1,""],"SimpleFilesystemFileProcessor::__construct":[15,0,1,""],"SimpleFilesystemFileProcessor::createFile":[15,0,1,""],"SimpleFilesystemFileProcessor::deleteFile":[15,0,1,""],"SimpleFilesystemFileProcessor::getPath":[15,0,1,""],"SimpleFilesystemFileProcessor::renderFile":[15,0,1,""],"SimpleFilesystemFileProcessor::updateFile":[15,0,1,""],"StreamedFileResponse::getStreamedFileFunction":[16,0,1,""],"UniqueValidator::getInvalidDetails":[17,0,1,""],"UniqueValidator::isValid":[17,0,1,""],AbstractData:[0,3,1,""],ControllerProvider:[1,3,1,""],DataFactoryInterface:[2,4,1,""],Entity:[3,3,1,""],EntityDefinition:[4,3,1,""],EntityDefinitionFactory:[5,3,1,""],EntityDefinitionFactoryInterface:[6,4,1,""],EntityDefinitionValidator:[7,3,1,""],EntityDefinitionValidatorInterface:[8,4,1,""],EntityValidator:[9,3,1,""],FileProcessorInterface:[10,4,1,""],MySQLData:[11,3,1,""],MySQLDataFactory:[12,3,1,""],ReferenceValidator:[13,3,1,""],ServiceProvider:[14,3,1,""],SimpleFilesystemFileProcessor:[15,3,1,""],StreamedFileResponse:[16,3,1,""],UniqueValidator:[17,3,1,""]}},objnames:{"0":["php","method","PHP method"],"1":["php","attr","PHP attribute"],"2":["php","const","PHP const"],"3":["php","class","PHP class"],"4":["php","interface","PHP interface"]},objtypes:{"0":"php:method","1":"php:attr","2":"php:const","3":"php:class","4":"php:interface"},terms:{"5px":27,"__construct":[3,4,9,11,12,15],"__dir__":[19,25,27,28],"_dir_":27,"abstract":[0,28],"boolean":[1,3,14],"case":[0,4,11,19,21,22,25,27,29],"char":22,"class":[0,1,3,4,5,7,9,10,11,12,13,14,15,16,17,22,27],"default":[4,5,21,22,23,25,27,28],"float":[3,14],"function":[0,11,14,16,24],"int":[21,22,29],"long":[0,11],"new":[0,1,4,6,11,19,22,25,27,28],"null":[0,1,3,4,11,14,21,24,25],"public":4,"return":[0,1,2,3,4,6,8,9,10,11,14,15,16,24],"static":1,"switch":[],"throw":[14,23],"true":[0,1,4,11,14,19,20,22,24,25],"try":22,"void":[0,8,10],"while":25,abbrevi:26,abc:22,abl:26,about:[21,22,24],access:14,accord:[9,11,14],achiev:29,action:[1,14,24,26],activ:[1,22,25],actual:[0,9,28],add:[0,4,11,19,22,25,28,29],addchild:4,addev:19,addfilt:11,addit:25,addon:[],addpagin:11,addsort:11,adjust:29,admin:[],administr:26,after:[0,1,11,14,24],afterward:14,against:[9,19],alert:27,all:[0,1,4,9,11,14,15,19,21,22,25,26,27,28,29],allow:[22,25],alreadi:27,also:27,alter:22,although:28,alwai:[22,26],amazon:[19,22],amazons3fileprocessor:19,amet:22,amount:[0,4,11,21],ani:[0,11,19],anoth:[0,11,27],anyth:23,api:[18,19],app:[1,14,19,22,23,24,25,27,28,29],appear:4,applic:[1,14,19,26,27],appropri:[1,25],around:[19,25],arrai:[0,1,4,6,8,9,11,14,19,22,25,27,28],arround:3,ascend:[0,4,11,25],assum:[21,27],author:[20,21,22,25],auto:19,auto_incr:21,automat:19,autor:25,avail:[0,11,14,18,21,22,24,28],awar:[0,10,11],back:[19,22],bar:22,base:[15,22],basenam:14,basepath:15,basic:26,befor:[0,11,23,24,27],belong:[0,22],besid:21,best:14,between:22,big:25,bigger:25,bigint:22,bit:[23,25],block:[27,29],blue:22,bodi:27,book:[20,21,22,25,27,28,29],book_ibfk_1:22,booklist:29,bool:29,booleanfield:29,boolfield:29,bootstrap:27,bore:25,both:20,bottom:27,box:0,branch:19,broke:[0,11],btn:27,buch:25,build:[0,1,9,21],buildupdata:9,builduplistfilt:1,builduprul:9,button:[27,29],call:[0,11,14,27],can:[0,2,11,20,22,24,25,27,29],cancel:24,care:28,cascad:[],caus:1,certain:[14,24,27],chain:[0,11],chang:[25,29],chapter:[19,21,25,26,27,28],charact:22,charset:28,check:[4,9,11,13,17],checkfieldnam:4,child:4,children:14,childrenlabelfield:[4,22],choic:[21,22],chosen:22,clear:24,click:22,clickabl:22,close:27,closur:[0,11,16,24],code:[1,14,24],color:22,column:[21,29],com:22,combin:[],come:[26,27,28],compos:28,comprehens:22,concret:14,condit:0,configur:[11,14,19,26],configuredefinit:14,connect:1,consetetur:22,constant:[0,11],constraint:[],construct:[2,15],constructor:[3,4,9,11,12,15],contain:[0,4,9,10,11,14,25],content:[14,18,20,27,28,29],continu:[21,25],control:[1,2,19,20,21,28],controllercollect:1,controllerproviderinterfac:1,convert:[3,19],cost:23,could:25,count:[0,9],countbi:[0,11],cours:3,creat:[0,1,2,4,6,10,11,14,19,21,22,24,25,26,27,28,29],created_at:[4,6,21,25],createdata:[2,12],createdefinit:14,createempti:[0,11],createentitydefinit:[5,6],createfil:[0,10,11,15,24],creation:[1,6,19,21,24],crud:[1,4,5,6,8,14,18,19,21,22,23,24,25,26,27,28,29],cruddata:1,cruddatafactoryinterfac:25,crudfil:14,crudlexamazons3fileprocessor:[],crudlexentitydefinitionvalidatorinterfac:23,crudlexsampl:21,crudlexus:[],crudmysqldata:25,crudusersetup:19,css:27,current:[1,4,6,11,14,20,22,25,28],cursor:27,custom:[],cut:22,danger:27,data:[1,2,3,7,8,10,14],databas:[2,3,11,12,20,21,24,26,28],datafactori:[14,19,22,25,28],datasourc:[0,11],date:14,datefield:29,datepick:27,datetim:[14,19,21],datetimefield:29,datetimepick:27,dbal:[11,12],dbname:28,debug:23,decim:22,declar:[4,21,22],defens:[15,22],defin:[0,3,4,11,14,20,21,22,24,27,28],definit:[1,2,3,7,8,12,14,20],definitionschema:7,delet:[1,10,15,21],deletecascad:[0,4,11,22],deletechildren:11,deleted_at:[4,21,25],deletefil:[0,1,10,11,15,24],deletion_failed_ev:[0,11],deletion_failed_still_referenc:[0,11],deletion_success:[0,11],depend:[3,14],deriv:25,descend:[0,11,25],describ:[18,19,21,22,26],descript:19,desir:[14,19,25,27],detail:[1,4,22,25,26],determin:14,differ:22,dir:22,directli:[21,24,29],disabl:25,discuss:28,dismiss:27,displai:[14,21,22],div:27,doc:19,doctrin:[11,12],doctrineserviceprovid:28,dodelet:[0,11],doesn:[15,22,24],dolor:22,don:[4,22,27,29],dot:[22,27],doubl:[14,22],driver:18,dropdown:0,due:[0,11],dure:5,each:[0,11,14,19,21,26,27,29],ead:26,easi:[18,20,26],easili:25,edit:[1,4,22,26,27,29],editpag:25,effect:14,either:[0,1,11,14,20,22],element:[4,22],elet:26,els:[0,3,14,25],email:19,empti:[0,4,11,14],endblock:27,endfor:27,endif:27,entiti:[1,2],entitydefinit:[1,2,3],entitynam:[0,10,11,15],entiydefinitionfactoryinterfac:5,entri:[0,4,11,14,21,25,26],environ:23,error:[1,9],etc:[19,26],even:24,event:19,ever:15,everi:[18,24,25],exact:21,exactli:26,exampl:[3,14,20,21,22,24,25,27,28,29],except:[14,23],exclud:4,excludedelet:[0,11],execut:[0,11,24],exist:[0,4,10,11,14,20,21,29],exlud:4,expect:1,expectedvers:9,extend:[],factori:[1,12,14],fail:[0,1,9,11,14],fall:22,fals:[0,1,11,12,14,19,22,24,25],far:[21,29],featur:19,fetch:[0,11],fetchrefer:[0,11],fetchreferencesforfield:11,few:22,field:[1,3,5,6,10,14,15,17,19,20],fieldlabel:29,fieldnam:4,fieldstructur:6,fieldtorul:9,file:[1,2,10,14,15,19],filefield:29,fileinfo:18,filenam:[14,16],filepath:22,fileprocessor:[0,2,11,12,14,19,22],fileprocessorinterfac:2,filesystem:22,fill:[20,22],filter:1,filteract:1,filteroper:[0,1,11],filtertous:1,find:29,fire:[0,11],firewal:19,first:[0,11,19,21,24,25,27,28],fit:14,fix:[],fixedfield:29,fixedvalu:22,flag:[11,12],flash:[1,27],flashbag:27,flashtyp:27,flashtypeavail:27,flexibl:[6,26],floatfield:29,floatstep:22,folder:27,follow:[19,27,28],foo:22,footer:[27,29],forc:22,foreign:[],forget:22,form:22,format:14,formatd:14,formatdatetim:14,formatfloat:14,formattim:14,found:[1,4],from:[3,8,10,14,19,22,24,25],fulfil:0,full:[0,11,22],fullfil:0,further:[22,28],futur:28,gener:[1,11,16,18,19,26,27],generateuuid:11,get:[0,1,3,4,11,14,19,21,22,24,25,27],getafterdeleteredirectparamet:1,getchildren:4,getchildrenlabelfield:4,getdata:[14,19,24],getdefinit:[0,3,11],getdescript:4,geteditablefieldnam:4,getent:14,getfieldlabel:4,getfieldnam:4,getfieldvalu:4,getfilepath:4,getfilt:4,getfilteredfieldnam:4,getfixedvalu:4,getfloatstep:4,getinitialsortfield:4,getinvaliddetail:[13,17],getlabel:4,getlanguagenam:14,getlistfield:4,getlocal:14,getlocalelabel:14,getnotfoundpag:1,getpages:4,getpath:15,getpublicfieldnam:4,getraw:3,getreadonlyfield:4,getrefer:[0,11],getreferenceent:4,getreferencenamefield:4,getreferencet:4,getreferencevalu:4,getserviceprovid:4,getsetitem:4,getstreamedfilefunct:16,gettabl:4,gettempl:14,getter:[14,19],gettoken:19,gettyp:4,give:[22,29],given:[0,3,4,5,7,8,9,11,14,15,16,22,24],global:[],goe:14,gone:22,good:[14,21,26,27,29],got:21,grab:19,green:22,guid:[25,28],had:22,hand:[2,6,14,19,23,25],handl:[1,10,19,22,24],hard:26,haschildren:11,hash:[19,24],have:[0,4,11,19,20,21,22,25,26,27,28,29],head:27,header:[0,10,11,27,29],here:[0,10,11,19,21,22,25],hide:21,hierarchi:27,him:19,hint:[],hold:[0,1,3,4,11,12,14,15],host:28,how:[3,19,24,25,27],http:[0,1,10,11,14,21,22,28],hydrat:[0,11],i18n:[1,14],imag:22,implement:[1,2,3,5,12,14,15,21,22],implicit:4,includ:[10,27],increment:[],index:[18,22],inform:[21,25],inheritdoc:[5,7,11,12,13,15,17],init:14,initchildren:14,initi:[14,19],initialsortascend:[4,25],initialsortfield:[4,25],initlocal:14,initmissingserviceprovid:14,input:[1,3],inset:9,instanc:[0,1,2,4,6,9,11,12,14,19,22,27,28],instanti:19,instead:24,integ:[1,3,21],integerfield:29,interfac:[2,6,8,10,19,23],intern:[4,19,25,28,29],interrupt:24,intfield:29,introduct:[],invalid:[1,3,4,14],ipsum:22,isconstraint:4,isdeletecascad:4,isinitialsortascend:4,ismanagingi18n:14,isn:11,isrequir:4,isuniqu:4,isutc:14,isvalid:[13,17],item:[4,21],itself:[27,28],javascript:27,jqueri:27,json:28,just:[0,4,6,10,11,20,25,27,29],kei:[3,5,6,12,14,21],kept:28,known:27,label:[5,6,14,19,20,21,22],label_:25,label_d:25,lambda:16,languag:14,last:[21,22,24],later:28,latest:[0,11],layer:28,layout:14,lead:22,least:1,let:[19,21],level:[25,27],lib:[20,22],librari:[19,20,21,22,24,25],like:[0,3,4,6,10,11,14,19,22,24,25,27,28,29],line:22,linebreak:22,link:[14,21,25,27],list:[1,14,22,24],listentri:[0,1,11],listfield:[4,25],listview:[4,25],local:[1,4,6,14,25],locale_fallback:25,localelabel:[4,5,6],lock:[1,9,21],log:[],longer:22,longtext:22,look:[3,22,27],lorem:22,lot:26,mail:[19,24],make:[6,25],manag:[2,14,19],managei18n:[14,25],mandatori:20,mani:[22,24],manual:[14,18],map:[1,9,14],margin:27,mark:25,master:19,matter:3,maximum:[0,11],mayb:4,meant:19,mechan:[21,22],mediumint:22,mediumtext:22,menu:27,messag:21,metayaml:7,method:[1,11],might:[14,19,23,24,25,26],mimetyp:[0,10,11],minim:[21,26,28],miss:14,mix:[1,3,4],mode:1,modif:[1,24],modifi:24,modifyent:1,modifyfilesandsetflashbag:1,moment:[0,11,24,27],more:[19,21,22,24,25,27,28],most:[26,27],mount:[21,28],multi:22,multilin:[],multilinefield:29,must:[0,11,24],myauthor:25,mybooklayout:27,mycreatebooklayout:27,mycustomvalid:23,myfileprocessor:22,mylayout:27,myownentitydefinitionfactori:25,myshowlayout:27,mysql:21,mysqldata:[],mysqldatafactori:2,name:[0,1,4,10,11,14,15,20,21,22,25,26,27,28],namefield:[0,11,19,20,22],navig:21,need:[14,19,20,22,26,27,29],net:14,newli:[0,2,10,11],next:[25,26,28],notat:14,note:[20,21,25,29],noth:[4,14],now:[15,21,22,28],number:25,object:[3,24,28],off:14,offer:[1,4,14,19,25,26],often:[25,26],onli:[1,4,9,21,22,25,26,28],oper:[0,1,19],optimist:[1,9,21],optimisticlock:1,option:[22,25,28],order:[0,4,11,14,19,22,24,25,27],other:[4,22],otherent:22,othernam:22,othert:22,our:[20,21,22],output:[0,10,11,16],overrid:22,own:23,packag:[22,25],page:[1,21,22],pages:[4,25],pagin:[],pair:3,panel:[],param:[0,11],paramet:[1,2,3,5,6,7,8,10,12,13,14,15,17,22,24],paramsoper:[0,11],parent:22,pars:[8,14],part:[19,29],pass:[0,3,9,11],password:[],password_reset:19,passwordreset:19,path:[4,15,21,27],pattern:14,pdate:26,pecl:18,per:[4,20,21,25],perform:[0,9,11,19,23],performonfil:[0,11],persist:0,philiplb:[27,28],php:[14,18,22],physic:22,picker:27,place:[21,27],plu:[19,27],point:[0,11,23,26,27,29],pointer:27,pop:[0,11],popev:[0,11,24],popul:[3,19],populateviarequest:3,possibl:[23,25],post:1,postprocess:1,prefil:[],prefix:27,prepend:27,present:25,previou:21,primari:12,process:[0,11],processor:[0,2,11,14],product:23,profil:[],project:[19,21,25],proper:22,properti:[0,3,4,9,11,12,14,15,27],protect:[0,3,4,9,11,12,14,15],provid:[2,4,6,9,14,19,23,25,27,28],push:24,pushev:[0,11,24],queri:11,querybuild:11,quick:[9,26],raw:[0,3,9,11],react:24,read:[0,4,14],readabl:19,readyaml:14,real:22,reat:26,recommend:[19,22,27],red:22,redirect:1,redirectpag:1,refer:[1,13,19,20],referenc:[0,4,11,22,25],referencefield:29,refus:22,regist:[14,19,22,23,24,25,27,28],registr:[5,6,25],rel:22,relat:22,relationship:22,reli:28,remov:[0,11,22,24],render:[0,1,10,11,27,29],renderfield:29,renderfil:[0,1,10,11,15],replac:22,repres:[3,22],represent:22,request:[0,1,3,10,11,15],requir:[4,9,18,19,20,28],reset:[],resolv:27,resourc:1,respons:[0,1,10,11,16],rest:[22,29],result:[0,14],retriev:[0,22],romaricdrigon:7,root:29,rout:1,row:[0,3,11,20,21,25],rule:9,sadipsc:22,sai:[3,21],salt:19,same:[0,4,20,21,26],sampl:21,save:[1,22,24],scientif:14,scratch:[],search:[18,25],second:[19,21],section:[14,27,28],secur:19,securityserviceprovid:19,see:[0,2,3,4,9,11,12,14,15,19,21],seiten:25,select:[0,22,29],sens:25,serv:1,servic:[2,4,6,14,23,27],serviceprovid:[2,5,6],serviceproviderinterfac:14,session:27,set:[1,3,10,14,19],setchildrenlabelfield:4,setdeletecascad:4,setdescript:4,setfield:29,setfieldlabel:4,setfieldvalu:4,setfilepath:4,setfilt:4,setfixedvalu:4,setfloatstep:4,setinitialsortascend:4,setinitialsortfield:4,setitem:22,setlabel:4,setlistfield:4,setlocal:[1,4,14],setmethod:11,setpages:4,setrequir:4,setserviceprovid:4,setsetitem:4,settabl:4,settyp:4,setuniqu:4,setup:[1,14,22,24,25,26],setupi18n:1,setuprout:1,setuptempl:1,setvalidationfailedflash:1,setvalu:11,setvaluesandparamet:11,sever:19,shorten:[14,22],should:[0,4,20,23,24,27,28],shouldexecuteev:[0,11],show:[1,14],showlist:1,shown:22,side:22,signatur:[0,11,24],silex:[1,14,18,19,25,26,27,28],silexcontrollercollect:1,simpl:[21,25],simplefilesystemfileprocessor:10,simpli:[15,19,29],singl:[1,3,21,22],sit:22,situat:24,size:[0,4,10,11,22],skip:[0,11],small:[16,21],smallint:22,soft:[0,21],some:[19,21,25,26,27],someon:24,someth:24,sometim:25,somewher:25,sort:[],sortascend:[0,11],sortfield:[0,11],sourc:4,space:22,special:25,specif:[0,3,10,11,25,27],specifi:[0,4,29],sql:21,src:[27,29],stand:26,standard:[16,27],standardfieldlabel:[4,5,6],start:[26,27,29],state:4,staticfil:1,statu:1,step:[4,22],still:[11,22,26],stop:[0,11],storag:22,store:[1,4,15,22,24,28],stream:[0,10,11,16],string:[0,1,3,4,6,9,10,11,14,15,16,21,25],structur:[],sub:[11,19],subchapt:27,subchildren:0,subfold:[15,22],success:[0,11,27],support:[20,22,25,28],sure:23,surround:19,symfoni:19,symfonycomponenthttpfoundationredirectrespons:1,symfonycomponenthttpfoundationrespons:10,system:[14,15],tabl:[5,6],tag:[19,27],take:[0,3,11,24,28],tediou:26,tell:22,templat:[1,14,27],text:[19,20,21],textfield:29,than:[22,25],thei:[0,4,11,22,24,29],them:19,thi:[0,1,2,3,4,9,10,11,14,15,18,19,20,21,22,23,24,25,26,27,28,29],thing:9,think:22,those:[22,29],though:22,three:[4,22,24],through:28,time:[14,21,22,24,28],timestamp:[21,22],timestr:14,timezon:14,tinyint:22,tinytext:22,titel:25,titl:[20,21,22,25],token:19,token_storag:19,told:21,too:[0,10,11],tooltip:[22,27],totyp:3,toward:4,translat:[],translationserviceprovid:25,tri:14,turn:[],tweak:29,twig:[14,27,29],twigserviceprovid:27,two:[19,20,21,25],txt:22,type:[3,19,20,21],unchang:14,under:21,uniqu:[4,9,17,19,20],until:22,upcom:11,updat:[0,1,10,11,21,24],update_at:25,updated_at:[4,6,21,25],updatefil:[0,10,11,15,24],upload:[0,1,2,10,11,18,19,22],url:21,urlfield:29,usag:25,useful:3,user:2,userbas:19,usernam:19,userprovid:[],userrol:19,usersetup:19,useuuid:[11,12],utc:[14,21],utf8:28,util:16,uuid:12,valid:[1,3,7,8,13,14,17,21],validateentitydefinit:[14,23],valu:[3,13,14,17,19,20,22],varchar:[22,25],vari:26,variat:2,variou:[21,27],vendor:27,version:[4,9,19,21,25],via:[6,14,19,22],view:[4,22,25,26,27,29],visit:25,wai:28,want:[2,19,22,23,24,25,27,29],web:[],were:[4,24],what:[2,3,11,21,24],whatev:28,when:[4,19,21,25,27],whenev:26,where:[1,4,15,21,22,24,25,26,27],whether:[0,1,4,9,11,12,14,20],which:[1,4,8,14,16,22,24,28,29],whole:[14,24],within:22,without:22,work:[19,29],would:[21,22,25,27],write:[0,26],wrong:[14,23],www:22,yaml:[4,6,14],yet:[14,25],yml:[7,8,14,19,21,22,23,25,28],you:[19,21,22,23,24,25,26,27,28,29],your:[14,19,21,22,23,24,25,26],youraccesskei:19,yourbucket:19,yourcrud:[19,22,25,28],yourdbnam:28,yourdbpassword:28,yourdbus:28,yourhost:28,yoursecretaccesskei:19},titles:["CRUDlex\\AbstractData","CRUDlex\\ControllerProvider","CRUDlex\\DataFactoryInterface","CRUDlex\\Entity","CRUDlex\\EntityDefinition","CRUDlex\\EntityDefinitionFactory","CRUDlex\\EntityDefinitionFactoryInterface","CRUDlex\\EntityDefinitionValidator","CRUDlex\\EntityDefinitionValidatorInterface","CRUDlex\\EntityValidator","CRUDlex\\FileProcessorInterface","CRUDlex\\MySQLData","CRUDlex\\MySQLDataFactory","CRUDlex\\ReferenceValidator","CRUDlex\\ServiceProvider","CRUDlex\\SimpleFilesystemFileProcessor","CRUDlex\\StreamedFileResponse","CRUDlex\\UniqueValidator","Welcome to CRUDlex&#8217;s documentation!","Addons","Constraints","Data Structure Definition","Data Types","Definition Validation","Events","Extended Features","Introduction","Overriding Layouts","Setup","Overriding Templates"],titleterms:{"boolean":22,"float":22,"switch":25,abstractdata:0,access:19,action:[27,29],addit:29,addon:19,admin:19,auto:25,cascad:22,children:22,combin:25,connect:19,constraint:20,controllerprovid:1,creation:25,crudlex:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],crudlexamazons3fileprocessor:19,crudlexus:19,custom:23,data:[19,21,22],datafactoryinterfac:2,date:22,datetim:22,definit:[21,23],delet:22,descript:25,displai:25,document:18,entiti:[3,21,25,27],entitydefinit:[4,25],entitydefinitionfactori:5,entitydefinitionfactoryinterfac:6,entitydefinitionvalid:7,entitydefinitionvalidatorinterfac:8,entityvalid:9,event:24,extend:25,featur:25,field:[21,25,29],file:22,fileprocessorinterfac:10,filter:25,fix:22,foreign:22,form:[25,29],from:27,global:27,hint:22,i18n:25,implement:[23,25],includ:29,increment:25,indic:18,initi:25,instead:25,integ:22,introduct:26,kei:[22,25],label:25,layout:[27,29],list:25,log:19,manag:25,multilin:22,mysql:22,mysqldata:11,mysqldatafactori:12,off:[23,25],overrid:[27,29],own:[25,27],page:[25,29],pagin:25,panel:19,paramet:25,password:19,prefil:25,primari:25,profil:25,refer:22,referencevalid:13,reset:19,role:19,scratch:27,serviceprovid:14,set:[22,25],setup:28,show:22,simplefilesystemfileprocessor:15,singl:[27,29],sort:25,streamedfilerespons:16,structur:21,tabl:18,templat:29,text:22,translat:25,turn:23,type:22,uniquevalid:17,url:22,user:19,userprovid:19,uuid:25,valid:23,valu:25,web:25,welcom:18,your:27}})