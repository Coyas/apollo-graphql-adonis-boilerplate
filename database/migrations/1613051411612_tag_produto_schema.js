"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TagProdutoSchema extends Schema {
  up() {
    this.create("tag_produto", (table) => {
      table.integer("produto_id");
      table.integer("tag_id");
      table.foreign("produto_id").references("produtos.id");
      table.foreign("tag_id").references("tags.id");
    });
  }

  down() {
    this.drop("tag_produto");
  }
}

module.exports = TagProdutoSchema;
