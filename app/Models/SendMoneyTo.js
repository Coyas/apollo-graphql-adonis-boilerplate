"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class SendMoneyTo extends Model {
  fornecedore() {
    this.belongsTo("App/Models/SendMoneyTo");
  }
}

module.exports = SendMoneyTo;
