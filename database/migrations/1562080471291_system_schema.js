'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SystemSchema extends Schema {
  up () {
    this.create('systems', (table) => {
      table.increments()
      table.timestamps()
      table.string('name').notNullable()
      table.string('description').nullable()
    })
  }

  down () {
    this.drop('systems')
  }
}

module.exports = SystemSchema
