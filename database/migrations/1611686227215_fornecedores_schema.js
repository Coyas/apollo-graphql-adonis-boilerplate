"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FornecedoresSchema extends Schema {
  up() {
    this.create("fornecedores", (table) => {
      table.increments();
      table.integer("nic", 20).notNullable();
      table.string("nome", 100).notNullable();
      table.string("empresa", 50);
      table.string("proficao", 50);
      table.string("email").notNullable();
      table.boolean("permitidovender").defaultTo(false);
      table.timestamps();
    });
  }

  down() {
    this.drop("fornecedores");
  }
}

module.exports = FornecedoresSchema;
