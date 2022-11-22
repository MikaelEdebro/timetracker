import { useEffect } from 'react';
import './App.css';

function App() {
  const addTime = () => {
    console.log('Add time');
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(import.meta.env.VITE_API_URL);
      const newData = await response.json();
      console.log({ newData });
    };

    fetchData();
  });
  return (
    <div className="App">
      <button onClick={(_) => addTime()}>Add random time slot</button>
    </div>
  );
}

export default App;
