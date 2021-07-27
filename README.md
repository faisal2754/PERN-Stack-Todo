# PERN-Stack-Todo

## Client

A React application with a create-react-app base. Uses Bootstrap 4 for styling and positioning Components.

The app is built with responsiveness in mind, and uses functional components and hooks to manage application state.

Uses Node's built-in `fetch` to make requests to the REST API set up in the server directory.

## Server

A NodeJS application that uses the ExpressJS web application framework to create and structure the REST API.

The API interacts with a local instance of a PostgreSQL server, through the use of its native driver `pg`.

Multiple Express routes are served to ensure the operations of CRUD (Create Read Update Delete).

## How to Run

1. Run `npm i` in both the client and server directory to install the necessary dependencies.
2. In the server directory, run `npm start` to start the server instance. It will be listening at `http://localhost:5000/`.
3. In the client directory, running `npm start` will start the React server at `http://localhost:3000/`, which can be accessed via your browser.

## Notes

- The `db.sql` contains the commands needed to generate a clone of the database and schema on your own Postgres instance.
- The credentials in `db.js` should be replaced with your relevant details.
