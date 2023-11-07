const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;


app.use(express.json())
app.use(cors());
app.use('/ClassIcons', express.static('ClassIcons'));
app.use('/FactionIcons', express.static('FactionIcons'));



app.listen(
  PORT,
  () => console.log(`Running on http://localhost:${PORT}`)
)

app.get('/classes', (req, res) => {
  const classImages = [
    {
      className: 'druid',
      imageUrl: `http://localhost:${PORT}/ClassIcons/Icon_Druid.png`,
    },
    {
      className: 'hunter',
      imageUrl: `http://localhost:${PORT}/ClassIcons/Icon_Hunter.png`,
    },
    {
      className: 'mage',
      imageUrl: `http://localhost:${PORT}/ClassIcons/Icon_Mage.png`,
    },
    {
      className: 'paladin',
      imageUrl: `http://localhost:${PORT}/ClassIcons/Icon_Paladin.png`,
    },
    {
      className: 'priest',
      imageUrl: `http://localhost:${PORT}/ClassIcons/Icon_Priest.png`,
    },
    {
      className: 'rogue',
      imageUrl: `http://localhost:${PORT}/ClassIcons/Icon_Rogue.png`,
    },
    {
      className: 'shaman',
      imageUrl: `http://localhost:${PORT}/ClassIcons/Icon_Shaman.png`,
    },
    {
      className: 'warlock',
      imageUrl: `http://localhost:${PORT}/ClassIcons/Icon_Warlock.png`,
    },
    {
      className: 'warrior',
      imageUrl: `http://localhost:${PORT}/ClassIcons/Icon_Warrior.png`,
    },
  ];

  res.status(200).send(classImages);
});

app.get('/factions', (req, res) => {
  const factionImages = [
    {
      faction: 'alliance',
      imageUrl: `http://localhost:${PORT}/FactionIcons/Alliance.png`,
    },
    {
      faction: 'both',
      imageUrl: `http://localhost:${PORT}/FactionIcons/Both.png`,
    },
    {
      faction: 'horde',
      imageUrl: `http://localhost:${PORT}/FactionIcons/Horde.png`,
    },

  ];

  res.status(200).send(factionImages);
});

