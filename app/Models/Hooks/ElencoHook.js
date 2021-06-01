'use strict'

const ElencoHook = exports = module.exports = {}
const uuidv4 = require("uuid/v4");

ElencoHook.uuid = async (elenco) => {
  elenco.id = uuidv4();
}
