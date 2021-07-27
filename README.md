# PERN-Stack-Todo (ORM Version)

This branch builds on top of the `main` branch, with the key difference being that the PostgreSQL native driver `pg` is replaced with a fully fledged ORM (Object Relational Mapper), specifically, [Prisma](https://www.prisma.io/).

## Client

Unchanged. Please refer to the Client section in the `main` branch.

## Server

A NodeJS application that uses the ExpressJS web application framework to create and structure the REST API.

The API interacts with a local instance of a PostgreSQL server, through the use of the generated Prisma client.

Multiple Express routes are served to ensure the operations of CRUD (Create Read Update Delete).

## Prisma setup

Head into the server directory and run `npm i` to download the necessary dependencies.

- Create a `.env` file that contains your connection string to connect to a Postgres server instance.
- In `prisma/schema.prisma`, provide the environment variable to the datasource url.
- If you have already generated your schema, run `npx prisma db pull` to sync your database model with the one defined in `schema.prisma`.
- Otherwise, simply run `npx prisma db push` to generate a schema for you using the model defined.
- Finally, run `npx prisma generate` to generate your custom Prisma client, which will be used to interact with your Postgres instance via Express routes.

## How to Run

Refer to the `main` branch.
