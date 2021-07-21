import React, { Component } from 'react';
import { Redirect, Route, Switch, Router } from 'react-router-dom';
import Header from './Header.jsx';
import MobileNum from './MobileNum.jsx';
import IdentNumber from './IdentificationNum.jsx';
import CreatePass from './CreatePassword.jsx';
import './SignUp.css';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const pathArray = ['/signup/mobile', '/signup/idnumber', '/signup/password'];

class SignUp extends Component {
  constructor(props) {
    super(props);
    //this.signUpProcess = this.signUpProcess.bind(this);
    this.state = {
      stage: 1,
    };
  }

  render() {
    return (
      <div className='signUp-div'>
        <Header />
        {/* <Router history={history}> */}
        <div className='form-div'>
          <Redirect to='/signup/mobile' />
          <Switch>
            <Route path={'/signup/mobile'} component={MobileNum} />
            <Route path={'/signup/idnumber'}>
              <IdentNumber setPersonalID={this.props.setUserNumber} />
            </Route>
            <Route path={'/signup/password'}>
              <CreatePass
                setIfSignUp={this.props.setIfSignUp}
                pathsArray={pathArray}
              />
            </Route>
          </Switch>
        </div>
        {/* </Router> */}
      </div>
    );
  }
}

export default SignUp;
