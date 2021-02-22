const { makeExecutableSchema } = require("graphql-tools");

const { typeDefs } = use("App/Schemas/typeDefs");
const { resolvers } = use("App/Schemas/resolvers");

module.exports = makeExecutableSchema({ typeDefs, resolvers });
