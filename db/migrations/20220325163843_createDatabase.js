/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    try {
        await knex.schema.createTable('country', function (table) {
            table.increments('id').primary().notNullable();
            table.string('code').notNullable();
            table.string('name').notNullable();
        });

        await knex.schema.createTable('team', function (table) {
            table.increments('id').primary().notNullable();
            table.string('name').notNullable();
            table.string('abbr').notNullable();
            table.string('logo').notNullable();
        });

        await knex.schema.createTable('positionName', function (table) {
            table.increments('id').primary().notNullable();
            table.string('name').notNullable();
        });
    } catch(e){
        console.error(`ERROR UP MIGRATION create tables: ${e}`);
    }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    try {
        await knex.schema.dropTable('country');
        await knex.schema.dropTable('team');
        await knex.schema.dropTable('positionName');
    } catch(e){
        console.error(`ERROR DOWN MIGRATION create tables: ${e}`);
    }
};
