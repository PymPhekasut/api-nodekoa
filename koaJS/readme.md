Create a rest api's to do the following tasks (using KOA and node.js)
Use postman to make API calls

1.) POST: This should be the body of the post request (initially)
[{
"id" : 1,
"name" : "John Doe",
"age": 30,
"location" : "Sydney"
},
{
"id" : 2,
"name" : "Jane Doe",
"age": 40,
"location" : "Melbourne"
},
{
"id" : 3,
"name" : "James",
"age": 20,
"location" : "Adelaide"
},
{
"id" : 4,
"name" : "M. Arbeloa",
"age": 27,
"location" : "Spain"
}]
MANDATORY CHALLENGES:
a) The expected output of the FIRST POST request should be a file called "PEOPLE.json" which contains the exact same information as the request body.
b) If another request is made with another person's detail in the request body, they should be added to the array created inside the "PEOPLE.json" file
OPTIONAL CHALLENGES:
c) If the shape of the incoming request body is not correct, ie, has a json key that is not 'id', 'name', 'age' or 'location', the request should be rejected with the appropriate error code
d) Create an additional PUT request that will accept the users name in the body and change their age/location depending on what has been provided in the body. [Note: the name should never be changed]
Eg: if {"id" : 3 , "age" : 22 } is provided as the put request body, the "PEOPLE.json" file should be updated accordingly
e) Create an additional GET request to show the contents of the file
