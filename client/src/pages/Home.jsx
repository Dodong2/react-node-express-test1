import { useState, useEffect } from 'react';

const Home = () => {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch("/api")
      .then(response => {
        if (!response.ok) {
          throw new Error('Error in fetch operation');
        }
        return response.json();
      })
      .then(data => {
        setBackendData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
    {backendData.user ? (<div>
      <p>{backendData.user.name}</p>
      <p>{backendData.user.email}</p>
      <p>{backendData.user.age}</p>
      </div>
    ) : (
      <p>Loading...</p>
    )}
    </>
  );
}

export default Home;