const mutation = `
  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): authData
    createCategoria(nome: String!): Categoria
  }
`;

module.exports = { mutation };
