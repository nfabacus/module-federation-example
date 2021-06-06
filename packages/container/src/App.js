import React from 'react';
import MFEApp1 from 'microFrontEnd1/MFEApp1';
import CRAApp from 'microFrontEnd3/CRAApp';
import { Button } from 'microFrontEnd4/Button';

function App() {
  return (
    <div className="App">
      <h1>Host Container App</h1>
      <Button primary label="Button from storybook app" size="large" />
      <div style={{ border: '2px solid blue', margin: '10px' }}>
        <MFEApp1 />
      </div>
      <div style={{ border: '2px solid orange', margin: '10px' }}>
        <CRAApp />
      </div>
    </div>
  );
}

export default App;
