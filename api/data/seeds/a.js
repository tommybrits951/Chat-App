/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
    {username: 'tommy2', first_name: "Tommy", last_name: "Brits", email: "tommybrits74@gmail.com", password: "$2a$08$Nvt2WUfqxhqVKEjRdrs2UuTLrejvNdlJOrDJtf7YyW3yj/ji/n1TS"},
    {first_name:"Walker", last_name:"Leverett", email:"wleverett0@rediff.com", username:"wleverett0", password:"w7MeV0"},
{first_name:"Danna", last_name:"Golland", email:"dgolland1@vinaora.com", username:"dgolland1", password:"Tm157F"},
{first_name:"Ruttger", last_name:"Ramplee", email:"rramplee2@census.gov", username:"rramplee2", password:"I88nUG0"},
{first_name:"Donny", last_name:"Huthart", email:"dhuthart3@naver.com", username:"dhuthart3", password:"tsskJqEhI"},
{first_name:"Sile", last_name:"Handlin", email:"shandlin4@oaic.gov.au", username:"shandlin4", password:"0mOjehR1LyH"},
{first_name:"Milissent", last_name:"Calcott", email:"mcalcott5@npr.org", username:"mcalcott5", password:"UQXcF1KATk"},
{first_name:"Egan", last_name:"Dryden", email:"edryden6@cyberchimps.com", username:"edryden6", password:"vLOw5qI2"},
{first_name:"Nicky", last_name:"Mougel", email:"nmougel7@hc360.com", username:"nmougel7", password:"vvzbjKvJUf"}
 ]);
};
