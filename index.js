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
      name: 'Tunic of Westfall (A)',
      itemId: 2041,
      faction: 'Alliance',
      rarity: 'q3'
    },
    {
      name: 'Seal of Wrynn (A)',
      itemId: 2933,
      faction: 'Alliance',
      rarity: 'q3'
    },
    {
      name: 'Dusty Mining Gloves (A)',
      itemId: 2036,
      faction: 'Alliance',
      rarity: 'q2'
    },
    {
      name: 'Minor Channeling Ring (A)',
      itemId: 1449,
      faction: 'Alliance',
      rarity: 'q2'
    },
    {
      name: 'Gutterblade (A)',
      itemId: 17046,
      faction: 'Alliance',
      rarity: 'q2'
    },
    {
      name: 'Seal of Sylvanas (H)',
      itemId: 6414,
      faction: 'Horde',
      rarity: 'q3'
    },
    {
      name: 'Grizzled Boots (H)',
      itemId: 6335,
      faction: 'Horde',
      rarity: 'q2'
    },
    {
      name: 'Rugged Spaulders',
      itemId: 5254,
      faction: 'Both',
      rarity: 'q3'
    },
    {
      name: 'Jutebraid Gloves (H)',
      itemId: 10654,
      faction: 'Horde',
      rarity: 'q2'
    },
    {
      name: 'Wingblade (H)',
      itemId: 6504,
      faction: 'Horde',
      rarity: 'q3'
    },
    {
      name: 'Sacred Burial Trousers (H)',
      itemId: 6282,
      faction: 'Horde',
      rarity: 'q2'
    },
    {
      name: 'Draftsman Boots',
      itemId: 6668,
      faction: 'Both',
      rarity: 'q2'
    },
    {
      name: 'Blackened Defias Armor',
      itemId: 10399,
      faction: 'Both',
      rarity: 'q3'
    },
    {
      name: 'Blackened Defias Belt (BoE)',
      itemId: 10403,
      faction: 'Both',
      rarity: 'q3'
    },
    {
      name: 'Blackened Defias Boots (BoE)',
      itemId: 10402,
      faction: 'Both',
      rarity: 'q2'
    },
    {
      name: 'Metalworking Gloves (BoE)',
      itemId: 1944,
      faction: 'Both',
      rarity: 'q2'
    },
    {
      name: 'Talon of Vultros (BoE)',
      itemId: 4454,
      faction: 'Both',
      rarity: 'q3'
    },
    {
      name: 'Gloomshroud Armor (BoE)',
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
      name: 'Chausses of Westfall (A)',
      itemId: 6087,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: 'Seal of Wrynn (A)',
      itemId: 2933,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: 'Glacial Stone (A)',
      itemId: 5815,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Gutterblade (A)',
      itemId: 17046,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Beetle Clasps (A)',
      itemId: 7003,
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
      name: `Seraph's Strike (A)`,
      itemId: 5614,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Malleable Chain Leggings (A)',
      itemId: 2545,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Seal of Sylvanas (H)',
      itemId: 6414,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Steel-clasped Bracers (H)',
      itemId: 4534,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Grizzled Boots (H)',
      itemId: 6335,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Rift Bracers',
      itemId: 5943,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Deadskull Shield (H)',
      itemId: 3761,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Runic Darkblade (H)',
      itemId: 3822,
      faction: 'Horde',
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
      name: 'Goblin Mail Leggings (BoE)',
      itemId: 1943,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Green Carapace Shield (BoE)',
      itemId: 2021,
      faction: 'Both',
      rarity: 'q2',
    }    
  ];

  res.status(200).send(warriorGear);
});

