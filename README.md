# Proyecto SSBW - Tienda Web Académica

Proyecto web académico para la asignatura SSBW. Implementa una tienda online sencilla con catálogo de productos, detalle de producto, búsqueda, carrito de compra, autenticación de usuarios y API REST básica.

## Tecnologías

- Node.js
- Express
- TypeScript
- Nunjucks
- Prisma ORM
- PostgreSQL
- Docker Compose
- Bootstrap

## Funcionalidades

- Listado de productos.
- Búsqueda por título.
- Detalle de producto.
- Carrito mediante sesión.
- Login con JWT en cookie HTTP-only.
- API REST de productos.
- Base de datos PostgreSQL con Docker.
- Carga inicial de productos desde products.json.

## Requisitos

- Node.js 24 o superior.
- npm.
- Docker Desktop.

## Configuración

Instalar dependencias:

    npm install

Crear archivo de entorno local:

    cp .env.example .env

Levantar PostgreSQL:

    npm run db:up

Generar Prisma Client y aplicar migraciones:

    npm run prisma:generate
    npm run prisma:migrate

Cargar productos:

    npm run seed

Crear usuarios de prueba:

    npm run users:seed

Arrancar la aplicación:

    npm start

La aplicación queda disponible en:

    http://localhost:3000

## Usuarios de prueba

Usuario 1:

    Email: pepito@correo.com
    Password: 1234

Usuario 2:

    Email: juana@example.com
    Password: 1234

## API REST

Consultar todos los productos:

    curl "http://localhost:3000/api/productos"

Consultar productos paginados:

    curl "http://localhost:3000/api/productos?desde=1&hasta=3"

Consultar producto por ID:

    curl "http://localhost:3000/api/productos/1"

## Notas técnicas

- PostgreSQL se ejecuta con Docker Compose.
- La base de datos usa PostgreSQL 16.
- El puerto local configurado para PostgreSQL es 55434 para evitar conflictos con otros servicios locales.
- El archivo .env no debe subirse al repositorio.
- El cliente generado de Prisma está excluido del repositorio porque se puede regenerar con npm run prisma:generate.

## Autor

Carlos Gutierrez
