'use strict'
const AtorHook = exports = module.exports = {}
const uuidv4 = require("uuid/v4");

AtorHook.uuid = async ator => {
  ator.id = uuidv4();
}
