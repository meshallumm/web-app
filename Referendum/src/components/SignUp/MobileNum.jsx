import React, { Component } from 'react';
import './MobileNum.css';

class MobileNum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      mobileNum: '',
      errorMessage: '',
      askMobile: true,
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
    // Checking if the 'Enter' key was pressed
    console.log('entered Pressed');
    if (this.state.input !== '' && event.key === 'Enter') {
      console.log('calling checkMobileNum');
      this.checkMobileNum();
    }
  };

  checkMobileNum = () => {
    // This function validates legit mobile number
    const number = this.state.input;
    let num = /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;
    const isRight = num.test(number); // false
    if (isRight) {
      this.legitNum();
      this.setState({ errorMessage: '' });
    } else this.setState({ errorMessage: 'מספר לא חוקי' });
  };

  legitNum = async () => {
    // Showing the number in the page
    let mobileNum = [...this.state.input];
    mobileNum.splice(3, 0, '-');
    await this.setState({
      mobileNum,
    });
    setTimeout(
      function () {
        this.props.legit(1);
      }.bind(this),
      1000
    );
  };

  render() {
    return (
      <div>
        <h1>מספר הנייד שלך</h1>
        {/* <span>05</span> */}
        <input
          type='text'
          autoFocus
          autoComplete='off'
          placeholder='...הקלד את המספר'
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
    );
  }
}

export default MobileNum;
