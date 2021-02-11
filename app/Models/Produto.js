"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Produto extends Model {
  fornecedore() {
    this.belongsTo("App/Models/Fornecedore");
  }
  categoria() {
    this.belongsTo("App/Models/Categoria");
  }
  tags() {
    this.belongsToMany("App/Models/Tag");
  }
}

module.exports = Produto;
