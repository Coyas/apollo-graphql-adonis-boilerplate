const query = `
  type Query {
    allUsers: [User]
    getUser(email: String!): User
    getCategorias: [Categoria!]!
  }
`;

module.exports = { query };
