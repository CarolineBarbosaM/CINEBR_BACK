'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoConteudoSchema extends Schema {
  up () {
    this.create('tipo_conteudos', (table) => {
      table.uuid('id').primary()
      table.string('tipo').notNullable().unique()
      table.integer('id_conteudo').notNullable().unique()
      table.timestamps()
      table.datetime('deleted_at')
    })
  }

  down () {
    this.drop('tipo_conteudos')
  }
}

module.exports = TipoConteudoSchema
