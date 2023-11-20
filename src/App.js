import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import QuoteMachine from './components/inc/QuoteMachine';

const App = () => {
  return (
    <div className="app">
      <Router>
        <QuoteMachine />
      </Router>
      
    </div>
  );
};

export default App;
