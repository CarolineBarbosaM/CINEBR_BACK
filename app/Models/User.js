'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {

  static boot () {
    super.boot();
    this.addHook('beforeSave', 'UserHook.hashPassword');
    this.addHook('beforeSave', 'UserHook.uuid');
  }

  static get table () {
    return 'users'
  }

  static get primaryKey(){
    return 'id';
  }

  static get incrementing(){
    return false;
  }
}

module.exports = User
