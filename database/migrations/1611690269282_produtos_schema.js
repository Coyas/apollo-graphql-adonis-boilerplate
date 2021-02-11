"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProdutosSchema extends Schema {
  up() {
    this.create("produtos", (table) => {
      table.increments();
      table.string("nome", 50).notNullable();
      table.string("image", 255).notNullable();
      table.string("download_link", 255).notNullable();
      table.integer("categoria_id").references("categorias.id");
      table.integer("fornecedor_id").references("fornecedores.id");
      table.timestamps();
    });
  }

  down() {
    this.drop("produtos");
  }
}

module.exports = ProdutosSchema;
