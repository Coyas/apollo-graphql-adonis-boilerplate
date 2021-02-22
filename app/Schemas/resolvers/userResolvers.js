const User = use("App/Models/User");

const userResolvers = {
  Query: {
    async allUsers(parent, _, { auth }, info) {
      // await auth.check();
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
  },
};
