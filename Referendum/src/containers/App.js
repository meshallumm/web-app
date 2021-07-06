import React, { useState } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useParams,
} from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp.jsx';
import Home from '../components/Home/Home.jsx';
import './App.css';

const App = () => {
  const [signUpFirst, setIfSignUp] = useState(true);
  const [userID, setUserID] = useState('');

  const welcomeToApp = () => {
    return (
      <Switch>
        <Redirect to={'/home'} />
        <Route path='/home' component={Home} />{' '}
      </Switch>
    );
  };

  const exitSignUpPage = () => {
    setIfSignUp(false);
    console.log('exitSignUpPage', signUpFirst);
  };

  return (
    <div className='App-div'>
      <BrowserRouter>
        <Switch>
          <Route>
            {signUpFirst ? (
              <SignUp homePage={exitSignUpPage} setUserNumber={setUserID} />
            ) : (
              <Switch>
                <Route path='/home'>
                  <Home userIDNumber={userID} />
                </Route>
                <Redirect to={'/home'} />
              </Switch>
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
