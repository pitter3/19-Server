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
