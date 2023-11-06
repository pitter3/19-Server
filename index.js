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
      className: 'alliance',
      imageUrl: `http://localhost:${PORT}/FactionIcons/Alliance.png`,
    },
    {
      className: 'both',
      imageUrl: `http://localhost:${PORT}/FactionIcons/Both.png`,
    },
    {
      className: 'horde',
      imageUrl: `http://localhost:${PORT}/FactionIcons/Horde.png`,
    },

  ];

  res.status(200).send(factionImages);
});

app.get('/alliancerogue', (req, res) => {
  const allianceRogueGear = [
    {
      itemName: 'Tunic of Westfall',
      optional: false,
      note: `BiS in Cata if you don't plan to buy Gloomshroud Armor.`,
      questName: 'The Defias Brotherhood',
      itemId: 2041,
      questId: 166,
      requiredLevel: 14,
    },
    {
      name: 'Seal of Wrynn',
      optional: false,
      note: `Useful for high stam sets in Cata.`,
      questName: 'An Audience with the King',
      itemId: 2933,
      questId: 396,
      requiredLevel: 16,
    },
    {
      name: 'Minor Channeling Ring',
      optional: true,
      note: `Currently BiS for max crit, probably won't be BiS in Cata.`,
      questName: `WANTED: Chok'sul`,
      itemId: 1449,
      questId: 256,
      requiredLevel: 9,
    },
    {
      name: 'Dusty Mining Gloves',
      optional: true,
      note: `Change to +5 Agility +5 Stamina in Cata, might be useful in Cata.`,
      questName: `Collecting Memories`,
      itemId: 2036,
      questId: 168,
      requiredLevel: 14,
    },
    {
      name: 'Gutterblade',
      optional: true,
      note: `Higher base DPS than fang, but likely too fast to ever be considered BiS.`,
      questName: `Reane's Cleansing`,
      itemId: 17046,
      questId: 1046,
      requiredLevel: 18,
    },
    {
      name: 'Blackened Defias Armor',
      optional: false,
      note: `It's worth getting the full Defias set before Cata.`,
      questName: null,
      itemId: 10399,
      questId: null,
      requiredLevel: null,
    },
  ];

  res.status(200).send(allianceRogueGear);
});

app.get('/horderogue', (req, res) => {
  const hordeRogueGear = [
    {
      itemName: 'Wingblade',
      optional: false,
      note: `Very good offhand, comparable to Shadowfang in Cata.`,
      questName: 'Leader of the Fang',
      itemId: 6504,
      questId: 914,
      requiredLevel: 10,
    },
    {
      name: 'Seal of Sylvanas',
      optional: false,
      note: `BiS for FC sets in Cata and beyond.`,
      questName: 'Argual Must Die',
      itemId: 6414,
      questId: 1014,
      requiredLevel: 18,
    },
    {
      name: 'Screecher Belt',
      optional: true,
      note: `Probably never BiS`,
      questName: `Bloodfury Bloodline`,
      itemId: 16987,
      questId: 6283,
      requiredLevel: 18,
    },
    {
      name: 'Grizzled Boots',
      optional: false,
      note: `Might be BiS for FC set in Cata.`,
      questName: `The Book of Ur`,
      itemId: 6335,
      questId: 1013,
      requiredLevel: 16,
    },
    {
      name: 'Draftsman Boots',
      optional: true,
      note: `Change to +5 Agility +5 Stamina in Cata, might be useful in Cata.`,
      questName: 'Gerenzo Wrenchwhistle',
      itemId: 6668,
      questId: 1096,
      requiredLevel: 16,
    },
    {
      name: 'Jutebraid Gloves',
      optional: false,
      note: `BiS for FC set in Cata. Take these over Trailblazer Boots`,
      questName: 'Horde Presence',
      itemId: 10654,
      questId: 3514,
      requiredLevel: 15,
    },
    {
      name: 'Sacred Burial Trousers',
      optional: true,
      note: `+9 Spirit +8 Stamina in Cata, might be useful for an FC set, but probably not BiS.`,
      questName: 'Battle of Hillsbrad',
      itemId: 6282,
      questId: 550,
      requiredLevel: 19,
    },
  ];

  res.status(200).send(hordeRogueGear);
});

app.get('/bothrogue', (req, res) => {
  const bothRogueGear = [
    {
      itemName: 'Wingblade',
      optional: false,
      note: `Very good offhand, comparable to Shadowfang in Cata.`,
      questName: 'Leader of the Fang',
      itemId: 6504,
      questId: 914,
      requiredLevel: 10,
    },
    {
      name: 'Seal of Sylvanas',
      optional: false,
      note: `BiS for FC sets in Cata and beyond.`,
      questName: 'Argual Must Die',
      itemId: 6414,
      questId: 1014,
      requiredLevel: 18,
    },
    {
      name: 'Screecher Belt',
      optional: true,
      note: `Probably never BiS`,
      questName: `Bloodfury Bloodline`,
      itemId: 16987,
      questId: 6283,
      requiredLevel: 18,
    },
    {
      name: 'Grizzled Boots',
      optional: false,
      note: `Might be BiS for FC set in Cata.`,
      questName: `The Book of Ur`,
      itemId: 6335,
      questId: 1013,
      requiredLevel: 16,
    },
    {
      name: 'Draftsman Boots',
      optional: true,
      note: `Change to +5 Agility +5 Stamina in Cata, might be useful in Cata.`,
      questName: 'Gerenzo Wrenchwhistle',
      itemId: 6668,
      questId: 1096,
      requiredLevel: 16,
    },
    {
      name: 'Jutebraid Gloves',
      optional: false,
      note: `BiS for FC set in Cata. Take these over Trailblazer Boots`,
      questName: 'Horde Presence',
      itemId: 10654,
      questId: 3514,
      requiredLevel: 15,
    },
    {
      name: 'Sacred Burial Trousers',
      optional: true,
      note: `+9 Spirit +8 Stamina in Cata, might be useful for an FC set, but probably not BiS.`,
      questName: 'Battle of Hillsbrad',
      itemId: 6282,
      questId: 550,
      requiredLevel: 19,
    },
  ];

  res.status(200).send(hordeRogueGear);
});