import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      mobileNum: '',
      number: '',
      errorMessage: document.getElementById('error'),
    };
  }

  componentDidMount() {
    const submit = document.getElementById('mySubmit');
    submit.addEventListener('keyup', this.enterPressed);
  }

  onChangeHandler = (e) => {
    //This function allowing only digits to be enterd in the input field
    this.setState({
      input: e.target.value.replace(/\D/g, ''),
    });
    if (e.target.value === '') this.setState({ errorMessage: '' });
  };

  enterPressed = (event) => {
    if (this.state.input !== '') {
      // Checking if the 'Enter' key was pressed
      console.log('entered Pressed');
      if (event.key === 'Enter') {
        console.log('calling checkMobileNum');
        this.checkMobileNum();
      }
    }
  };

  checkMobileNum = () => {
    // This function validates legit mobile number
    this.setState({ number: document.getElementById('mySubmit').value });
    let num = /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;
    const isRight = num.test(this.state.number); // false
    if (isRight) {
      this.legitNum();
      this.setState({ errorMessage: '' });
    } else this.setState({ errorMessage: 'מספר לא חוקי' });
  };

  legitNum = () => {
    // Showing the number in the page
    let mobileNum = [...this.state.number];
    mobileNum.splice(3, 0, '-');
    this.setState({
      mobileNum,
    });
  };

  render() {
    return (
      <div className='Login-div'>
        <header className='Login-header'>הרשמה למשעל עם</header>
        <hr />
        <div className='Login-h1'>
          <h1>מספר הנייד שלך</h1>
          <input
            type='text'
            placeholder='...הקלד כאן'
            value={this.state.input}
            id='mySubmit'
            onChange={this.onChangeHandler.bind(this)}
          />
          <button onClick={this.checkMobileNum} style={{ width: '120px' }}>
            {' '}
            הירשם{' '}
          </button>
          <div id='error'>{this.state.errorMessage}</div>
          <p className='mobile-num' id='mobile'>
            {this.state.mobileNum}
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
