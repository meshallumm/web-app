import React, { Component } from 'react';
import {
  // BrowserRouter as Router,
  // Redirect,
  Route,
  // Switch,
  // withRouter,
} from 'react-router-dom';
import Header from './Header.jsx';
import MobileNum from './MobileNum.jsx';
import IdentNumber from './IdentificationNum.jsx';
import CreatePass from './CreatePassword.jsx';
import './SignUp.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.signUpProcess = this.signUpProcess.bind(this);
    this.state = {
      stage: 1,
    };
  }

  signUpProcess() {
    console.log('signUpProcess');
    switch (this.state.stage) {
      case 2:
        return (
          <IdentNumber
            setPersonalID={this.props.setUserNumber}
            afterSubmit={() => this.setState({ stage: 3 })}
          />
        );
        break;
      case 3:
        return <CreatePass afterSubmit={() => this.setState({ stage: 4 })} />;
      case 4:
        return this.props.homePage();
        break;
      default:
        return <MobileNum afterSubmit={() => this.setState({ stage: 2 })} />;
    }
  }

  render() {
    return (
      <div className='signUp-div'>
        <Header />
        <div className='form-div'>
          <Route>{this.signUpProcess}</Route>
        </div>
      </div>
    );
  }
}

export default Login;
