/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    try
    {
        await knex.schema.createTable('positionPlayer', function (table) {
            table.integer('positionId').unsigned().notNullable();
            table.integer('playerId').unsigned().notNullable();

            table.foreign('positionId').references('id').inTable('positionName');
            table.foreign('playerId').references('id').inTable('player');
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
        await knex.schema.dropTable('positionPlayer');
    } catch(e){
        console.error(`ERROR DOWN MIGRATION create tables: ${e}`);
    }
};
