CREATE TYPE "typeStatus" AS ENUM ('ongoing', 'finished');

CREATE TABLE series (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    platform TEXT NOT NULL,
    genre TEXT NOT NULL,
    review TEXT,
    status "typeStatus",
    rate INTEGER
);