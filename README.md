# nolatech

## Descripción

nolatech es una aplicación full-stack desarrollada para gestionar usuarios. Incluye funcionalidades como registro, inicio de sesión, listado de usuarios, edición y eliminación de usuarios. El frontend está desarrollado con React y el backend con Node.js y Express. La base de datos utilizada es PostgreSQL.

## Tecnologías Utilizadas

- **Frontend:**
  - React
  - CSS
  - Axios

- **Backend:**
  - Node.js
  - Express

- **Base de Datos:**
  - PostgreSQL

## Requisitos Previos

Asegúrate de tener instalados los siguientes requisitos antes de comenzar:

- Node.js (https://nodejs.org/)
- PostgreSQL (https://www.postgresql.org/)
- npm (Node Package Manager, que viene con Node.js)

## Instalación

Sigue estos pasos para configurar y ejecutar la aplicación en tu máquina local:

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/tu-usuario/nolatech.git
   cd nolatech
   Instala las dependencias: npm install

## Configura la base de datos

- Crea una base de datos en PostgreSQL.

1. **Puedes hacerlo usando el comando psql:**

    CREATE DATABASE nolatech
    Restaura el esquema de la base de datos desde el archivo schema.sql:
    psql -U tu_usuario -d nolatech -f database/schema.sql


## Configura tu entorno vairable 

1.**Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables:**
- DB_HOST=localhost
- DB_PORT=5432
- DB_USER=tu_usuario
- DB_PASSWORD=tu_contraseña
- DB_NAME=nolatech
-PORT=3001


# Ya puede inciar tu proyecto con npm start



### Funcionalidades:

- Registro de Usuarios: Los usuarios pueden registrarse proporcionando un nombre de usuario, correo electrónico y contraseña.
- Inicio de Sesión: Los usuarios registrados pueden iniciar sesión.
- Listado de Usuarios: Los usuarios pueden ver una lista de todos los usuarios registrados.
- Edición de Usuarios: Los usuarios pueden editar su información.
- Eliminación de Usuarios: Los usuarios pueden eliminar su cuenta.




 ¡Gracias por nolatech por la oportunidad!