import React from 'react';
import './App.css';
import UpvotesList from './components/UpvotesList';
import { UpvoteProvider } from './components/UpvoteContext';

function App() {
  // add more upvotes when needed
  const upvotesIds = ['upvotes-list-1', 'upvotes-list-2', 'upvotes-list-3'];
    return (
      <div className="App">
      {upvotesIds.map((id) => (
          <UpvoteProvider key={id} storageKey={id}>
              <UpvotesList />
          </UpvoteProvider>
      ))}
  </div>
    );
}

export default App;
