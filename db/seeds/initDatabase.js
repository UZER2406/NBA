/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('country').del()
  await knex('country').insert([
    {id: 1, code: 'ARG',name:'Argentina'},
    {id: 2, code: 'AT',name:'Austria'},
    {id: 3, code: 'AUS',name:'Australia'},
    {id: 4, code: 'BI',name:'Bosnia'},
    {id: 5, code: 'BIH',name:'Bosnia Herzegovina'}
  ]);

  await knex('team').del()
  await knex('team').insert([
    {id: 1, name: 'Miami Heat',abbr:'MIA',logo:'1.jpg'},
    {id: 2, name: 'Orlando Magic',abbr:'ORL',logo:'2.jpg'},
    {id: 3, name: 'Atlanta Hawks',abbr:'ATL',logo:'3.jpg'},
    {id: 4, name: 'Washington Wizards',abbr:'WSH',logo:'4.jpg'},
    {id: 5, name: 'Charlotte Hornets',abbr:'CHA',logo:'5.jpg'}
  ]);

  await knex('positionName').del()
  await knex('positionName').insert([
    {id: 1, name:'SmallForward'},
    {id: 2, name:'PowerForward'},
    {id: 3, name:'Center'},
    {id: 4, name:'ShootingGuard'},
    {id: 5, name:'PointGuard'}
  ]);
};
