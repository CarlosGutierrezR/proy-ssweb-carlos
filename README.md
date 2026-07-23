<div align="center">

# 🛒 Tienda Web Académica (SSBW)

### Aplicación e-commerce full-stack con autenticación, carrito y API REST

![Node.js](https://img.shields.io/badge/Node.js-24-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)

</div>

---

## 🎯 Resumen

Proyecto académico (asignatura SSBW) que implementa una tienda online completa: catálogo de productos, búsqueda, detalle de producto, carrito por sesión, autenticación y una API REST, con base de datos PostgreSQL en Docker y un Caddyfile como reverse proxy para el entorno productivo.

## 🧰 Stack tecnológico

| Área | Tecnología |
|---|---|
| Backend | Node.js, Express, TypeScript |
| Vistas | Nunjucks, Bootstrap |
| Base de datos | PostgreSQL 16 con Prisma ORM |
| Infraestructura | Docker Compose, Caddyfile (reverse proxy) |
| Autenticación | JWT en cookie HTTP-only |

## 🛍️ Funcionalidades

| Funcionalidad | Detalle |
|---|---|
| Catálogo | Listado y búsqueda de productos por título |
| Producto | Detalle de producto individual |
| Carrito | Carrito mediante sesión |
| Autenticación | Login con JWT en cookie HTTP-only |
| API | API REST de productos, con archivo test-api.http para probarla |
| Datos | Carga inicial de productos desde products.json |

## ▶️ Puesta en marcha

```bash
npm install
cp .env.example .env
npm run db:up
npm run prisma:generate
npm run prisma:migrate
npm run seed
npm run users:seed
npm start
```

App disponible en http://localhost:3000

## 🔌 API REST

```bash
curl "http://localhost:3000/api/productos"
curl "http://localhost:3000/api/productos?desde=1&hasta=3"
curl "http://localhost:3000/api/productos/1"
```

## 🔐 Notas de seguridad

| Aspecto | Detalle |
|---|---|
| Usuarios de prueba | pepito@correo.com y juana@example.com (contraseña 1234) son datos ficticios de entorno académico, creados por npm run users:seed |
| Variables de entorno | .env no se sube al repositorio; se parte de .env.example |
| Cliente Prisma | Excluido del repositorio, se regenera con npm run prisma:generate |
| Base de datos | PostgreSQL 16 vía Docker, puerto local 55434 para evitar conflictos |

## 👨‍💻 Autor

Carlos Gutiérrez — [GitHub](https://github.com/CarlosGutierrezR)
