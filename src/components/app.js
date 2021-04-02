import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import '../style.scss';
import Nav from './nav';
import FallBack from './fallback';
import Contact from './contact';
import Home from './home';
import What from './what';
import Who from './who';
import Lessons from './lessons';
import Meditation from './meditation';

const App = (props) => {
  return (
    <Router>
      <div className="app-holder">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/who" component={Who} />
          <Route path="/what" component={What} />
          <Route path="/lessons" component={Lessons} />
          <Route path="/meditation" component={Meditation} />
          <Route path="/contact" component={Contact} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
