CREATE TYPE "typeStatus" AS ENUM ('ongoing', 'finished');

CREATE TABLE series (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    platform TEXT NOT NULL,
    genre TEXT NOT NULL,
    description TEXT NOT NULL,
    status "typeStatus",
    rate INTEGER
);