/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('player').del()
  await knex('player').insert([
    {id: 1, lastName: 'Williams', fistName:'Mo', gender:'M', height:'1.85', weight:'89.8',shirtName:'32',email:'Williams.email.com',countryCode:'1',teamId:'1'},
    {id: 2, lastName: 'Alonzo', fistName:'Edward', gender:'M', height:'1.98', weight:'99',shirtName:'34',email:'Alonzo.email.com',countryCode:'2',teamId:'2'},
    {id: 3, lastName: 'O Bryant', fistName:'Johnny', gender:'M', height:'2.05', weight:'116.5',shirtName:'42',email:'Johnny.email.com',countryCode:'3',teamId:'3'}
  ]);
};
