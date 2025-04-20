import { useEffect, useState } from 'react';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4500/api/pokemon')
      .then(res => res.json())
      .then(data => {
        setPokemonList(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Lista de Pokémons</h2>
      {pokemonList.length > 0 ? (
        <ul>
          {pokemonList.map((p, index) => (
            <li key={index}>{p.name}</li>
          ))}
        </ul>
      ) : (
        <p>Carregando Pokémons...</p>
      )}
    </div>
  );
}

export default PokemonList;
