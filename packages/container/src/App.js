import React, { Suspense } from 'react';
import CRAApp from 'microFrontEnd3/CRAApp';
import { Button } from 'microFrontEnd4/Button';
import ErrorBoundary from './ErrorBoundary';

const MFEApp1 = React.lazy(() => import('microFrontEnd1/MFEApp1'));

function App() {
  return (
    <div className="App">
      <h1>Host Container App</h1>
      <Button primary label="Button from storybook app" size="large" />
      <div style={{ border: '2px solid blue', margin: '10px' }}>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <MFEApp1 />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div style={{ border: '2px solid orange', margin: '10px' }}>
        <CRAApp />
      </div>
    </div>
  );
}

export default App;
