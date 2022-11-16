import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:3000");
      const newData = await response.json();
      console.log({ newData });
    };

    fetchData();
  });
  return <div className="App">testk</div>;
}

export default App;
