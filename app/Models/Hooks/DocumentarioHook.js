'use strict'

const DocumentarioHook = exports = module.exports = {}
const uuidv4 = require("uuid/v4");

DocumentarioHook.method = async documentarios => {
  documentarios.id = uuidv4();
}