app.get('/roguegear', (req, res) => {
  const rogueGear = [
    {
      name: 'Tunic of Westfall',
      optional: false,
      note: `BiS in Cata if you don't plan to buy Gloomshroud Armor.`,
      questName: 'The Defias Brotherhood',
      itemId: 2041,
      questId: 166,
      requiredLevel: 14,
      faction: 'alliance',
      rarity: 'q3'
    },
    {
      name: 'Seal of Wrynn',
      optional: false,
      note: `Useful for high stam sets in Cata.`,
      questName: 'An Audience with the King',
      itemId: 2933,
      questId: 396,
      requiredLevel: 16,
      faction: 'alliance',
      rarity: 'q3'
    },
    {
      name: 'Minor Channeling Ring',
      optional: true,
      note: `Currently BiS for max crit, probably won't be BiS in Cata.`,
      questName: `WANTED: Chok'sul`,
      itemId: 1449,
      questId: 256,
      requiredLevel: 9,
      faction: 'alliance',
      rarity: 'q2'
    },
    {
      name: 'Dusty Mining Gloves',
      optional: true,
      note: `Change to +5 Agility +5 Stamina in Cata, might be useful in Cata.`,
      questName: `Collecting Memories`,
      itemId: 2036,
      questId: 168,
      requiredLevel: 14,
      faction: 'alliance',
      rarity: 'q2'
    },
    {
      name: 'Gutterblade',
      optional: true,
      note: `Higher base DPS than fang, but likely too fast to ever be considered BiS.`,
      questName: `Reane's Cleansing`,
      itemId: 17046,
      questId: 1046,
      requiredLevel: 18,
      faction: 'alliance',
      rarity: 'q2'
    },
    {
      name: 'Wingblade',
      optional: false,
      note: `Very good offhand, comparable to Shadowfang in Cata.`,
      questName: 'Leader of the Fang',
      itemId: 6504,
      questId: 914,
      requiredLevel: 10,
      faction: 'horde',
      rarity: 'q3'
    },
    {
      name: 'Seal of Sylvanas',
      optional: false,
      note: `BiS for FC sets in Cata and beyond.`,
      questName: 'Argual Must Die',
      itemId: 6414,
      questId: 1014,
      requiredLevel: 18,
      faction: 'horde',
      rarity: 'q3'
    },
    {
      name: 'Screecher Belt',
      optional: true,
      note: `Probably never BiS`,
      questName: `Bloodfury Bloodline`,
      itemId: 16987,
      questId: 6283,
      requiredLevel: 18,
      faction: 'horde',
      rarity: 'q2'
    },
    {
      name: 'Grizzled Boots',
      optional: false,
      note: `Might be BiS for FC set in Cata.`,
      questName: `The Book of Ur`,
      itemId: 6335,
      questId: 1013,
      requiredLevel: 16,
      faction: 'horde',
      rarity: 'q2'
    },
    {
      name: 'Jutebraid Gloves',
      optional: false,
      note: `BiS for FC set in Cata. Take these over Trailblazer Boots`,
      questName: 'Horde Presence',
      itemId: 10654,
      questId: 3514,
      requiredLevel: 15,
      faction: 'horde',
      rarity: 'q2'
    },
    {
      name: 'Sacred Burial Trousers',
      optional: true,
      note: `+9 Spirit +8 Stamina in Cata, might be useful for an FC set, but probably not BiS.`,
      questName: 'Battle of Hillsbrad',
      itemId: 6282,
      questId: 550,
      requiredLevel: 19,
      faction: 'horde',
      rarity: 'q2'
    },
    {
      name: 'Blackened Defias Armor',
      optional: false,
      note: `It's worth getting the full Defias set before Cata.`,
      questName: null,
      itemId: 10399,
      questId: null,
      requiredLevel: null,
      faction: 'both',
      rarity: 'q3'
    },
    {
      name: 'Blackened Defias Belt',
      optional: false,
      note: `It's worth getting the full Defias set before Cata.`,
      questName: null,
      itemId: 10403,
      questId: null,
      requiredLevel: null,
      faction: 'both',
      rarity: 'q3'
    },
    {
      name: 'Blackened Defias Boots',
      optional: false,
      note: `It's worth getting the full Defias set before Cata.`,
      questName: `Bloodfury Bloodline`,
      itemId: 10402,
      questId: null,
      requiredLevel: null,
      faction: 'both',
      rarity: 'q2'
    },
    {
      name: 'Metalworking Gloves',
      optional: true,
      note: `Gloves of the Fang are always better, but might be cool to have.`,
      questName: null,
      itemId: 1944,
      questId: null,
      requiredLevel: null,
      faction: 'both',
      rarity: 'q2'
    },
    {
      name: 'Talon of Vultros',
      optional: false,
      note: `BiS for ambush damage in Cata.`,
      questName: null,
      itemId: 4454,
      questId: null,
      requiredLevel: null,
      faction: 'both',
      rarity: 'q3'
    },
    {
      name: 'Draftsman Boots',
      optional: true,
      note: `Change to +5 Agility +5 Stamina in Cata, might be useful in Cata.`,
      questName: 'Gerenzo Wrenchwhistle',
      itemId: 6668,
      questId: 1096,
      requiredLevel: 16,
      faction: 'both',
      rarity: 'q2'
    },
    {
      name: 'Rugged Spaulders',
      optional: true,
      note: `Never BiS, but might be cool to have`,
      questName: null,
      itemId: 5254,
      questId: null,
      requiredLevel: null,
      faction: 'both',
      rarity: 'q3'
    },
    {
      name: 'Gloomshroud Armor',
      optional: true,
      note: `More notorious than Shadowfang for its rarity and price. +8 Agility, +6 Crit, +4 Stamina in Cata. If you aren't willing to shell out $200 or more just use Tunic of Westfall. It's worth noting that this item is already Grandfathered and has been since TBC launch.`,
      questName: null,
      itemId: 1489,
      questId: null,
      requiredLevel: null,
      faction: 'both',
      rarity: 'q3'
    },
  ];

  res.status(200).send(rogueGear);
});

