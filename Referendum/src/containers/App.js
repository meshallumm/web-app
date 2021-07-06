import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp.jsx';
import CreatePass from '../components/SignUp/CreatePassword';

import './App.css';

const App = () => {
  const [signUpFirst, setIfSignUp] = useState(true);

  const exitSignUpPage = (pass) => {
    setIfSignUp(false);
  };

  return (
    <div className='App-div'>
      <Router>
        <CreatePass />
        {/* {signUpFirst ? <SignUp homePage={exitSignUpPage} /> : null} */}
      </Router>
    </div>
  );
};

export default App;
