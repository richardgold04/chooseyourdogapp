import React, { useState, useEffect } from 'react';
import './App.css';
import DogsFilter from "./components/DogsFilter"

function App() {

	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/api/dogs")
		.then((response) => response.json())
		.then((json) => setData(json))
	}, [])
	
  return (
    <div className="App">
      <DogsFilter dogs={data}/>
    </div>
  );
}

export default App;