app.get('/warriorgear', (req, res) => {
  const warriorGear = [
    {
      name: 'Seraph’s Strike',
      itemId: 5614,
      faction: 'alliance',
    },
    {
      name: 'Deadskull Shield',
      itemId: 3761,
      faction: 'horde',
    },
    {
      name: 'Seal of Sylvanas',
      itemId: 6414,
      faction: 'horde',
    },
    {
      name: 'Steel-clasped Bracers',
      itemId: 4534,
      faction: 'horde',
    },
    {
      name: 'Grizzled Boots',
      itemId: 6335,
      faction: 'horde',
    },
    {
      name: 'Gutterblade',
      itemId: 17046,
      faction: 'alliance',
    },
    {
      name: 'Glacial Stone',
      itemId: 5815,
      faction: 'alliance',
    },
    {
      name: 'Seal of Wrynn',
      itemId: 2933,
      faction: 'alliance',
    },
    {
      name: 'Beetle Clasps',
      itemId: 7003,
      faction: 'alliance',
    },
    {
      name: 'Chausses of Westfall',
      itemId: 6087,
      faction: 'alliance',
    },
    {
      name: 'Malleable Chain Leggings',
      itemId: 2545,
      faction: 'alliance',
    },
    {
      name: 'Rift Bracers',
      itemId: 5943,
      faction: 'both',
    },
    {
      name: 'Arctic Buckler',
      itemId: 7002,
      faction: 'both',
    },
    {
      name: 'Draftsman Boots',
      itemId: 6668,
      faction: 'both',
    },
    {
      name: 'Goblin Mail Leggings (BoE)',
      itemId: 1943,
      faction: 'both',
    },
    {
      name: 'Blackened Defias Armor',
      itemId: 10399,
      faction: 'both',
    },
    {
      name: 'Blackened Defias Boots (BoE)',
      itemId: 10402,
      faction: 'both',
    },
    {
      name: 'Blackened Defias Belt (BoE)',
      itemId: 10403,
      faction: 'both',
    },
    {
      name: 'Green Carapace Shield (BoE)',
      itemId: 2021,
      faction: 'both',
    },
  ];

  res.status(200).send(warriorGear);
});





// app.get('/alliancerogue', (req, res) => {
//   const allianceRogueGear = [
//     {
//       itemName: 'Tunic of Westfall',
//       optional: false,
//       note: `BiS in Cata if you don't plan to buy Gloomshroud Armor.`,
//       questName: 'The Defias Brotherhood',
//       itemId: 2041,
//       questId: 166,
//       requiredLevel: 14,
//     },
//     {
//       name: 'Seal of Wrynn',
//       optional: false,
//       note: `Useful for high stam sets in Cata.`,
//       questName: 'An Audience with the King',
//       itemId: 2933,
//       questId: 396,
//       requiredLevel: 16,
//     },
//     {
//       name: 'Minor Channeling Ring',
//       optional: true,
//       note: `Currently BiS for max crit, probably won't be BiS in Cata.`,
//       questName: `WANTED: Chok'sul`,
//       itemId: 1449,
//       questId: 256,
//       requiredLevel: 9,
//     },
//     {
//       name: 'Dusty Mining Gloves',
//       optional: true,
//       note: `Change to +5 Agility +5 Stamina in Cata, might be useful in Cata.`,
//       questName: `Collecting Memories`,
//       itemId: 2036,
//       questId: 168,
//       requiredLevel: 14,
//     },
//     {
//       name: 'Gutterblade',
//       optional: true,
//       note: `Higher base DPS than fang, but likely too fast to ever be considered BiS.`,
//       questName: `Reane's Cleansing`,
//       itemId: 17046,
//       questId: 1046,
//       requiredLevel: 18,
//     },
//   ];

