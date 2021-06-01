/** @type {import('@adonisjs/framework/src/Hash')} */
const UserHook = exports = module.exports = {};

const Hash = use('Hash');
const uuidv4 = require("uuid/v4");

UserHook.hashPassword = async user => {
  if (user.password) {
    user.password = await Hash.make(user.password);
  }
}

UserHook.uuid = async userid => {
  userid.id = uuidv4();
}
