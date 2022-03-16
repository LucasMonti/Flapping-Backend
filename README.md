# Flapping-Backend-Typescript

(Describir la API)

## Instalación

(A completar)

## Endpoints

Se detallan todos los endpoints disponibles en la API de Flapping

### AUTH

En esta sección se encuentran los endpoint relacionados a la autenticación y/o alta de un nuevo usuario

> **POST** Login
>
> ```
> http://localhost:3003/api/login
> ```
>
> Permite al usuario loguearse a la aplicación
>
> > **Body**
> >
> > ```
> > {
> >   "email": "...",
> >   "password": "..."
> > }
> > ```
> >
> > **Response**
> >
> > _Success_
> >
> > ```
> > {
> >   "code": "OK",
> >   "message": "Login successfully",
> >   "success": true,
> >   "data": {
> >     "user": "...",
> >     "token": "..."
> >   }
> > }
> > ```
> >
> > _Error_
> >
> > ```
> > {
> >   "code": "ERROR",
> >   "message": "...",
> >   "success": false,
> >   "data": null,
> > }
> > ```

> **POST** Register
>
> ```
> http://localhost:3003/api/register
> ```
>
> Permite al usuario darse de alta en la aplicación
>
> > **Body**
> >
> > ```
> > {
> >   "name": "...",
> >   "lastname": "...",
> >   "email": "...",
> >   "password": "...",
> >   "wallet_address": "..."
> > }
> > ```
> >
> > **Response**
> >
> > _Success_
> >
> > ```
> > {
> >   "code": "OK",
> >   "message": "Register successfully",
> >   "success": true,
> >   "data": {
> >     "user": "...",
> >   }
> > }
> > ```
> >
> > _Error_
> >
> > ```
> > {
> >   "code": "ERROR",
> >   "message": "...",
> >   "success": false,
> >   "data": null,
> > }
> > ```

### USERS

En esta sección se encuentran los endpoint relacionados con usuarios ya registrados

> **GET** Lista un usuario
>
> ```
> http://localhost:3003/api/users/:id
> ```
>
> Permite buscar un usuario registrado por su id
>
> > **Body**
> >
> > ```
> > _id_ tomado de la url
> > ```
> >
> > **Response**
> >
> > _Success_
> >
> > ```
> > {
> >   "code": "OK",
> >   "message": "Register successfully",
> >   "success": true,
> >   "data": {
> >     "user": "...",
> >   }
> > }
> > ```
> >
> > _Error_
> >
> > ```
> > {
> >   "code": "ERROR",
> >   "message": "...",
> >   "success": false,
> >   "data": null,
> > }
> > ```

> **PUT** Actualiza un usuario
>
> ```
> http://localhost:3003/api/users/:id
> ```
>
> Permite actualizar ciertos parámetros de un usuario registrado por su id
>
> > **Body**
> >
> > ```
> > _id_ tomado de la url
> > {
> >   "name": "...",
> >   "lastname": "...",
> >   "password": "...",
> >   "wallet_address": "..."
> > }
> > ```
> >
> > **Response**
> >
> > _Success_
> >
> > ```
> > {
> >   "code": "OK",
> >   "message": "Register successfully",
> >   "success": true,
> >   "data": {
> >     "user": "...",
> >   }
> > }
> > ```
> >
> > _Error_
> >
> > ```
> > {
> >   "code": "ERROR",
> >   "message": "...",
> >   "success": false,
> >   "data": null,
> > }
> > ```

> **DELETE** Elimina un usuario
>
> ```
> http://localhost:3003/api/users/:id
> ```
>
> Permite eliminar un usuario registrado por su id
>
> > **Body**
> >
> > ```
> > _id_ tomado de la url
> > ```
> >
> > **Response**
> >
> > _Success_
> >
> > ```
> > {
> >   "code": "OK",
> >   "message": "Register successfully",
> >   "success": true,
> >   "data": {
> >     "user": "...",
> >   }
> > }
> > ```
> >
> > _Error_
> >
> > ```
> > {
> >   "code": "ERROR",
> >   "message": "...",
> >   "success": false,
> >   "data": null,
> > }
> > ```