//   res.status(200).send(allianceRogueGear);
// });

// app.get('/horderogue', (req, res) => {
//   const hordeRogueGear = [
//     {
//       itemName: 'Wingblade',
//       optional: false,
//       note: `Very good offhand, comparable to Shadowfang in Cata.`,
//       questName: 'Leader of the Fang',
//       itemId: 6504,
//       questId: 914,
//       requiredLevel: 10,
//     },
//     {
//       name: 'Seal of Sylvanas',
//       optional: false,
//       note: `BiS for FC sets in Cata and beyond.`,
//       questName: 'Argual Must Die',
//       itemId: 6414,
//       questId: 1014,
//       requiredLevel: 18,
//     },
//     {
//       name: 'Screecher Belt',
//       optional: true,
//       note: `Probably never BiS`,
//       questName: `Bloodfury Bloodline`,
//       itemId: 16987,
//       questId: 6283,
//       requiredLevel: 18,
//     },
//     {
//       name: 'Grizzled Boots',
//       optional: false,
//       note: `Might be BiS for FC set in Cata.`,
//       questName: `The Book of Ur`,
//       itemId: 6335,
//       questId: 1013,
//       requiredLevel: 16,
//     }, 
//     {
//       name: 'Jutebraid Gloves',
//       optional: false,
//       note: `BiS for FC set in Cata. Take these over Trailblazer Boots`,
//       questName: 'Horde Presence',
//       itemId: 10654,
//       questId: 3514,
//       requiredLevel: 15,
//     },
//     {
//       name: 'Sacred Burial Trousers',
//       optional: true,
//       note: `+9 Spirit +8 Stamina in Cata, might be useful for an FC set, but probably not BiS.`,
//       questName: 'Battle of Hillsbrad',
//       itemId: 6282,
//       questId: 550,
//       requiredLevel: 19,
//     },
//   ];

//   res.status(200).send(hordeRogueGear);
// });

