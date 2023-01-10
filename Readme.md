## GET /people

Retrieves a list of all people in the system.

Response

200 OK on success.
```
[
  {
    "id": "1",
    "name": "John Doe",
    "email": "johndoe@example.com"
  },
  {
    "id": "2",
    "name": "Jane Smith",
    "email": "janesmith@example.com"
  }
]

```

## POST /people

Adds a new person to the system.

Request Body

firstName: (string) The first name of the person.
lastName: (string) The last name of the person.
email: (string) The email of the person.
age: (number) The age of the person

Response

200 on success.
400 Bad Request if the request body is missing one of the required fields or the email is already exist.
'''
{
    "id": "3",
    "name": "Bob",
    "age":25,
    "email": "bob@example.com"
}

'''


## GET /people/:id

Retrieves the information for a single person.

Path Parameters

id: (string) The ID of the person to retrieve.
Response

200 OK on success.
404 Not Found if the person with the given ID does not exist.

'''
{
    "id": "1",
    "name": "John Doe",
    "email": "johndoe@example.com"
}
'''

## PUT /people/:id

Updates the information for a single person.

Path Parameters

id: (string) The ID of the person to update.
Request Body

name: (string) The new name of the person.
email: (string) The new email of the person.
Response

200 OK on success.
404 Not Found if the person with the given ID does not exist.


# DELETE /people/:id

Removes a single person from the system.

Path Parameters

id: (string) The ID of the person to remove.
Response

204 No Content on success.
404 Not Found if the person with the given ID does not exist.