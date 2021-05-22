'use strict'
const CategoriaHook = exports = module.exports = {}
const uuidv4 = require("uuid/v4");

CategoriaHook.uuid = async categoria => {
  categoria.id = uuidv4();
}
