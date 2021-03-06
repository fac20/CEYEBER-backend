BEGIN;

DROP TABLE IF EXISTS users, skills, challenges CASCADE;

-- add date in here
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    agent VARCHAR(30) UNIQUE NOT NULL,
    age INTEGER NOT NULL,
    location VARCHAR(255) NOT NULL,
    created_at DATE DEFAULT CURRENT_DATE
);

CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    facebook INTEGER,
    instagram INTEGER,
    snapchat INTEGER,
    tiktok INTEGER,
    twitter INTEGER,
    whatsapp INTEGER,
    youtube INTEGER
);

CREATE TABLE challenges (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    q1a1 INTEGER,
    q1a2 INTEGER,
    q2a1 INTEGER,
    q2a2 INTEGER,
    q3a1 INTEGER,
    q3a2 INTEGER
);

COMMIT;