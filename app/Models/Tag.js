"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Tag extends Model {
  produtos() {
    this.belongsToMany("App/Models/Produto");
  }
}

module.exports = Tag;
