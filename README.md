# Academics API

### Description

I built an API for myself to help me track my missed lectures and upcoming assessments (not deployed for public use).
It is able to perform all of the CRUD operations.

### Technologies used

* Node.js
* Express
* MongoDB Atlas
* Mongoose
* Postman

### Endpoints

All of the endpoints start with /lectures or /assessments

| Verb          | URI           | Description                             |
| ------------- | ------------- | --------------------------------------- |
| GET           | /             | Read all lectures or assessments        |
|               | /{id}         | Read a specific lecture or assessment   |
| POST          | /             | Create a new lecture or assessment      |
| PUT           | /{id}         | Update a specific lecture or assessment |
| DELETE        | /{id}         | Delete a specific lecture or assessment |