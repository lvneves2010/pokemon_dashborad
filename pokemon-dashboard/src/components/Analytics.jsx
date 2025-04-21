import {  useContext } from "react";
import { AnalyticsContext } from './AnalyticsContext';

function Analytics({ reload }) {
  const { analytics,} = useContext(AnalyticsContext)

  return (
    <div>
      <h2>Analytics de Acessos</h2>
      <ul>
        {Object.entries(analytics).map(([name, count]) => (
          <li key={name}>
            {name}: {count} acesso(s)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Analytics;
