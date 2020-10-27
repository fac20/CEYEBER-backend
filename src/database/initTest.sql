BEGIN;

DROP TABLE IF EXISTS users, skills, challenges CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    alias VARCHAR(30) NOT NULL,
    age INTEGER NOT NULL,
    location VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    facebook INTEGER NOT NULL,
    instagram INTEGER NOT NULL,
    snapchat INTEGER NOT NULL,
    tiktok INTEGER NOT NULL,
    twitter INTEGER NOT NULL,
    whatsApp INTEGER NOT NULL,
    youtube INTEGER NOT NULL
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

INSERT INTO users(alias, age, location, created_at) VALUES
    ('BrownFox', '8', 'United Kingdom', current_timestamp),
    ('RedPanda', '10', 'Sweden', current_timestamp);

INSERT INTO skills (user_id, facebook, instagram, snapchat, tiktok, twitter, whatsApp, youtube) VALUES
    ('1', '0', '4', '4', '4', '3', '3', '4'),
    ('1', '1', '4', '2', '2', '3', '0', '3');


INSERT INTO challenges (user_id, q1a1, q1a2, q2a1, q2a2, q3a1, q3a2) VALUES
    ('1', '3', null, '-1', '3', '-2', '-1'),
    ('2', '-1', '3', '-2', '3', '3', null);

COMMIT;