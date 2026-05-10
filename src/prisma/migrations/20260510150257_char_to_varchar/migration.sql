/*
  Warnings:

  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Producto" ALTER COLUMN "título" SET DATA TYPE VARCHAR(127),
ALTER COLUMN "imagen" SET DATA TYPE VARCHAR(127);

-- AlterTable
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_pkey",
ALTER COLUMN "email" SET DATA TYPE VARCHAR(127),
ALTER COLUMN "nombre" SET DATA TYPE VARCHAR(127),
ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY ("email");
