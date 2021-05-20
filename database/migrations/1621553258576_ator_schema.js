'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AtorSchema extends Schema {
  up () {
    this.create('ators', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('ators')
  }
}

module.exports = AtorSchema
