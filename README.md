# CEYEBER-backend

![image](https://user-images.githubusercontent.com/48697281/97199647-25bcb200-17a8-11eb-924b-2705e36d39c4.png)

## Intro
[Link to hosted backend](https://ceyeber.herokuapp.com/)
**Backend** for CEYEBER critical thinking game. [Front-end](https://github.com/fac20/CEYEBER)

## Team Roles

Product Owner: Aqsa
Scrum Facilitator: Jessica
Quality: Jennifer
UX/UI: My Hoa
DevOps: Rihards

## Built with

- NodeJS
- Express
- PostgreSQL
- Heroku (deployment of database)

## Schema

[DB diagram](https://dbdiagram.io/d/5f96fcf03a78976d7b7938f5)

![image](https://user-images.githubusercontent.com/48697281/97202151-26a31300-17ab-11eb-83fb-5f9208a2ac81.png)

## Set Up Locally

* Clone this repo to your machine
* Run `npm install`
* Set up local database
  * run `psql` in your terminal
  * `CREATE USER myuser SUPERUSER PASSWORD mypassword`
  * `CREATE DATABASE  ceyeber WITH OWNER myuser`
  * `\c ceyeber` or if you are in the terminal `psql -d ceyeber -U myuser` and insert password when prompted
  * `\i src/database/init.sql`
 * Create a .env file in the root folder with `DATABASE_URL=postgres://myuser:mypassword@localhost:5432/ceyeber`
 * Run `npm run dev` to start the server
 
## Server Routes



Base URL is either your local host or https://ceyeber.herokuapp.com/
1. `POST /user` - requires a JSON object like example below. 
**Once a user has signed up, the server will send back and store the user id into the session storage**
```json
{
  "agent": "BrownFox",
  "age": "8",
  "location": "United Kingdom"
}
```
2. `POST /skills` - requires a JSON object like example below - **user id will automatically be taken from users session storage**
```json
{
  "user_id": "2",
  "facebook" : "2",
  "instagram" : "2",
  "snapchat" : "2",
  "tiktok" : "2",
  "twitter" : "2",
  "whatsapp": "2",
  "youtube" : "2"
}
```
3. `POST /answers` - requires a JSON object like example below - **user id will automatically be taken from users session storage**
```json
{
  "user_id": "2",
  "q1a1": "1",
  "q1a2": "1",
  "q2a1": "1",
  "q2a2": "1",
  "q3a1": "1",
  "q3a2": "1"
}
```
