'use strict'
const SeriesHook = exports = module.exports = {}
const uuidv4 = require("uuid/v4");

SeriesHook.uuid = async series => {
  series.id = uuidv4();
}
