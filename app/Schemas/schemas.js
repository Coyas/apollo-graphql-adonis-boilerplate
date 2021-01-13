const { makeExecutableSchema } = require("graphql-tools");

const User = use("App/Models/User");

const typeDefs = `
    type User {
        id: ID!
        username: String
        email: String
        password: String
    }

    # retorno para login
    type authData {
        type: String!
        token: String!
        refreshToken: String
    }

    type Query {
        allUsers: [User]
        getUser(email: String!): User
    }

    type Mutation {
        createUser (username: String!, email: String!, password: String!): User
        login (email: String!, password: String!): authData
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
  },
  Mutation: {
    async createUser(parent, { username, email, password }, { auth }, info) {
      try {
        await auth.check();

        const user = await User.create({ username, email, password });

        if (!user) return null; // throw new Error("Unauthorized");

        return user.toJSON();
      } catch (error) {
        throw new Error(error);
      }
    },
    async login(parent, { email, password }, { auth }, info) {
      console.log(email);
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
  },
};

module.exports = makeExecutableSchema({ typeDefs, resolvers });
