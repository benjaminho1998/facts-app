import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import './Tab.css';

class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'fact': ''
    };
  }

  handleClick = () => {
    axios.get(this.props.url)
      .then(res => {
        var result = '';
        if(this.props.tab === "cats") {
          result = res.data.data[0];
        } else if(this.props.tab === "kanye") {
          result = res.data.quote;
        } else {
          result = res.data.fact;
        }
        this.setState({'fact': result});
      })
  }

  render() {
    return (
      <div>
        <div className="fact">
          {this.state.fact}
        </div>
        <br></br>
    <Button className="button" size="lg" variant="outline-dark" onClick={this.handleClick}>
      {this.props.tab === "kanye" ? 'Give me a quote!': 'Give me a fact!'}
    </Button>
      </div>
    );
  }
}

export default Tab;
