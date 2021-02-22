const { query } = require("./query");
const { mutation } = require("./mutations");
const { categoriaType } = require("./types");
// import { query } from "./query";
// import { mutation } from "./mutations";
// import { categoriaType } from "./module";

const typeDefs = [query, mutation, categoriaType];

// export default typeDefs;
module.exports = { typeDefs };
