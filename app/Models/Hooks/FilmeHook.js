'use strict'
const FilmesHook = exports = module.exports = {}
const uuidv4 = require("uuid/v4");

FilmesHook.uuid = async filmes => {
  filmes.id = uuidv4();
}
