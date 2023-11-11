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
      className: 'Druid',
      imageUrl: `https://one9checkserver.onrender.com/ClassIcons/Icon_Druid.png`,
    },
    {
      className: 'Hunter',
      imageUrl: `https://one9checkserver.onrender.com/ClassIcons/Icon_Hunter.png`,
    },
    {
      className: 'Mage',
      imageUrl: `https://one9checkserver.onrender.com/ClassIcons/Icon_Mage.png`,
    },
    {
      className: 'Paladin',
      imageUrl: `https://one9checkserver.onrender.com/ClassIcons/Icon_Paladin.png`,
    },
    {
      className: 'Priest',
      imageUrl: `https://one9checkserver.onrender.com/ClassIcons/Icon_Priest.png`,
    },
    {
      className: 'Rogue',
      imageUrl: `https://one9checkserver.onrender.com/ClassIcons/Icon_Rogue.png`,
    },
    {
      className: 'Shaman',
      imageUrl: `https://one9checkserver.onrender.com/ClassIcons/Icon_Shaman.png`,
    },
    {
      className: 'Warlock',
      imageUrl: `https://one9checkserver.onrender.com/ClassIcons/Icon_Warlock.png`,
    },
    {
      className: 'Warrior',
      imageUrl: `https://one9checkserver.onrender.com/ClassIcons/Icon_Warrior.png`,
    },
  ];

  res.status(200).send(classImages);
});

app.get('/factions', (req, res) => {
  const factionImages = [
    {
      faction: 'Alliance',
      imageUrl: `https://one9checkserver.onrender.com/FactionIcons/Alliance.png`,
    },
    {
      faction: 'Both',
      imageUrl: `https://one9checkserver.onrender.com/FactionIcons/Both.png`,
    },
    {
      faction: 'Horde',
      imageUrl: `https://one9checkserver.onrender.com/FactionIcons/Horde.png`,
    },
  ];

  res.status(200).send(factionImages);
});


app.get('/roguegear', (req, res) => {
  const rogueGear = [
    {
      name: 'Tunic of Westfall',
      itemId: 2041,
      faction: 'Alliance',
      rarity: 'q3'
    },
    {
      name: 'Seal of Wrynn',
      itemId: 2933,
      faction: 'Alliance',
      rarity: 'q3'
    },
    {
      name: 'Minor Channeling Ring',
      itemId: 1449,
      faction: 'Alliance',
      rarity: 'q2'
    },
    {
      name: 'Dusty Mining Gloves',
      itemId: 2036,
      faction: 'Alliance',
      rarity: 'q2'
    },
    {
      name: 'Gutterblade',
      itemId: 17046,
      faction: 'Alliance',
      rarity: 'q2'
    },
    {
      name: 'Wingblade',
      itemId: 6504,
      faction: 'Horde',
      rarity: 'q3'
    },
    {
      name: 'Seal of Sylvanas',
      itemId: 6414,
      faction: 'Horde',
      rarity: 'q3'
    },
    {
      name: 'Screecher Belt',
      itemId: 16987,
      faction: 'Horde',
      rarity: 'q2'
    },
    {
      name: 'Grizzled Boots',
      itemId: 6335,
      faction: 'Horde',
      rarity: 'q2'
    },
    {
      name: 'Jutebraid Gloves',
      itemId: 10654,
      faction: 'Horde',
      rarity: 'q2'
    },
    {
      name: 'Sacred Burial Trousers',
      itemId: 6282,
      faction: 'Horde',
      rarity: 'q2'
    },
    {
      name: 'Blackened Defias Armor',
      itemId: 10399,
      faction: 'Both',
      rarity: 'q3'
    },
    {
      name: 'Blackened Defias Belt',
      itemId: 10403,
      faction: 'Both',
      rarity: 'q3'
    },
    {
      name: 'Blackened Defias Boots',
      itemId: 10402,
      faction: 'Both',
      rarity: 'q2'
    },
    {
      name: 'Metalworking Gloves',
      itemId: 1944,
      faction: 'Both',
      rarity: 'q2'
    },
    {
      name: 'Talon of Vultros',
      itemId: 4454,
      faction: 'Both',
      rarity: 'q3'
    },
    {
      name: 'Draftsman Boots',
      itemId: 6668,
      faction: 'Both',
      rarity: 'q2'
    },
    {
      name: 'Rugged Spaulders',
      itemId: 5254,
      faction: 'Both',
      rarity: 'q3'
    },
    {
      name: 'Gloomshroud Armor',
      itemId: 1489,
      faction: 'Both',
      rarity: 'q3'
    }
  ];

  res.status(200).send(rogueGear);
});

