'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments('id')
      table.string('name_user').notNullable().unique()
      table.string('email').notNullable().unique()
      table.string('token').notNullable()
      table.string('dt_nascimento')
      table.string('sexo')
      table.string('phone')
      table.boolean('acesso')
      table.boolean('ativo')
      table.string('password').notNullable()
      table.datetime('deleted_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
