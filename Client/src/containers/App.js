import React, { useState, useEffect, createContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp';
import CreatePass from '../components/SignUp/CreatePassword';
import Home from '../components/Home/Home';
import GuardedRoute from './GuardedRoute';
import GuestGuard from './GuestGuard';
import './App.css';
import MishaalAm from '../components/Home/Mishaal-Am'
import Petitions from '../components/Home/Petitions'
import Surveys from '../components/Home/Surveys'
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
          {/* <Petitions path='/home/Petitions' component={Petitions}/>
         
        <Route path='/home/Mishaal-Am' component={MishaalAm}/> */}
        
        {/* <Redirect to='/Home' />
          <Switch>
            <Route path={'/Home/Petitions'} component={Petitions} />
            <Route path={'/Home/Mishaal-Am'} component={MishaalAm}/> 
            <Route path={'/Home/Surveys'} component={Surveys}/>      
          </Switch>      */}
        </GuardedRoute>
         
        {/* <Route excat path='/'>
          <Redirect to='/home/Mishaal-Am' />
          </Route> 
          <Route excat path='/'>
          <Redirect to='/home/Petitions' />
        </Route> */}
        {/* <Route excat path='/'>
          <Redirect to='/home' />
          <Route path='/home/Petitions' component={Petitions}/>
          
          <Route path='/home/Mishaal-Am' component={MishaalAm}/>
        </Route> */}
      </Switch>
    </div>
  );
};

export default App;
