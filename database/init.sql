BEGIN;

DROP TABLE IF EXISTS users, skills, challenges CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    alias VARCHAR(30) NOT NULL,
    age INTEGER NOT NULL,
    location VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL
)

CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    facebook INTEGER,
    instagram INTEGER,
    snapchat INTEGER,
    tiktok INTEGER,
    twitter INTEGER,
    whatsApp INTEGER,
    youtube INTEGER
)

CREATE TABLE challenges (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    q1a1 INTEGER,
    q1a2 INTEGER,
    q2a1 INTEGER,
    q2a2 INTEGER,
    q3a1 INTEGER,
    q3a2 INTEGER
)

COMMIT;