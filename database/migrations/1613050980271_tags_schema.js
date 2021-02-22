"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TagsSchema extends Schema {
  up() {
    this.create("tags", (table) => {
      table.increments();
      table.string("nome", 10).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("tags");
  }
}

module.exports = TagsSchema;