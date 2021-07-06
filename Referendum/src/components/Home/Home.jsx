import React from 'react';
import './Home.css';

const Home = ({ userIDNumber }) => {
  return (
    <div className='home-div'>
      <header className='home-header'>משאל עם</header>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ marginRight: '-90px', display: 'inline-block' }}>
          ...בקרוב
        </h2>
        <h3 className='id-style'>{userIDNumber}</h3>
      </div>
    </div>
  );
};

export default Home;
