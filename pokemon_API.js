const e = require('express');
const app = e();
const router = e.Router();
const database = require('./data/memory');
const cors = require('cors');

const pokemonList = database.pokemon;

const activity = []



app.use(e.json());

app.use(cors());

app.use('/api', router);

const pokemon = router.get('/pokemon', (req, res) => {
    try {
        res.status(200).send(pokemonList);

    } catch (error) {
        res.status(500).send('error retrieving list of pokemon');
    }
});

const pokemonByName = router.get('/pokemon/:name', async (req, res) => {
    const { name } = req.params;
    let numberOfAccess = 0;
  
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
        headers: {
          "User-Agent": "John Doe (test@example.com)"
        }
      });
  
      if (!response.ok) {
        return res.status(404).send('Pokémon not found');
      }
  
      const details = await response.json();
  
      // Analytics
      const existing = activity.find(obj => obj.hasOwnProperty(name));
      if (existing) {
        existing[name] += 1;
        numberOfAccess = existing[name];
      } else {
        const newOBJ = { [name]: 1 };
        activity.push(newOBJ);
        numberOfAccess = 1;
      }
  
      console.log(`${name} foi acessado ${numberOfAccess} vezes`);
      return res.status(200).send(details);
  
    } catch (error) {
      res.status(500).send('error retrieving pokemon: ' + error.message);
    }
  });
  

const analytics = router.get('/analytics', (req, res) => {
    try {

        res.status(200).send(activity);

    } catch (error) {
        res.status(500).send('error retrieving list of analytics');
    }
});

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100', {
        headers : {
            "User-Agent": "John Doe (test@example.com)"
        }
    })
    .then(res => res.json())
    .then(data => {
        pokemonList.push(...data.results);
    })
    console.log(`server started at port ${PORT}`);
});

