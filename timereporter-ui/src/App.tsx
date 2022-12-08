import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

type Quote = {
  author: string;
  id: number;
  quote: string;
};

function App() {
  const { isLoading, error, data } = useQuery<Quote[], Error>('repoData', () =>
    fetch(import.meta.env.VITE_API_URL).then((res) => res.json()),
  );

  if (isLoading) return <>Loading...</>;

  if (error) return <>'An error has occurred: ' + error.message</>;

  const addTime = () => {
    console.log('Add time');
  };

  return (
    <div>
      {data && data.map((quote) => <div key={quote.id}>{quote.quote}</div>)}
      <button className="border p-2" onClick={() => addTime()}>
        Add time slot
      </button>
    </div>
  );
}

export default App;
