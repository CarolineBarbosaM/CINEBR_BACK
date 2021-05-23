'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ElencoSchema extends Schema {
  up () {
    this.create('elencos', (table) => {
      table.uuid('id').primary()
      table.integer('id_conteudo').notNullable().unique()
      table.integer('id_ator').notNullable().unique()
      table.timestamps()
      table.datetime('deleted_at')
    })
  }

  down () {
    this.drop('elencos')
  }
}

module.exports = ElencoSchema