app.get('/magegear', (req, res) => {
  const mageGear = [
    {
      name: 'Seal of Wyrnn (A)',
      itemId: 2933,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: 'Totem of Infliction (A)',
      itemId: 1131,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Minor Channeling Ring (A)',
      itemId: 1449,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Pious Legwraps (A)',
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
      name: 'Everglow Lantern',
      itemId: 5323,
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
      name: 'Seal of Sylvanas (H)',
      itemId: 6414,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Ghostly Mantle (H)',
      itemId: 3324,
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
      name: 'Inferno Robe (H)',
      itemId: 2231,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Sacred Burial Trousers (H)',
      itemId: 6282,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Jutebraid Gloves (H)',
      itemId: 10654,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Crescent Staff (H)',
      itemId: 6505,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Talbar Mantle',
      itemId: 10657,
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
      name: 'Tarantula Silk Sash (BoE)',
      itemId: 3229,
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
  ];

  res.status(200).send(mageGear);
});

app.get('/druidgear', (req, res) => {
  const druidGear = [
    {
      name: 'Aquarius Belt',
      itemId: 16608,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Veildust Medicine Bag',
      itemId: 15866,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Tunic of Westfall (A)',
      itemId: 2041,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: 'Seal of Wyrnn (A)',
      itemId: 2933,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: 'Totem of Infliction (A)',
      itemId: 1131,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Minor Channeling Ring (A)',
      itemId: 1449,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Pious Legwraps (A)',
      itemId: 10043,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Glacial Stone (A)',
      itemId: 5815,
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
      name: 'Seal of Sylvanas (H)',
      itemId: 6414,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Ghostly Mantle (H)',
      itemId: 3324,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Jutebraid Gloves (H)',
      itemId: 10654,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Sacred Burial Trousers (H)',
      itemId: 6282,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Inferno Robe (H)',
      itemId: 2231,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Crescent Staff (H)',
      itemId: 6505,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Talbar Mantle',
      itemId: 10657,
      faction: 'Both',
      rarity: 'q2',
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
      name: "Woodworking Gloves (BoE)",
      itemId: 1945,
      faction: "Both",
      rarity: "q2"
    },
    {
      name: 'Black Pearl Ring (BoE)',
      itemId: 6332,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Tarantula Silk Sash (BoE)',
      itemId: 3229,
      faction: 'Both',
      rarity: 'q2',
    },   
    {
      name: 'Nightbane Staff (BoE)',
      itemId: 3227,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: "Blackened Defias Armor",
      itemId: 10399,
      faction: "Both",
      rarity: "q3"
    },
    {
      name: "Blackened Defias Belt (BoE)",
      itemId: 10403,
      faction: "Both",
      rarity: "q3"
    },
    {
      name: "Blackened Defias Boots (BoE)",
      itemId: 10402,
      faction: "Both",
      rarity: "q2"
    },
  ];
  res.status(200).send(druidGear);
});

app.get('/huntergear', (req, res) => {
  const hunterGear = [
    {
      name: "Tunic of Westfall (A)",
      itemId: 2041,
      faction: "Alliance",
      rarity: "q3"
    },
    {
      name: "Seal of Wrynn (A)",
      itemId: 2933,
      faction: "Alliance",
      rarity: "q3"
    },
    {
      name: "Dusty Mining Gloves (A)",
      itemId: 2036,
      faction: "Alliance",
      rarity: "q2"
    },
    {
      name: "Pious Legwraps (A)",
      itemId: 10043,
      faction: "Alliance",
      rarity: "q2"
    },
    {
      name: "Totem of Infliction (A)",
      itemId: 1131,
      faction: "Alliance",
      rarity: "q2"
    },
    {
      name: "Minor Channeling Ring (A)",
      itemId: 1449,
      faction: "Alliance",
      rarity: "q2"
    },
    {
      name: "Seal of Sylvanas (H)",
      itemId: 6414,
      faction: "Horde",
      rarity: "q3"
   },
   {
      name: "Grizzled Boots (H)",
      itemId: 6335,
      faction: "Horde",
      rarity: "q2"
    },
    {
      name: 'Rugged Spaulders',
      itemId: 5254,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: "Screecher Belt (H)",
      itemId: 16987,
      faction: "Horde",
      rarity: "q2"
    },
    {
      name: "Jutebraid Gloves (H)",
      itemId: 10654,
      faction: "Horde",
      rarity: "q2"
    },

    {
      name: "Sacred Burial Trousers (H)",
      itemId: 6282,
      faction: "Horde",
      rarity: "q2"
    },
    {
      name: "Draftsman Boots",
      itemId: 6668,
      faction: "Both",
      rarity: "q2"
    },
    {
      name: "Blackened Defias Armor",
      itemId: 10399,
      faction: "Both",
      rarity: "q3"
    },
    {
      name: "Blackened Defias Belt (BoE)",
      itemId: 10403,
      faction: "Both",
      rarity: "q3"
    },
    {
      name: "Blackened Defias Boots (BoE)",
      itemId: 10402,
      faction: "Both",
      rarity: "q2"
    },
    {
      name: "Metalworking Gloves (BoE)",
      itemId: 1944,
      faction: "Both",
      rarity: "q2"
    },
    {
      name: "Woodworking Gloves (BoE)",
      itemId: 1945,
      faction: "Both",
      rarity: "q2"
    },
    {
      name: "Gloomshroud Armor (BoE)",
      itemId: 1489,
      faction: "Both",
      rarity: "q3"
    }
  ];

  res.status(200).send(hunterGear);
});

app.get('/shamangear', (req, res) => {
  const shamanGear = [
    {
      name: 'Tunic of Westfall (A)',
      itemId: 2041,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: 'Seal of Wrynn (A)',
      itemId: 2933,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: "Dusty Mining Gloves (A)",
      itemId: 2036,
      faction: "Alliance",
      rarity: "q2"
    },
    {
      name: 'Glacial Stone (A)',
      itemId: 5815,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Gutterblade (A)',
      itemId: 17046,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Pious Legwraps (A)',
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
      name: 'Everglow Lantern',
      itemId: 5323,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Arctic Buckler',
      itemId: 7002,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Minor Channeling Ring (A)',
      itemId: 1449,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Totem of Infliction (A)',
      itemId: 1131,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Seal of Sylvanas (H)',
      itemId: 6414,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Grizzled Boots (H)',
      itemId: 6335,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Ghostly Mantle (H)',
      itemId: 3324,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Rugged Spaulders',
      itemId: 5254,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Girdle of the Blindwatcher',
      itemId: 6319,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Inferno Robe (H)',
      itemId: 2231,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Jutebraid Gloves (H)',
      itemId: 10654,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Sacred Burial Trousers (H)',
      itemId: 6282,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Deadskull Shield (H)',
      itemId: 3761,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Screecher Belt (H)',
      itemId: 16987,
      faction: 'Horde',
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
      name: 'Woodworking Gloves (BoE)',
      itemId: 1945,
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
      name: 'Black Widow Band (BoE)',
      itemId: 6199,
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
      name: 'Talbar Mantle',
      itemId: 10657,
      faction: 'Both',
      rarity: 'q2',
    }
]
  res.status(200).send(shamanGear);
});

app.get('/warlockgear', (req, res) => {
  const warlockGear = [
    {
      name: 'Seal of Wrynn (A)',
      itemId: 2933,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: 'Pious Legwraps (A)',
      itemId: 10043,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Gravestone Scepter',
      itemId: 7001,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Staff of the Purifier',
      itemId: 5613,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Minor Channeling Ring (A)',
      itemId: 1449,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Seal of Sylvanas (H)',
      itemId: 6414,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Ghostly Mantle (H)',
      itemId: 3324,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Crescent Staff (H)',
      itemId: 6505,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Talbar Mantle',
      itemId: 10657,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Inferno Robe (H)',
      itemId: 2231,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Jutebraid Gloves (H)',
      itemId: 10654,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Sacred Burial Trousers (H)',
      itemId: 6282,
      faction: 'Horde',
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
  ];

  res.status(200).send(warlockGear);
});

app.get('/priestgear', (req, res) => {
  const priestGear = [
    {
      name: 'Seal of Wrynn (A)',
      itemId: 2933,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: 'Pious Legwraps (A)',
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
      name: 'Minor Channeling Ring (A)',
      itemId: 1449,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Seal of Sylvanas (H)',
      itemId: 6414,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Ghostly Mantle (H)',
      itemId: 3324,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Crescent Staff (H)',
      itemId: 6505,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Talbar Mantle',
      itemId: 10657,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Inferno Robe (H)',
      itemId: 2231,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Jutebraid Gloves (H)',
      itemId: 10654,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Sacred Burial Trousers (H)',
      itemId: 6282,
      faction: 'Horde',
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
  ];
  res.status(200).send(priestGear);
});

app.get('/paladingear', (req, res) => {
  const paladinGear = [
    {
      name: 'Chausses of Westfall (A)',
      itemId: 6087,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: 'Seal of Wrynn (A)',
      itemId: 2933,
      faction: 'Alliance',
      rarity: 'q3',
    },
    {
      name: `Tunneler's Boots (A)`,
      itemId: 2037,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Glacial Stone (A)',
      itemId: 5815,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: `Seraph's Strike (A)`,
      itemId: 5614,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Pious Legwraps (A)',
      itemId: 10043,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Beetle Clasps (A)',
      itemId: 7003,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Everglow Lantern',
      itemId: 5323,
      faction: 'Both',
      rarity: 'q2',
    },
    {
      name: 'Arctic Buckler',
      itemId: 7002,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Minor Channeling Ring (A)',
      itemId: 1449,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Malleable Chain Leggings (A)',
      itemId: 2545,
      faction: 'Alliance',
      rarity: 'q2',
    },
    {
      name: 'Seal of Sylvanas (H)',
      itemId: 6414,
      faction: 'Horde',
      rarity: 'q3',
    },
    {
      name: 'Ghostly Mantle (H)',
      itemId: 3324,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Steel-clasped Bracers (H)',
      itemId: 4534,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Rift Bracers',
      itemId: 5943,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Girdle of the Blindwatcher',
      itemId: 6319,
      faction: 'Both',
      rarity: 'q3',
    },
    {
      name: 'Deadskull Shield (H)',
      itemId: 3761,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Sacred Burial Trousers (H)',
      itemId: 6282,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Screecher Belt (H)',
      itemId: 16987,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Inferno Robe (H)',
      itemId: 2231,
      faction: 'Horde',
      rarity: 'q2',
    },
    {
      name: 'Jutebraid Gloves (H)',
      itemId: 10654,
      faction: 'Horde',
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
      name: 'Black Widow Band (BoE)',
      itemId: 6199,
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
      name: 'Rugged Spaulders',
      itemId: 5254,
      faction: 'Both',
      rarity: 'q3',
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
      name: 'Green Carapace Shield (BoE)',
      itemId: 2021,
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
      name: 'Talbar Mantle',
      itemId: 10657,
      faction: 'Both',
      rarity: 'q2',
    },
  ];
  res.status(200).send(paladinGear);
});
