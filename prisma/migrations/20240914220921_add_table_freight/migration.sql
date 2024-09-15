-- CreateTable
CREATE TABLE "Freight" (
    "id" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Freight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Freight_cep_key" ON "Freight"("cep");
