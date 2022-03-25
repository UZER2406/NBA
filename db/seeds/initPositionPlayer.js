/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('positionPlayer').del()
  await knex('positionPlayer').insert([
    {positionId: '1',playerId:'1'},
    {positionId: '2',playerId:'2'},
    {positionId: '3',playerId:'3'}
  ]);
};
