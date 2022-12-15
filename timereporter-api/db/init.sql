CREATE TABLE "User" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE "Post" (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  content TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  "authorId" INTEGER NOT NULL,
  FOREIGN KEY ("authorId") REFERENCES "User"(id)
);

CREATE TABLE "Profile" (
  id SERIAL PRIMARY KEY NOT NULL,
  bio TEXT,
  "userId" INTEGER UNIQUE NOT NULL,
  FOREIGN KEY ("userId") REFERENCES "User"(id)
);

INSERT INTO "User" (name, email) VALUES ('Mikael', 'estmikael@test.com');
INSERT INTO "User" (name, email) VALUES ('TestUser', 'testtest@test.com');

INSERT INTO "Post" (title, content, "authorId") VALUES ('How to scam the internet', 'Some text', 1);
