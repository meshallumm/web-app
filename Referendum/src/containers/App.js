import React, { Component } from 'react';
import Login from '../components/Login.jsx';
import IdentNumber from '../components/IdentificationNum.jsx';
import Header from './Header.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    askMobile: true,
  };

  askIndetinfication = (passed) => {
    if (passed) {
      this.setState({ askMobile: false });
    }
  };
  render() {
    return (
      <div className='App-div'>
        <Header />
        {/* {this.state.askMobile ? (
          <Login legit={this.askIndetinfication} />
        ) : ( */}
        <IdentNumber />
        {/* // )} */}
      </div>
    );
  }
}

export default App;
