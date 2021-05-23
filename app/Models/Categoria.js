'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categoria extends Model {
    static boot () {
        super.boot();
        this.addHook('beforeSave', 'CategoriaHook.uuid');
    }

    static get table () {
        return 'categoria'
      }
    
      static get primaryKey(){
        return 'id';
      }
    
      static get incrementing(){
        return false;
      }
}

module.exports = Categoria
