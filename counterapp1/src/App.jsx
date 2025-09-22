import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(10); 


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.id); 
        setLimit(5);       
      })
      .catch((err) => console.error(err));
  }, []);


  const handleIncrement = () => {
    if (count < limit) {
      setCount(count + 1);
    } else {
      setCount(0); // reset back to 0
    }
  };


  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(limit); // reset back to max
    }
  };

  return (
    <div className="app">
      <h1>Counter App</h1>
      <p className="count">Count: {count}</p>
      <div className="btn-group">
        <button className="btn" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
