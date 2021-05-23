'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Series extends Model {
    static boot () {
        super.boot();
        this.addHook('beforeSave', 'SeriesHook.uuid');
    }

    static get table () {
    return 'series'
  }

  static get primaryKey(){
    return 'id';
  }

  static get incrementing(){
    return false;
  }

  ator() {
    return this.hasMany('App/Models/Ator')
  }

  categoria() {
    return this.belongsToMany('App/Models/Categoria')
  }

}
module.exports = Series
