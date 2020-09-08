import React from 'react';

import { Switch, Route } from "react-router-dom";
import Homepage from './components/homepage/homepage.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
// import Layout from './components/layout/layout.component';

import './App.scss';

function App() {

  return (
    <div className="App" data-test="appComponent">
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* <Route exact path="/assign" component={Layout} /> */}
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
