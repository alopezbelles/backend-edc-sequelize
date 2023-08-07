# BACKEND-EDC-EXPRESS.JS + SEQUELIZE
Backend Repository Trip Wise for Barrel Cloud

### Datos generales

**- Autor del proyecto:** Alejandro López Bellés

**- Título del proyecto:** TRIP-WISE, booking planer

**- Fecha:** 07/08/2023

- Tecnologías y dependencias: 

![tecnologias-backend](https://github.com/alopezbelles/barrel-cloud-backend/assets/113507322/d521d2c8-dc8c-4f05-9926-f263808f120e)

### Descripción general del proyecto 

El proyecto se enfoca en el diseño y desarrollo de una base de datos y una API para la gestión de una plataforma de gestión de tareas. La base de datos está creada 
utilizando el lenguaje SQL y se gestiona con MySQL. La API se ha diseñado utilizando la librería Express.js de Node.js. Además, la base de datos está alojada en Railway.

### Pasos para arrancar el proyecto en entorno local
- Clonar el proyecto en el entorno local con Node.js instalado. 
- Asegurarse de tener un servidor MySQL configurado en el entorno local.
- Instalar las dependencias ejecutando el comando "npm install". Esto instalará las dependencias mencionadas en el archivo package.json.
- Ejecutar el comando "npx sequelize-cli db:migrate" para ejecutar las migraciones y crear las tablas en la base de datos.
- jecutar el comando "npx sequelize-cli db:seed:all" para migrar los seeders de la entidad Bookings. Esto añadirá tres registros a la base de datos para tener una vista previa del funcionamiento inicial de la aplicación en el frontend.

### Tablas
La base de datos consta de una única tabla llamada "Task". Esta entidad tiene los siguientes atributos: "id_task", "description", "status", "category" "createdAt" y "deletedAt". "Category" contiene los campos "personal, work, stydies". Status contiene los campos "pending, completed, not completed".

### Endpoints
Dado que el deploy del proyecto está realizado en Railway, Para poder ejetutar los endpoints se ejecuta la raiz:
## ** (https://backend-edc-sequelize-production.up.railway.app)

A continuación de esta ruta, se añaden los endpoints con las peticiones GET, POST, PUT y DELETE en el postman o algún servicio similar. 

- GET /tasks/getall --> Mostrará el listado con todas las tareas.
- POST /tasks/addtask --> Añadirá una nueva tarea a la base de datos. En postman o algún programa similar, introducimos lo siguiente por el body en formato json: {"title": "title", "description":"description"}. El campo "status" se colocará en "pending" de forma predeterminada, y el campo "category" se colocará como "personal" de forma predeterminada. En el frontend, podremos cambiarlo.  
- DELETE /tasks/deletetask --> Eliminará una tarea de la base de datos. Introduciremos la "id" del registro que queramos eliminar por el body {"id": "1"}.
- PUT /tasks/edittask --> Actualizará un registro de la base de datos. En postman o algún programa similar, introducimos lo siguiente por el body en formato json: {"id": 1, "title": "title", "description": "description", "status": "status", "category": "category"}.
