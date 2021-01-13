"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CategoriaSchema extends Schema {
  up() {
    this.create("categorias", (table) => {
      table.string("nome", 50);
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop("categorias");
  }
}

module.exports = CategoriaSchema;
