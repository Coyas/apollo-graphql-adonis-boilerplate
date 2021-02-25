const { makeExecutableSchema } = require("graphql-tools");

const User = use("App/Models/User");
const Categoria = use("App/Models/Categoria");

const typeDefs = `
    type User {
        id: ID!
        username: String
        email: String
        password: String
    }

    type Categoria {
      id: ID!
      nome: String!
    }

    # retorno para login
    type authData {
        type: String!
        token: String!
        refreshToken: String
    }
 
    type Produto {
      title: String!
      image: String!
      download_link: String!
      fornecedor_id: Fornecedor!
      categoria_id: Categoria!
    }

    type Fornecedor {
      nic: Int
      nome: String!
      empresa: String
      email: String!
      contacto: Int
      profissao: String!
      permitidoVender: Boolean
      user_id: User!
    }

    type Query {
        allUsers: [User]
        getUser(email: String!): User
        getCategorias: [Categoria!]!
        getItem(id: ID!): Produto
    }

    type Mutation {
        createUser (username: String!, email: String!, password: String!): User
        login (email: String!, password: String!): authData
        createCategoria (nome: String!): Categoria
    }

  # we need to tell the server which types represent the root query
  # and root mutation types. We call them RootQuery and RootMutation by convention.
  #  schema {
  #  query: Query
  #    mutation: Mutation
  #  }
`;

const resolvers = {
  Query: {
    async allUsers() {
      const user = await User.all();
      return user.toJSON();
    },
    async getUser(parent, { email }, { auth }) {
      try {
        await auth.check();

        const user = await User.findBy({ email });
        if (!user) return null;
        return user.toJSON();
      } catch (error) {
        throw new Error(error);
      }
    },
    async getCategorias() {
      const categ = await Categoria.all();
      return categ.toJSON();
    },
    // funcao para pegar um produto baseado no id retornado
    async getItem(parent, { id }, { auth }, info) {
      try {
        await auth.check();

        return "get item " + id;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    async createUser(parent, { username, email, password }, { auth }, info) {
      try {
        // await auth.check();// so permitir users logado

        const user = await User.create({ username, email, password });

        if (!user) return null; // throw new Error("Unauthorized");

        return user.toJSON();
      } catch (error) {
        throw new Error(error);
      }
    },
    async login(parent, { email, password }, { auth }, info) {
      try {
        const user = await User.findBy("email", email);
        console.log(user.toJSON());
        if (!user) {
          throw new Error("Nao Autorizado");
        }

        return await auth.attempt(email, password);
        // return await auth.withRefreshToken().attempt(email, password);
      } catch (error) {
        throw new Error(error);
      }
    },
    async createCategoria(parent, { nome }, { auth }, info) {
      try {
        // await auth.check(); // so permitir users logado
        const categ = await Categoria.create({ nome });
        if (!categ) return null;
        return categ.toJSON();
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = makeExecutableSchema({ typeDefs, resolvers });
