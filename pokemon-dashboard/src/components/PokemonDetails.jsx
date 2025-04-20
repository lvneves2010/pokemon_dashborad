import { useState } from 'react';

function PokemonDetails({ onAccess }) {
  const [name, setName] = useState('');
  const [details, setDetails] = useState(null);

  const handleSearch = () => {
    fetch(`http://localhost:4500/api/pokemon/${name}`)
      .then(res => {
        if (!res.ok) throw new Error('Pokémon não encontrado');
        if (onAccess) onAccess();
        return res.json();
      })
      .then(data => setDetails(data))
      .catch(err => {
        setDetails(null);
        alert(err.message);
      });
  };

  return (
    <div>
      <h2>Buscar Detalhes de um Pokémon</h2>
      <input
        type="text"
        placeholder="Digite o nome ex: pikachu"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      {details && (
        <div>
          <h3>{details.name}</h3>
          <img src={details.sprites.front_default} alt={details.name} />
          <p>Altura: {details.height}</p>
          <p>Peso: {details.weight}</p>
          {/* mais detalhes se quiser */}
        </div>
      )}
    </div>
  );
}

export default PokemonDetails;
