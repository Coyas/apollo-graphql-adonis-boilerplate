"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Fornecedore extends Model {
  produtos() {
    return this.hasMany("App/Models/Produto");
  }
  sendMoneyTo() {
    return this.hasMany("App/Models/SendMoneyTo");
  }
}

module.exports = Fornecedore;
