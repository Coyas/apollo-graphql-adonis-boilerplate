const mutation = `
type Mutation {
    createCategoria (nome: String!): Categoria
}
`;

module.exports = { mutation };