app.get('/warriorgear', (req, res) => {
  const warriorGear = [
    {
      name: `Seraph's Strike`,
      itemId: 5614,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Deadskull Shield',
      itemId: 3761,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Seal of Sylvanas',
      itemId: 6414,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Steel-clasped Bracers',
      itemId: 4534,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Grizzled Boots',
      itemId: 6335,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Gutterblade',
      itemId: 17046,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Glacial Stone',
      itemId: 5815,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Seal of Wrynn',
      itemId: 2933,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: 'Beetle Clasps',
      itemId: 7003,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Chausses of Westfall',
      itemId: 6087,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: 'Malleable Chain Leggings',
      itemId: 2545,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Rift Bracers',
      itemId: 5943,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Arctic Buckler',
      itemId: 7002,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Draftsman Boots',
      itemId: 6668,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Goblin Mail Leggings (BoE)',
      itemId: 1943,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Blackened Defias Armor',
      itemId: 10399,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Blackened Defias Boots (BoE)',
      itemId: 10402,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Blackened Defias Belt (BoE)',
      itemId: 10403,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Green Carapace Shield (BoE)',
      itemId: 2021,
      faction: 'Both',
      rarity: 'q2',
    },
  ];

  res.status(200).send(warriorGear);
});

app.get('/magegear', (req, res) => {
  const mageGear = [
    {
      name: 'Inferno Robe',
      itemId: 2231,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Bloody Apron',
      itemId: 6226,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Jutebraid Gloves',
      itemId: 10654,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Sacred Burial Trousers',
      itemId: 6282,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Ghostly Mantle',
      itemId: 3324,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Crescent Staff',
      itemId: 6505,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Seal of Sylvanas',
      itemId: 6414,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Totem of Infliction',
      itemId: 1131,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Seal of Wyrnn',
      itemId: 2933,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: 'Minor Channeling Ring',
      itemId: 1449,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Pious Legwraps',
      itemId: 10043,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Talbar Mantle',
      itemId: 10657,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Staff of the Purifier',
      itemId: 5613,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Gravestone Scepter',
      itemId: 7001,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Everglow Lantern',
      itemId: 5323,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Black Widow Band (BoE)',
      itemId: 6199,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Walking Boots (BoE)',
      itemId: 4660,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: `Noble's Robe (BoE)`,
      itemId: 3019,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Black Pearl Ring (BoE)',
      itemId: 6332,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Nightbane Staff (BoE)',
      itemId: 3227,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Tarantula Silk Sash (BoE)',
      itemId: 3229,
      faction: 'Both',
      rarity: 'q2',
    },
  ];

  res.status(200).send(mageGear);
});

