'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Entreterimento extends Model {
    static boot () {
        super.boot();
        this.addHook('beforeSave', 'EntreterimentoHook.uuid');
    }

    static get table () {
        return 'entreterimento'
    }

    static get primaryKey() {
        return 'id';
    }

    static get incrementing() {
        return false;
    }
    
    tipoconteudo() {
        return this.hasMany('App/Models/TipoConteudo')
      }
}

module.exports = Entreterimento
