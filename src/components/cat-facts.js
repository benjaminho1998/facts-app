import React from 'react';
import axios from 'axios';

class Cat extends React.Component {
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
        {this.state.fact}
        <br></br>
        <button onClick={this.handleClick}>Give me a fact!</button>
      </div>
    );
  }
}

export default Cat;
