
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Section from './component/Section';
import Second from './component/Second';
import Contact from './component/Contact';
import Demo from './component/Demo';



function App() {
  return (
    <div>

      <Router>
        <Header />
       
     <Switch>
          <Route path="/" component={Header} />
           {/* <Route path="/contact" component={Contact} /> */}
          <Route path="/Demo" component={Demo} />
        </Switch>
        <Section />
        <Second/>
    </Router>
    
      
    </div>
    
  );
}

export default App;
