import React from 'react';
import './App.css';
import axios from 'axios';
import Cat from './components/cat-facts';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'fact': ''
    };
  }

  handleClick = () => {
    axios.get("https://meowfacts.herokuapp.com/")
      .then(res => {
        this.setState({'fact': res.data.data[0]});
      })
  }

  render() {
    return (
      <div>
        <Cat />
      </div>
    );
  }
}

export default App;
