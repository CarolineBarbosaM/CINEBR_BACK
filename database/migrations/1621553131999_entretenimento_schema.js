'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EntretenimentoSchema extends Schema {
  up () {
    this.create('entretenimentos', (table) => {
      table.uuid('id').primary()
      table.string('tipo').notNullable()
      table.timestamps()
      table.datetime('deleted_at')
    })
  }

  down () {
    this.drop('entretenimentos')
  }
}

module.exports = EntretenimentoSchema
