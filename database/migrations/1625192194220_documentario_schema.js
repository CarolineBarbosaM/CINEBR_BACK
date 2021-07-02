'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DocumentarioSchema extends Schema {
  up () {
    this.create('documentarios', (table) => {
       this.create('filmes', (table) => {
      table.uuid('id').primary()
      table.string('titulo').notNullable().unique()
      table.string('ano')
      table.string('sinopse')
      table.string('classificacao')
      table.string('capa')
      table.string('id_ator')
      table.string('id_categoria')
      table.timestamps()
      table.datetime('deleted_at')
    })
  }

  down () {
    this.drop('documentarios')
  }
}

module.exports = DocumentarioSchema
