'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ElencoSchema extends Schema {
  up () {
    this.create('elencos', (table) => {
      table.uuid('id').primary()
      table.string('id_entreterimento')
      table.string('atores')
      table.timestamps()
      table.datetime('deleted_at')
    })
  }

  down () {
    this.drop('elencos')
  }
}

module.exports = ElencoSchema
