"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const { graphqlAdonis, graphiqlAdonis } = require("apollo-server-adonis");
const MySchema = use("App/Schemas/schemas");

const Route = use("Route");

// Route.post("/graphql", graphqlAdonis({ schema: MySchema }));
Route.get("/", () => {
  return { msg: "KriolStock System" };
});

Route.post(
  "/graphql",
  graphqlAdonis(({ request, auth }) => ({
    schema: MySchema,
    context: { request, auth },
  }))
);

// Setup the /graphiql route to show the GraphiQL UI
// a POST endpoint that GraphiQL will make the actual requests to /grahpql
// Route.get("/graphiql", graphiqlAdonis({ endpointURL: "/graphql" }));
