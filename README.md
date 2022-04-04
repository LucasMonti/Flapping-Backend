# Flapping-Backend-Typescript

Backend para aplicacion Flapping. La misma fue creada para que miles de usuarios puedan cargar desafíos donde la gente podrá donar tokens.

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

> **POST** Register
>
> ```
> http://localhost:3003/api/register
> ```
>
> Permite al usuario darse de alta en la aplicación

### USERS

En esta sección se encuentran los endpoint relacionados con usuarios ya registrados

> **GET** Lista un usuario
>
> ```
> http://localhost:3003/api/users/:id
> ```
>
> Permite buscar un usuario registrado por su id

> **PUT** Actualiza un usuario
>
> ```
> http://localhost:3003/api/users/:id
> ```
>
> Permite actualizar ciertos parámetros de un usuario registrado por su id

> **DELETE** Elimina un usuario
>
> ```
> http://localhost:3003/api/users/:id
> ```
>
> Permite eliminar un usuario registrado por su id
