import { createContext, useState, useEffect } from 'react';

export const AnalyticsContext = createContext();

export function AnalyticsProvider({ children }) {
  const [analytics, setAnalytics] = useState({});

  const fetchAnalytics = () => {
    fetch('http://localhost:4500/api/analytics')
      .then(res => res.json())
      .then(data => {
        const combined = data.reduce((acc, curr) => ({ ...acc, ...curr }), {});
        setAnalytics(combined);
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchAnalytics();
  });

  return (
    <AnalyticsContext.Provider value={{ analytics, fetchAnalytics }}>
      {children}
    </AnalyticsContext.Provider>
  );
}
