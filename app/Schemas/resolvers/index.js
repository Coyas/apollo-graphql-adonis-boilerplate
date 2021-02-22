const categoriaResolvers = require("./categoriaResolvers");
const userResolvers = require("./userResolvers");

const resolvers = [categoriaResolvers, userResolvers];

module.exports = resolvers;
