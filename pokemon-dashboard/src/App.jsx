import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import Analytics from './components/Analytics';
import { useState } from 'react';

function App() {

  const [reloadAnalytics, setReloadAnalytics] = useState(false);

  const triggerReload = () => setReloadAnalytics(prev => !prev);

  return (
    <div className="App">
      <h1>Dashboard de Pokémons</h1>
      <PokemonDetails onAccess={triggerReload}  />
      <hr />
      <PokemonList />
      <hr />
      <Analytics reload={reloadAnalytics} />
    </div>
  );
}

export default App;
