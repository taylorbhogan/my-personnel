import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('')


  useEffect(() => {
    const backendFetch = async () => {
      const res = await fetch('/api/')
      const data = await res.json();
      setMessage(data)
    }
    backendFetch();
  })

  return (
    <div className="App">
      <p>My Personnel App</p>
      <p>{message}</p>
    </div>
  );
}

export default App;
