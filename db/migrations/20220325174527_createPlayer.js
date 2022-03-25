/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    try
    {
        await knex.schema.createTable('player', function (table) {
            table.increments('id').primary().notNullable();
            table.string('lastName').notNullable();
            table.string('fistName').notNullable();
            table.string('gender').notNullable();
            table.double('height').notNullable();
            table.double('weight').notNullable();
            table.string('shirtName').notNullable();
            table.string('email').notNullable();
            table.integer('countryCode').unsigned().notNullable();
            table.foreign('countryCode').references('id').inTable('country');
            table.integer('teamId').unsigned().notNullable();
            table.foreign('teamId').references('id').inTable('team');
        });
    }
    catch(e){
        console.error(`ERROR UP MIGRATION create tables: ${e}`);
    }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    try {
        await knex.schema.dropTable('player');
    } catch(e){
        console.error(`ERROR DOWN MIGRATION create tables: ${e}`);
    }
};
