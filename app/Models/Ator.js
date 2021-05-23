'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ator extends Model {
    static boot () {
        super.boot();
        this.addHook('beforeSave', 'AtorHook.uuid');
      }
    
      static get table () {
        return 'ators'
      }
    
      static get primaryKey(){
        return 'id';
      }
    
      static get incrementing(){
        return false;
      }
}

module.exports = Ator
