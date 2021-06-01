'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Entretenimentos extends Model {
    static boot () {
        super.boot();
        this.addHook('beforeSave', 'EntreterimentoHook.uuid');
    }

    static get table () {
        return 'entreterimentos'
    }

    static get primaryKey() {
        return 'id';
    }

    static get incrementing() {
        return false;
    }

}

module.exports = Entretenimentos
