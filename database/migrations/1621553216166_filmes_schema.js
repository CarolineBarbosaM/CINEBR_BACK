'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FilmesSchema extends Schema {
  up () {
    this.create('filmes', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('filmes')
  }
}

module.exports = FilmesSchema
