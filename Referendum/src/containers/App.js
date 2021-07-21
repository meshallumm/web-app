import React, { useState, useEffect, createContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp';
import CreatePass from '../components/SignUp/CreatePassword';
import Home from '../components/Home/Home';
import GuardedRoute from './GuardedRoute';
import GuestGuard from './GuestGuard';
import './App.css';
//localStorage.clear();

const useStateWithLocalStorage = () => {
  const [userSignedUp, setIfSignUp] = useState(
    JSON.parse(localStorage.getItem('signUpBool'))
  );
  useEffect(() => {
    localStorage.setItem('signUpBool', JSON.stringify(userSignedUp));
    console.log(
      'localStorage.getItem(signUpBool)',
      JSON.parse(localStorage.getItem('signUpBool'))
    );
  }, [userSignedUp]);

  return [userSignedUp, setIfSignUp];
};

export const booleanContext = createContext();

const App = () => {
  //const [userSignedUp, setIfSignUp] = useState(false);
  const [userID, setUserID] = useState('');
  const [userSignedUp, setIfSignUp] = useStateWithLocalStorage();

  return (
    <div className='App-div'>
      <Switch>
        <GuestGuard path='/signup' auth={userSignedUp}>
          <SignUp setUserNumber={setUserID} setIfSignUp={setIfSignUp} />
        </GuestGuard>
        <GuardedRoute path='/home' auth={userSignedUp}>
          <Home userIDNumber={userID} setIfSignUp={setIfSignUp} />
        </GuardedRoute>
        <Route excat path='/'>
          <Redirect to='/home' />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
