import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home = ({ userIDNumber, setIfSignUp }) => {
  const history = useHistory();
  const [userID, setUserID] = useState(userIDNumber);
  const onExitHandler = () => {
    localStorage.clear();
    setIfSignUp(false);
  };

  useEffect(() => {
    //setIfSignUp(false);
    if (userIDNumber.length) {
      localStorage.setItem('userID', JSON.stringify(userIDNumber));
      console.log('userIDNumber', userIDNumber);
    } else if (userIDNumber === '') {
      setUserID(JSON.parse(localStorage.getItem('userID')));
      console.log('userID', userID);
    }
  }, []);

  useEffect(() => {
    //window.history.replaceState(null, null, '/');
    // window.addEventListener('popstate', () => {
    //   history.go(1);
    // });
    // window.addEventListener('popstate', function () {
    //  history.pushState(null, document.title, window.location.href);
    //
    // window.onpopstate = function () {
    //   history.pushState(null, null, window.location.href);
    //   history.go(1);
    //   console.log('window.onpopstate = function');
    // };
  }, []);

  return (
    <div className='home-div'>
      <header className='home-header'>משאל עם</header>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ marginRight: '-90px', display: 'inline-block' }}>
          ...בקרוב
        </h2>
        <h3 className='id-style'>{userID}</h3>
        <br />
        <button onClick={onExitHandler}> יציאה</button>
      </div>
    </div>
  );
};

export default Home;
