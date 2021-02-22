// const { gql } = require("apollo-server");

const categoriaType = `
type Categoria {
    id: ID!
    nome: String!
  }
`;

module.exports = { categoriaType };
