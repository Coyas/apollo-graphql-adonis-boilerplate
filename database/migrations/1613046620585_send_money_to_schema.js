"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SendMoneyToSchema extends Schema {
  up() {
    this.create("send_money_tos", (table) => {
      table.increments();
      table.string("nome", 20).notNullable();
      table.integer("numero", 20).notNullable();
      table.integer("NIB", 20).notNullable();
      table.string("IBAN", 100);
      table.integer("fornecedor_id").references("fornecedores.id");
      table.timestamps();
    });
  }

  down() {
    this.drop("send_money_tos");
  }
}

module.exports = SendMoneyToSchema;
