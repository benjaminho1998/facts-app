import React from 'react';
import './App.css';
import Tab from './components/Tab';
import Test from './components/Test';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'refresh': false
    }
  }

  handleClick = () => {
    this.setState({'refresh': true})
  }

  render() {
    return (
      <Router className="route">
        <div className="container">
          <span className="header">
            <NavLink activeStyle={{ color: 'red' }} to="/cats" className="link">Cats</NavLink>
            <NavLink activeStyle={{ color: 'red' }} to="/pandas" className="link-margin link">Pandas</NavLink>
            <NavLink activeStyle={{ color: 'red' }} to="/kanye" className="link-margin link">Kanye</NavLink>
            <NavLink activeStyle={{ color: 'red' }} to="/kl" className="link-margin link">Test</NavLink>
          </span>
          <div className="container-2">
          <Switch>
            <Route exact path="/">
              <Tab tab="cats" url="https://meowfacts.herokuapp.com/"/>
            </Route>
            <Route path="/cats">
              <Tab tab="cats" url="https://meowfacts.herokuapp.com/"/>
            </Route>
            <Route path="/kanye">
              <Tab tab="kanye" url="https://api.kanye.rest"/>
            </Route>
            <Route path="/pandas">
              <Tab tab="pandas" url="/pandas"/>
            </Route>
            <Route>
              <Test/>
            </Route>
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
