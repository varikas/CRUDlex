Extended Features
=================

While continuing with the library example, we add some more features as we go.

## Field Descriptions

Sometimes, you want to guide the user a bit more and be more descriptive than
just a label on the details and editpage of an entity. To do so, you can set a
description per field. In this case, the author of a book is more informative:

```yml
library:
    label: Library
    table: library
    pageSize: 5
    fields:
        name:
            type: text
            label: Name
book:
    label: Book
    table: book
    listFields: [id, created_at, updated_at, author, title]
    filter: [author, title]
    fields:
        author:
            type: text
            label: Author
            description: The Author of the Book
        title:
            type: text
            label: Title
        pages:
            type: int
            label: Title
```

## Displayed Fields in the List

As an addition, we only want to show the author and title in the big list
view of the books. We can do it by using the listFields entry:

```yml
library:
    label: Library
    table: library
    fields:
        name:
            type: text
            label: Name
book:
    label: Book
    table: book
    listFields: [id, created_at, updated_at, author, title]
    fields:
        author:
            type: text
            label: Author
        title:
            type: text
            label: Title
        pages:
            type: int
            label: Title
```

It is a simple list referencing the fields. Note the usage of the internal
fields "id", "created_at" and "update_at". "version" is not yet used and
every row where "deleted_at" is not null is marked as deleted, so this field
would make no sense to display.

## Pagination

Per default, 25 entities are listed per page on the list view. You can change
this number by setting the __pageSize__ parameter like this:

```yml
library:
    label: Library
    table: library
    pageSize: 5
    fields:
        name:
            type: text
            label: Name
book:
    label: Book
    table: book
    listFields: [id, created_at, updated_at, author, title]
    fields:
        author:
            type: text
            label: Author
        title:
            type: text
            label: Title
        pages:
            type: int
            label: Title
```

Only strings and integers are boring, so in the next chapter, all possible
data types are presented.

## Filters

Currently, the listview contains all entries on the pages. Often, it is desirable to filter it in order to search for specific entries. The fields to be allowed to filter on can be easily added with a filter array just like the listFields. This is how the books view could be filtered by author and title:

```yml
library:
    label: Library
    table: library
    pageSize: 5
    fields:
        name:
            type: text
            label: Name
book:
    label: Book
    table: book
    listFields: [id, created_at, updated_at, author, title]
    filter: [author, title]
    fields:
        author:
            type: text
            label: Author
        title:
            type: text
            label: Title
        pages:
            type: int
            label: Title
```

---

Previous: [Data Structure Definition](2_setup.md)

Next: [Data Types](5_datatypes)

[Table of Contents](0_manual.md)