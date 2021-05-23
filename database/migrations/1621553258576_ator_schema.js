'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AtorSchema extends Schema {
  up () {
    this.create('ators', (table) => {
      table.uuid('id').primary()
      table.string('nome').notNullable().unique()
      table.date('dt_nascimento')
      table.string('descricao')
      table.string('participacao')
      table.timestamps()
      table.datetime('deleted_at')
    })
  }

  down () {
    this.drop('ators')
  }
}

module.exports = AtorSchema
