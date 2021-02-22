const Categoria = use("App/Models/Categoria");

const categoriaResolvers = {
  Query: {
    async getCategorias() {
      const categ = await Categoria.all();
      return categ.toJSON();
    },
  },
  Mutation: {
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

module.exports = categoriaResolvers;
