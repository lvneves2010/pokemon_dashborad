import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import Analytics from './components/Analytics';
import { useState } from 'react';
import { AnalyticsProvider } from './components/AnalyticsContext';

function App() {

  const [reloadAnalytics, setReloadAnalytics] = useState(false);

  const triggerReload = () => setReloadAnalytics(prev => !prev);

  return (
    <div className="App">
      <h1>Dashboard de Pokémons</h1>
      <AnalyticsProvider>
        <PokemonDetails onAccess={triggerReload}  />
        <hr />
        <PokemonList />
        <hr />
        <Analytics reload={reloadAnalytics} />
      </AnalyticsProvider>
    </div>
  );
}

export default App;
