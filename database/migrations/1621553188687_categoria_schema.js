'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriaSchema extends Schema {
  up () {
    this.create('categorias', (table) => {
      table.uuid('id').primary()
      table.string('nome').notNullable()
      table.timestamps()
      table.datetime('deleted_at')
    })
  }

  down () {
    this.drop('categorias')
  }
}

module.exports = CategoriaSchema
