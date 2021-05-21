'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments('user_id')
      table.string('name_user', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('dt_nascimento', 254).notNullable()
      table.string('sexo')
      table.string('phone')
      table.boolean('acesso').notNullable()
      table.boolean('ativo').notNullable()
      table.string('password').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
