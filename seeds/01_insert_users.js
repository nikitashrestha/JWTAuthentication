/**
 * Delete all existing entries and seed users table.
 *
 * @param   {Object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          name: 'Saugat Acharya',
          email:'nikshres522@gmail.com',
          password:'sanu',
          updated_at: new Date()
        },
        {
          name: 'John Doe',
          email:'nik.stha522@gmail.com',
          password:'sanushrestha',
          updated_at: new Date()
        }
      ]);
    });
}
