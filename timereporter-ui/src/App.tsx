import { useEffect, useState } from 'react';

type Quote = {
  author: string;
  id: number;
  quote: string;
};

function App() {
  const [quotes, setQuotes] = useState<Quote[] | null>();

  const addTime = () => {
    console.log('Add time');
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(import.meta.env.VITE_API_URL);
      const newData = await response.json();
      console.log(newData);
      setQuotes(newData);
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={(_) => addTime()}>Add random time slot</button>
      <div>{quotes && quotes.map((c) => <div>{c.quote}</div>)}</div>
    </div>
  );
}

export default App;
