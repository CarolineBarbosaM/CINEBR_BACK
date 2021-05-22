'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Filme extends Model {
  static boot () {
    super.boot();
    this.addHook('beforeSave', 'FilmesHook.uuid');
  }

  static get table () {
    return 'filmes'
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

module.exports = Filme
