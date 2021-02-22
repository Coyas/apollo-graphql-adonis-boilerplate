const { query } = require("./query");
const { mutation } = require("./mutations");
const { categoriaType, authData, userType } = require("./types");

const typeDefs = [query, mutation, categoriaType, authData, userType];

// export default typeDefs;
module.exports = { typeDefs };
