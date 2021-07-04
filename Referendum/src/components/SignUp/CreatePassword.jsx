import React, { useEffect, useState, useRef } from 'react';
import './CreatePassword.css';

const CreatePass = (props) => {
  const textInput = useRef(null);
  const buttonFocus = useRef(null);
  const [passValue, setPassValue] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [passDontMatch, setPassMessage] = useState('');

  useEffect(() => {
    if (passValue !== confirmPass) {
      setPassMessage('הסיסמאות אינן שוות');
    } else {
      console.log('passwords even');
      setPassMessage('');
      buttonFocus.current.focus();
    }
  }, [confirmPass]);

  const onClickButton = () => {
    if (passValue.length === 4 && confirmPass.length === 0)
      textInput.current.focus();
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
          autoFocus
          type='password'
          maxLength='4'
          value={passValue}
          onChange={(event) => onChangeHandler(event)}
          placeholder='...הכנס סיסמה'
          className='passInput'
        />
        <br />
        <input
          type='password'
          maxLength='4'
          placeholder='סיסמה זהה שנית'
          className='passInput'
          ref={textInput}
          onChange={(e) => onSecondChangeHandler(e)}
        />{' '}
        <br />
        <div id='notSame'>{passDontMatch}</div>
        <br />
        <button id='continue' onClick={onClickButton} ref={buttonFocus}>
          המשך
        </button>
      </div>
    </div>
  );
};

export default CreatePass;
