'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SeriesSchema extends Schema {
  up () {
    this.create('series', (table) => {
      table.uuid('id').primary()
      table.string('titulo').notNullable().unique()
      table.date('ano')
      table.string('sinopse')
      table.integer('classificacao')
      table.string('capa')
      table.string('id_ator')
      table.string('id_categoria')
      table.timestamps()
      table.datetime('deleted_at')
    })
  }

  down () {
    this.drop('series')
  }
}

module.exports = SeriesSchema
