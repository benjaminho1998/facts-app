import React from 'react';
import './App.css';
import Tab from './components/Tab';
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
      'first': true //Used to update CSS appropriately and re-render component
    }
  }

  handleClick = () => {
    this.setState({'first': false});
  }


  //Sets up header UI
  render() {
    return (
      <Router className="route">
        <div className="container">
          <span className="header">
            <NavLink activeStyle={{ color: 'red' }} to='/cats' className={`link ${this.state.first ? "initial-page" : ""}`}>Cats</NavLink>
            <NavLink onClick={this.handleClick} activeStyle={{ color: 'red' }} to='/pandas' className="link-margin link">Pandas</NavLink>
            <NavLink onClick={this.handleClick} activeStyle={{ color: 'red' }} to='/kanye' className="link-margin link">Kanye</NavLink>
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
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
