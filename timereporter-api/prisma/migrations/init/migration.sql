-- CreateTable
CREATE TABLE "quote" (
    "id" SERIAL NOT NULL,
    "quote" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "quote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "quote_quote_key" ON "quote"("quote");

