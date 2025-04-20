import { useState, useEffect } from "react";

function Analytics({ reload }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:4500/api/analytics")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, [reload]);

  return (
    <div>
      <h2>Analytics de Acessos</h2>
      <ul>
        {Array.isArray(data) &&
          data.map((entry, index) =>
            Object.entries(entry).map(([name, count]) => (
              <li key={`${name}-${index}`}>
                {name}: {count} acesso(s)
              </li>
            ))
          )}
      </ul>
    </div>
  );
}

export default Analytics;