app.get('/druidgear', (req, res) => {
  const druidGear = [
    {
      name: 'Crescent Staff',
      itemId: 6505,
      faction: 'horde',
      rarity: 'q3',
    },
    {
      name: 'Seal of Sylvanas',
      itemId: 6414,
      faction: 'horde',
      rarity: 'q3',
    },
    {
      name: 'Screecher Belt',
      itemId: 16987,
      faction: 'horde',
      rarity: 'q2',
    },
    {
      name: 'Jutebraid Gloves',
      itemId: 10654,
      faction: 'horde',
      rarity: 'q2',
    },
    {
      name: 'Grizzled Boots',
      itemId: 6335,
      faction: 'horde',
      rarity: 'q2',
    },
    {
      name: 'Inferno Robe',
      itemId: 2231,
      faction: 'horde',
      rarity: 'q2',
    },
    {
      name: 'Talbar Mantle',
      itemId: 10657,
      faction: 'horde',
      rarity: 'q2',
    },
    {
      name: 'Ghostly Mantle',
      itemId: 3324,
      faction: 'horde',
      rarity: 'q2',
    },
    {
      name: 'Sacred Burial Trousers',
      itemId: 6282,
      faction: 'horde',
      rarity: 'q2',
    },
    {
      name: 'Glacial Stone',
      itemId: 5815,
      faction: 'alliance',
      rarity: 'q2',
    },
    {
      name: 'Totem of Infliction',
      itemId: 1131,
      faction: 'alliance',
      rarity: 'q2',
    },
    {
      name: 'Seal of Wrynn',
      itemId: 2933,
      faction: 'alliance',
      rarity: 'q3',
    },
    {
      name: 'Minor Channeling Ring',
      itemId: 1449,
      faction: 'alliance',
      rarity: 'q2',
    },
    {
      name: 'Tunic of Westfall',
      itemId: 2041,
      faction: 'alliance',
      rarity: 'q3',
    },
    {
      name: 'Dusty Mining Gloves',
      itemId: 2036,
      faction: 'alliance',
      rarity: 'q2',
    },
    {
      name: 'Pious Legwraps',
      itemId: 10043,
      faction: 'alliance',
      rarity: 'q2',
    },
    {
      name: 'Aquarius Belt',
      itemId: 16608,
      faction: 'both',
      rarity: 'q3',
    },
    {
      name: 'Veildust Medicine Bag',
      itemId: 15866,
      faction: 'both',
      rarity: 'q2',
    },
    {
      name: 'Staff of the Purifier',
      itemId: 5613,
      faction: 'both',
      rarity: 'q2',
    },
    {
      name: 'Draftsman Boots',
      itemId: 6668,
      faction: 'both',
      rarity: 'q2',
    },
    {
      name: 'Everglow Lantern',
      itemId: 5323,
      faction: 'both',
      rarity: 'q2',
    },
    {
      name: 'Black Widow Band (BOE)',
      itemId: 6199,
      faction: 'both',
      rarity: 'q2',
    },
    {
      name: 'Blackened Defias Armor',
      itemId: 10399,
      faction: 'both',
      rarity: 'q3',
    },
    {
      name: 'Blackened Defias Belt (BOE)',
      itemId: 10403,
      faction: 'both',
      rarity: 'q3',
    },
    {
      name: 'Blackened Defias Boots (BOE)',
      itemId: 10402,
      faction: 'both',
      rarity: 'q2',
    },
    {
      name: 'Tarantula Silk Sash (BOE)',
      itemId: 3229,
      faction: 'both',
      rarity: 'q2',
    },
    {
      name: 'Metalworking Gloves (BOE)',
      itemId: 1944,
      faction: 'both',
      rarity: 'q2',
    },
    {
      name: 'Woodworking Gloves (BOE)',
      itemId: 1945,
      faction: 'both',
      rarity: 'q2',
    },
    {
      name: 'Gloomshroud Armor (BOE)',
      itemId: 1489,
      faction: 'both',
      rarity: 'q3',
    },
    {
      name: 'Rugged Spaulders',
      itemId: 5254,
      faction: 'both',
      rarity: 'q3',
    },
  ];
  res.status(200).send(druidGear);
});

