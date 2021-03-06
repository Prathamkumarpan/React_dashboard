import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './component/Home'; 
import Dashboard from './component/Dashboard';
import Navbar from './component/Navbar';
import './style.css';
import Mycourses from './component/Mycourses';
import Achievements from './component/Achievements';
import Forum from './component/Forum';
import NotFound from './component/NotFound';

function App() {
  return (
    <>
    <main>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/mycourses" component={Mycourses}/>
      <Route exact path="/achievements" component={Achievements}/>
      <Route exact path="/forum" component={Forum}/>
      <Route component={NotFound}/>
    </Switch>
    </main>
    </>
  );
}

export default App;
