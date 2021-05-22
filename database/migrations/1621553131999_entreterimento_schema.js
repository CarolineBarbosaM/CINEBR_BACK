'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EntreterimentoSchema extends Schema {
  up () {
    this.create('entreterimentos', (table) => {
      table.increments()
      table.string('tipo').notNullable()
      table.timestamps()
      table.datetime('deleted_at')
    })
  }

  down () {
    this.drop('entreterimentos')
  }
}

module.exports = EntreterimentoSchema
