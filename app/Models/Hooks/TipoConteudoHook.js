'use strict'

const TipoConteudoHook = exports = module.exports = {}
const uuidv4 = require("uuid/v4");

TipoConteudoHook.uuid = async (tipoConteudo) => {
  tipoConteudo.id = uuidv4();
}
