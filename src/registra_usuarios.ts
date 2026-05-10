import prisma from "./prisma/prisma.client.ts";
import bcrypt from "bcrypt";

async function run() {
  try {
    const contraseña = await bcrypt.hash("1234", 10);

    const usuarios = [
      {
        email: "pepito@correo.com",
        nombre: "Pepito",
        contraseña,
        admin: false
      },
      {
        email: "juana@example.com",
        nombre: "Juana",
        contraseña,
        admin: false
      }
    ];

    for (const usuario of usuarios) {
      const savedUser = await prisma.usuario.upsert({
        where: { email: usuario.email },
        update: {
          nombre: usuario.nombre,
          contraseña: usuario.contraseña,
          admin: usuario.admin
        },
        create: usuario
      });

      console.log("Usuario disponible:", savedUser.email);
    }
  } catch (error) {
    console.error("Error registrando usuarios:", error);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

run();
