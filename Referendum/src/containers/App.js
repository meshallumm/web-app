import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp.jsx';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInFirst: true,
    };
  }

  exitSignUpPage = (pass) => {
    this.setState({
      signInFirst: false,
    });
  };

  render() {
    return (
      <div className='App-div'>
        <Router>
          {this.state.signInFirst ? (
            <SignUp homePage={this.exitSignUpPage} />
          ) : null}
        </Router>
      </div>
    );
  }
}

export default App;
