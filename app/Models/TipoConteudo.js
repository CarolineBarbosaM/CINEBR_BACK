'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TipoConteudo extends Model {
  static boot () {
    super.boot();
    this.addHook('beforeSave', 'TipoConteudoHook.uuid');
  }

  static get table () {
    return 'tipo_conteudos'
  }

  static get primaryKey(){
    return 'id';
  }

  static get incrementing(){
    return false;
  }


  filmes() {
    return this.hasMany('App/Models/Categoria')
  }

  series() {
    return this.hasMany('App/Models/Ator')
  }
}

module.exports = TipoConteudo