app.get('/huntergear', (req, res) => {
  const hunterGear = [
    {
      name: 'Wingblade',
      itemId: 6504,
      faction: 'horde',
      rarity: 'q3',
    },
    {
      name: 'Runic Darkblade',
      itemId: 3822,
      faction: 'horde',
      rarity: 'q2',
    },
    {
      name: 'Crescent Staff',
      itemId: 6505,
      faction: 'horde',
      rarity: 'q3',
    },
    {
      name: 'Seal of Sylvanas',
      itemId: 6414,
      faction: 'horde',
      rarity: 'q3',
    },
    {
      name: 'Screecher Belt',
      itemId: 16987,
      faction: 'horde',
      rarity: 'q2',
    },
    {
      name: 'Grizzled Boots',
      itemId: 6335,
      faction: 'horde',
      rarity: 'q2',
    },
    {
      name: 'Jutebraid Gloves',
      itemId: 10654,
      faction: 'horde',
      rarity: 'q2',
    },
    {
      name: 'Sacred Burial Trousers',
      itemId: 6282,
      faction: 'horde',
      rarity: 'q2',
    },
    {
      name: `Seraph's Strike`,
      itemId: 5614,
      faction: 'alliance',
      rarity: 'q2',
    },
    {
      name: 'Seal of Wrynn',
      itemId: 2933,
      faction: 'alliance',
      rarity: 'q3',
    },
    {
      name: 'Minor Channeling Ring',
      itemId: 1449,
      faction: 'alliance',
      rarity: 'q2',
    },
    {
      name: 'Tunic of Westfall',
      itemId: 2041,
      faction: 'alliance',
      rarity: 'q3',
    },
    {
      name: 'Dusty Mining Gloves',
      itemId: 2036,
      faction: 'alliance',
      rarity: 'q2',
    },
    {
      name: 'Pious Legwraps',
      itemId: 10043,
      faction: 'alliance',
      rarity: 'q2',
    },
    {
      name: 'Draftsman Boots',
      itemId: 6668,
      faction: 'both',
      rarity: 'q2',
    },
    {
      name: 'Blackened Defias Armor',
      itemId: 10399,
      faction: 'both',
      rarity: 'q3',
    },
    {
      name: 'Blackened Defias Belt (BoE)',
      itemId: 10403,
      faction: 'both',
      rarity: 'q3',
    },
    {
      name: 'Blackened Defias Boots (BoE)',
      itemId: 10402,
      faction: 'both',
      rarity: 'q2',
    },
    {
      name: 'Metalworking Gloves (BoE)',
      itemId: 1944,
      faction: 'both',
      rarity: 'q2',
    },
    {
      name: 'Gloomshroud Armor (BoE)',
      itemId: 1489,
      faction: 'both',
      rarity: 'q3',
    },
    {
      name: 'Rugged Spaulders',
      itemId: 5254,
      faction: 'both',
      rarity: 'q3',
    },
  ];

  res.status(200).send(hunterGear);
});

app.get('/shamangear', (req, res) => {
  const shamanGear = [
    {
      name: 'Wingblade',
      itemId: 6504,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Runic Darkblade',
      itemId: 3822,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Crescent Staff',
      itemId: 6505,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Seal of Sylvanas',
      itemId: 6414,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Screecher Belt',
      itemId: 16987,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Grizzled Boots',
      itemId: 6335,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Jutebraid Gloves',
      itemId: 10654,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Sacred Burial Trousers',
      itemId: 6282,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: `Seraph's Strike`,
      itemId: 5614,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Seal of Wrynn',
      itemId: 2933,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: 'Minor Channeling Ring',
      itemId: 1449,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Tunic of Westfall',
      itemId: 2041,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: 'Dusty Mining Gloves',
      itemId: 2036,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Pious Legwraps',
      itemId: 10043,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Draftsman Boots',
      itemId: 6668,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Blackened Defias Armor',
      itemId: 10399,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Blackened Defias Belt (BoE)',
      itemId: 10403,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Blackened Defias Boots (BoE)',
      itemId: 10402,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Metalworking Gloves (BoE)',
      itemId: 1944,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Gloomshroud Armor (BoE)',
      itemId: 1489,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Rugged Spaulders',
      itemId: 5254,
      faction: 'Both',
      rarity: 'q3',
    },
  ];

  res.status(200).send(shamanGear);
});

