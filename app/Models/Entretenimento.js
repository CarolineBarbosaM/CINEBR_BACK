'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Entreterimento extends Model {
    static boot () {
        super.boot();
        this.addHook('beforeSave', 'EntretenimentoHook.uuid');
    }

    static get table () {
        return 'entretenimento'
    }

    static get primaryKey() {
        return 'id';
    }

    static get incrementing() {
        return false;
    }
    
    entreterimento() {
        return this.hasMany('App/Models/Entretenimento')
      }
}

module.exports = Entreterimento