// app.get('/bothrogue', (req, res) => {
//   const bothRogueGear = [
//     {
//       itemName: 'Tunic of Westfall',
//       optional: false,
//       note: `BiS in Cata if you don't plan to buy Gloomshroud Armor.`,
//       questName: 'The Defias Brotherhood',
//       itemId: 2041,
//       questId: 166,
//       requiredLevel: 14,
//     },
//     {
//       name: 'Seal of Wrynn',
//       optional: false,
//       note: `Useful for high stam sets in Cata.`,
//       questName: 'An Audience with the King',
//       itemId: 2933,
//       questId: 396,
//       requiredLevel: 16,
//     },
//     {
//       name: 'Minor Channeling Ring',
//       optional: true,
//       note: `Currently BiS for max crit, probably won't be BiS in Cata.`,
//       questName: `WANTED: Chok'sul`,
//       itemId: 1449,
//       questId: 256,
//       requiredLevel: 9,
//     },
//     {
//       name: 'Dusty Mining Gloves',
//       optional: true,
//       note: `Change to +5 Agility +5 Stamina in Cata, might be useful in Cata.`,
//       questName: `Collecting Memories`,
//       itemId: 2036,
//       questId: 168,
//       requiredLevel: 14,
//     },
//     {
//       name: 'Gutterblade',
//       optional: true,
//       note: `Higher base DPS than fang, but likely too fast to ever be considered BiS.`,
//       questName: `Reane's Cleansing`,
//       itemId: 17046,
//       questId: 1046,
//       requiredLevel: 18,
//     },
//     {
//       itemName: 'Wingblade',
//       optional: false,
//       note: `Very good offhand, comparable to Shadowfang in Cata.`,
//       questName: 'Leader of the Fang',
//       itemId: 6504,
//       questId: 914,
//       requiredLevel: 10,
//     },
//     {
//       name: 'Seal of Sylvanas',
//       optional: false,
//       note: `BiS for FC sets in Cata and beyond.`,
//       questName: 'Argual Must Die',
//       itemId: 6414,
//       questId: 1014,
//       requiredLevel: 18,
//     },
//     {
//       name: 'Screecher Belt',
//       optional: true,
//       note: `Probably never BiS`,
//       questName: `Bloodfury Bloodline`,
//       itemId: 16987,
//       questId: 6283,
//       requiredLevel: 18,
//     },
//     {
//       name: 'Grizzled Boots',
//       optional: false,
//       note: `Might be BiS for FC set in Cata.`,
//       questName: `The Book of Ur`,
//       itemId: 6335,
//       questId: 1013,
//       requiredLevel: 16,
//     }, 
//     {
//       name: 'Jutebraid Gloves',
//       optional: false,
//       note: `BiS for FC set in Cata. Take these over Trailblazer Boots`,
//       questName: 'Horde Presence',
//       itemId: 10654,
//       questId: 3514,
//       requiredLevel: 15,
//     },
//     {
//       name: 'Sacred Burial Trousers',
//       optional: true,
//       note: `+9 Spirit +8 Stamina in Cata, might be useful for an FC set, but probably not BiS.`,
//       questName: 'Battle of Hillsbrad',
//       itemId: 6282,
//       questId: 550,
//       requiredLevel: 19,
//     },
//     {
//       name: 'Blackened Defias Armor',
//       optional: false,
//       note: `It's worth getting the full Defias set before Cata.`,
//       questName: null,
//       itemId: 10399,
//       questId: null,
//       requiredLevel: null,
//     },
//     {
//       name: 'Blackened Defias Belt',
//       optional: false,
//       note: `It's worth getting the full Defias set before Cata.`,
//       questName: null,
//       itemId: 10403,
//       questId: null,
//       requiredLevel: null,
//     },
//     {
//       name: 'Blackened Defias Boots',
//       optional: false,
//       note: `It's worth getting the full Defias set before Cata.`,
//       questName: `Bloodfury Bloodline`,
//       itemId: 10402,
//       questId: null,
//       requiredLevel: null,
//     },
//     {
//       name: 'Metalworking Gloves',
//       optional: true,
//       note: `Gloves of the Fang are always better, but might be cool to have.`,
//       questName: null,
//       itemId: 1944,
//       questId: null,
//       requiredLevel: null,
//     },
//     {
//       name: 'Talon of Vultros',
//       optional: false,
//       note: `BiS for ambush damage in Cata.`,
//       questName: null,
//       itemId: 4454,
//       questId: null,
//       requiredLevel: null,
//     },
//     {
//       name: 'Draftsman Boots',
//       optional: true,
//       note: `Change to +5 Agility +5 Stamina in Cata, might be useful in Cata.`,
//       questName: 'Gerenzo Wrenchwhistle',
//       itemId: 6668,
//       questId: 1096,
//       requiredLevel: 16,
//     },
//     {
//       name: 'Rugged Spaulders',
//       optional: true,
//       note: `Never BiS, but might be cool to have`,
//       questName: null,
//       itemId: 5254,
//       questId: null,
//       requiredLevel: null,
//     },
//     {
//       name: 'Gloomshroud Armor',
//       optional: true,
//       note: `More notorious than Shadowfang for it's rarity and price. +8 Agility, +6 Crit, +4 Stamina in Cata. If you aren't willing to shell out $200 or more just use Tunic of Westfall. It's worth noting that this item is already Grandfathered and has been since TBC launch.`,
//       questName: null,
//       itemId: 1489,
//       questId: null,
//       requiredLevel: null,
//     },
//   ];

//   res.status(200).send(bothRogueGear);
// });