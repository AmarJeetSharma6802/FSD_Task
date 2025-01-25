import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/userDetails");
        const data = await res.json(); 
        setUser(data);  
      } catch (error) {
        console.log("fetch error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {
        user.map((item, index) => {  
          return (
            <ul key={index}>
              <li>{item.name}</li>
              <li>{item.email}</li> 
            </ul>
          );
        })
      }
    </>
  );
}

export default App;
