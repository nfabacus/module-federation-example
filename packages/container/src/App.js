import React, { Suspense, useState, useEffect } from 'react';
import CRAApp from 'microFrontEnd3/CRAApp';
import { Button } from 'microFrontEnd4/Button';
import ErrorBoundary from './ErrorBoundary';

const MFEApp1 = React.lazy(() => import('microFrontEnd1/MFEApp1'));

function App() {
  const [ posts, setPosts ] = useState([]);
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(posts => {
        setPosts(posts)
      })
      .catch(err => {
        console.log(err)
      })
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div className="App">
      <h1>Host Container App</h1>
      <div>
        <h2>User And Posts: Mock Service Worker Test</h2>
        <div>
          <h2>User</h2>
          <p>{ user?.name }</p>
        </div>
        <div>
          <h3>Posts</h3>
          {
            posts?.filter((post, i) => i < 5).map(({ id, title }) => (
              <li key={id} style={{ listStyle: 'none' }}>
                <p>
                  { title }
                </p>
              </li>
            ))
          }
        </div>
      </div>
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
