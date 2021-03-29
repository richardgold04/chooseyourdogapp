import React, { useState, useEffect } from 'react';
import './App.css';
import Dog from "./components/Dog"

function App() {

	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/api/dogs")
		.then((response) => response.json())
		.then((json) => setData(json))
	}, [])
	
  return (
    <div className="App">
      <Dog dogs={data}/>
    </div>
  );
}

export default App;
