import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import './Tab.css';

class Tab extends React.Component {
  constructor(props) {
    super(props);

    //Fact to be displayed on the web app
    this.state = {
      'fact': ''
    };
  }

  //Refreshes fact when user clicks on another tab
  componentWillReceiveProps(nextProps) {
    if (nextProps.tab) {
      this.setState({
        'fact': ''
      });
    }
  }

  //Calls one of the three API's depending on what the user wants, and then sets the state variable
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

  //Sets up the fact UI
  render() {
    return (
      <div>
        <div className="fact">
          {this.state.fact}
        </div>
        <Button className="button" size="lg" variant="outline-dark" onClick={this.handleClick}>
          {this.props.tab === "kanye" ? 'Give me a quote!': 'Give me a fact!'}
        </Button>
      </div>
    );
  }
}

export default Tab;
