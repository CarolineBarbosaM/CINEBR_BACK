'use strict'
const EntreterimentoHook = exports = module.exports = {}
const uuidv4 = require("uuid/v4");

EntreterimentoHook.uuid = async entreterimento => {
  entreterimento.id = uuidv4();
}
