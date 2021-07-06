import React, { useEffect, useState, useRef } from 'react';
import './CreatePassword.css';

const CreatePass = (props) => {
  const textInput = useRef(null);
  const buttonFocus = useRef(null);
  const [passValue, setPassValue] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [passDontMatch, setPassMessage] = useState('');

  const shouldUpdateMessage =
    passValue.length === 4 && confirmPass.length === 4;

  useEffect(() => {
    console.log('useEffect', confirmPass.length, shouldUpdateMessage);
    if (passValue !== confirmPass && shouldUpdateMessage) {
      setPassMessage('הסיסמאות אינן שוות');
    } else {
      console.log('reseting message - passwords less the 4 digits or are even');
      setPassMessage('');
    }
  }, [shouldUpdateMessage]);

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClickButton();
    }
  };

  const handleClickButton = () => {
    if (passValue.length === 4 && confirmPass.length === 0)
      textInput.current.focus();
    else if (passValue === confirmPass && shouldUpdateMessage) {
      props.afterSubmit();
    }
  };

  const onChangeHandler = (event) => {
    const legalPass = event.target.value.replace(/\D/g, '');
    setPassValue(legalPass);
  };

  const onSecondChangeHandler = (event) => {
    const legalPass = event.target.value.replace(/\D/g, '');
    setConfirmPass(legalPass);
  };

  return (
    <div className='form-div'>
      <div>
        {' '}
        <h1> הכנס סיסמה בעלת 4 ספרות </h1>
        <input
          value={passValue}
          autoFocus
          type='password'
          maxLength='4'
          onChange={(event) => onChangeHandler(event)}
          placeholder='...הכנס סיסמה'
          className='passInput'
        />
        <br />
        <input
          value={confirmPass}
          type='password'
          maxLength='4'
          placeholder='סיסמה זהה שנית'
          className='passInput'
          ref={textInput}
          onChange={(e) => onSecondChangeHandler(e)}
          onKeyPress={(e) => onKeyPress(e)}
        />{' '}
        <br />
        <div id='notSame'>{passDontMatch}</div>
        <br />
        <button id='continue' onClick={handleClickButton} ref={buttonFocus}>
          המשך
        </button>
      </div>
    </div>
  );
};

export default CreatePass;
