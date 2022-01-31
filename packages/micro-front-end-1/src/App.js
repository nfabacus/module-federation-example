import React, { useEffect, useState } from 'react';
import Button from 'microFrontEnd2/Button';
import Box from 'microFrontEnd3/Box';

function App() {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/2')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className="App">
      <h2>Micro Front End App 1</h2>
      <div>
        <h3>User</h3>
        <p>{ user?.name }</p>
      </div>
      <Button text="I am a button from mfe app 2 (e.g. component library)" />
      <Box text="I am a Box from mfe app 3" />
    </div>
  );
}

export default App;
