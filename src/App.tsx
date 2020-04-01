import React from 'react';

import Homepage from './components/homepage/homepage.component';

import './App.scss';

function App() {
  return (
    <div className="App" data-test="appComponent">
     <Homepage/>
    </div>
  );
}

export default App;
