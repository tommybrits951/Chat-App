/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('messages').truncate()
  await knex('messages').insert([
    {sender:1, recipient:2, message:"Flamingo, lesser", time:"1657523310000"},
{sender:1, recipient:1, message:"Euro wallaby", time:"1665161570000"},
{sender:2, recipient:1, message:"Field flicker", time:"1657258361000"},
{sender:1, recipient:1, message:"Sheep, red", time:"1656071826000"},
{sender:2, recipient:2, message:"Guerza", time:"1665737434000"},
{sender:1, recipient:2, message:"Bird, pied butcher", time:"1650216707000"},
{sender:1, recipient:1, message:"Dove, little brown", time:"1681498271000"},
{sender:2, recipient:1, message:"Pheasant, common", time:"1672899920000"},
{sender:1, recipient:1, message:"Gray langur", time:"1665182222000"},
{sender:1, recipient:2, message:"Short-beaked echidna", time:"1650481897000"},
{sender:2, recipient:2, message:"Skua, great", time:"1666531740000"},
{sender:1, recipient:1, message:"Indian mynah", time:"1671060187000"},
{sender:1, recipient:2, message:"Gazelle, thomson's", time:"1649971745000"},
{sender:2, recipient:2, message:"Nilgai", time:"1655804743000"},
{sender:1, recipient:2, message:"Gorilla, western lowland", time:"1665011663000"},
{sender:2, recipient:1, message:"Short-nosed bandicoot", time:"1654528648000"},
{sender:1, recipient:2, message:"Rock dove", time:"1664646338000"},
{sender:2, recipient:2, message:"Cormorant, javanese", time:"1671384607000"},
{sender:1, recipient:2, message:"Langur, hanuman", time:"1649740140000"},
{sender:2, recipient:1, message:"Land iguana", time:"1661061750000"},
{sender:1, recipient:1, message:"Boat-billed heron", time:"1655483149000"},
{sender:1, recipient:2, message:"Mouflon", time:"1667315165000"},
{sender:2, recipient:2, message:"Violet-eared waxbill", time:"1684739340000"},
{sender:2, recipient:1, message:"Flamingo, chilean", time:"1682682941000"},
{sender:1, recipient:2, message:"Adouri (unidentified)", time:"1662716283000"},
{sender:2, recipient:2, message:"African skink", time:"1685800001000"},
{sender:1, recipient:2, message:"Amazon parrot (unidentified)", time:"1664729529000"},
{sender:1, recipient:1, message:"Spotted-tailed quoll", time:"1660421146000"},
{sender:1, recipient:2, message:"Palm squirrel", time:"1681952281000"},
{sender:2, recipient:1, message:"Chestnut weaver", time:"1651177126000"}
  ]);
};