app.get('/warlockgear', (req, res) => {
  const warlockGear = [
    {
      name: 'Crescent Staff',
      itemId: 6505,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Seal of Sylvanas',
      itemId: 6414,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Ghostly Mantle',
      itemId: 3324,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Inferno Robe',
      itemId: 2231,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Jutebraid Gloves',
      itemId: 10654,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Sacred Burial Trousers',
      itemId: 6282,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Seal of Wrynn',
      itemId: 2933,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: 'Minor Channeling Ring',
      itemId: 1449,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Pious Legwraps',
      itemId: 10043,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Staff of the Purifier',
      itemId: 5613,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Gravestone Scepter',
      itemId: 7001,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Black Widow Band (BoE)',
      itemId: 6199,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Talbar Mantle',
      itemId: 10657,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Walking Boots (BoE)',
      itemId: 4660,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: `Noble's Robe (BoE)`,
      itemId: 3019,
      faction: 'Both',
      rarity: 'q2',
    },
  ];

  res.status(200).send(warlockGear);
});

app.get('/priestgear', (req, res) => {
  const priestGear = [
    {
      name: 'Crescent Staff',
      itemId: 6505,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Seal of Sylvanas',
      itemId: 6414,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Ghostly Mantle',
      itemId: 3324,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Inferno Robe',
      itemId: 2231,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Jutebraid Gloves',
      itemId: 10654,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Sacred Burial Trousers',
      itemId: 6282,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Seal of Wrynn',
      itemId: 2933,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: 'Minor Channeling Ring',
      itemId: 1449,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Pious Legwraps',
      itemId: 10043,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Staff of the Purifier',
      itemId: 5613,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Gravestone Scepter',
      itemId: 7001,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Black Widow Band (BoE)',
      itemId: 6199,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Talbar Mantle',
      itemId: 10657,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Walking Boots (BoE)',
      itemId: 4660,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: `Noble's Robe (BoE)`,
      itemId: 3019,
      faction: 'Both',
      rarity: 'q2',
    },
  ];
  res.status(200).send(priestGear);
});

app.get('/paladingear', (req, res) => {
  const paladinGear = [
    {
      name: 'Deadskull Shield',
      itemId: 3761,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Sacred Burial Trousers',
      itemId: 6282,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Seal of Sylvanas',
      itemId: 6414,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Steel-clasped Bracers',
      itemId: 4534,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Screecher Belt',
      itemId: 16987,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Grizzled Boots',
      itemId: 6335,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Ghostly Mantle',
      itemId: 3324,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Inferno Robe',
      itemId: 2231,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Jutebraid Gloves',
      itemId: 10654,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Glacial Stone',
      itemId: 5815,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Seraph\'s Strike',
      itemId: 5614,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Seal of Wrynn',
      itemId: 2933,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: 'Minor Channeling Ring',
      itemId: 1449,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Beetle Clasps',
      itemId: 7003,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Chausses of Westfall',
      itemId: 6087,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: 'Malleable Chain Leggings',
      itemId: 2545,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Tunneler\'s Boots',
      itemId: 2037,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Pious Legwraps',
      itemId: 10043,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Arctic Buckler',
      itemId: 7002,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Everglow Lantern',
      itemId: 5323,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Green Carapace Shield (BoE)',
      itemId: 2021,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Black Widow Band (BoE)',
      itemId: 6199,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Rift Bracers',
      itemId: 5943,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Goblin Mail Leggings (BoE)',
      itemId: 1943,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Blackened Defias Armor',
      itemId: 10399,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Blackened Defias Belt (BoE)',
      itemId: 10403,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Blackened Defias Boots (BoE)',
      itemId: 10402,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Draftsman Boots',
      itemId: 6668,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Tarantula Silk Sash (BoE)',
      itemId: 3229,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Metalworking Gloves (BoE)',
      itemId: 1944,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Woodworking Gloves (BoE)',
      itemId: 1945,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Gloomshroud Armor (BoE)',
      itemId: 1489,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Rugged Spaulders',
      itemId: 5254,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Talbar Mantle',
      itemId: 10657,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Walking Boots (BoE)',
      itemId: 4660,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: `Noble's Robe (BoE)`,
      itemId: 3019,
      faction: 'Both',
      rarity: 'q2',
    },
  ];
  res.status(200).send(paladinGear);
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