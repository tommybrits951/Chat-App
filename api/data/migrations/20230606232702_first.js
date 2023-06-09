/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable("users", tbl => {
    tbl.increments("id").primary()
    tbl.string("username", 50).notNullable().unique()
    tbl.string("first_name", 50).notNullable()
    tbl.string("last_name", 50).notNullable()
    tbl.string('email', 100).notNullable().unique()
    tbl.string("password").notNullable()
  })
  .createTable('messages', tbl => {
    tbl.increments("message_id").primary()
    tbl.string("message").notNullable()
    tbl.integer("sender").unsigned().references("id").inTable("users")
    tbl.integer("recipient").unsigned().references("id").inTable("users")
    tbl.bigInteger("time").notNullable()
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("messages").dropTableIfExists("users")
};
