'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Documentario extends Model {
  static boot () {
    super.boot();
    this.addHook('beforeSave', 'DocumentarioHook.uuid');
  }

  static get table () {
    return 'documentarios'
  }

  static get primaryKey(){
    return 'id';
  }

  static get incrementing(){
    return false;
  }


  categoria() {
    return this.hasMany('App/Models/Categoria')
  }

  ator() {
    return this.hasMany('App/Models/Ator')
  }

  entreterimento() {
    return this.belongsToMany('App/Models/Entreterimento')
  }
}

module.exports = Documentario
