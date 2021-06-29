import React, { useState, useEffect, useCallback } from 'react';
import './IdentificationNum.css';

const IdentNumber = () => {
  const [idNumber, setNumber] = useState();
  const [legitlId, setID] = useState('');
  const [errorMessage, setMessage] = useState();
  const [activeInput, setActiveBool] = useState();

  useEffect(() => {
    console.log('useEffect ' + idNumber);
    if (idNumber === '') {
      console.log('Deleting message');
      setMessage('');
      return;
    }
    console.log(activeInput);
    if (activeInput) {
      checkID();
    }
  }, [idNumber]);

  const onChangeHandler = (event) => {
    //This function allowing only digits to be enterd in the input field
    const isDigits = event.target.value.replace(/\D/g, '');
    setNumber(isDigits);
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('idNumber.length ' + idNumber.length);
      checkID();
    }
  };

  const checkID = () => {
    if (!activeInput) {
      setActiveBool(true);
    }
    if (!idNumber) {
      setID('');
      return;
    }
    console.log('checkID ', activeInput);
    if (idNumber.length > 0 && idNumber.length < 9) {
      setMessage('מספר ת.ז לא חוקי');
    } else if (idNumber.length === 9) {
      if (is_israeli_id_number(idNumber)) {
        setID(idNumber);
        setMessage('');
      }
    }
  };

  const is_israeli_id_number = (id) => {
    console.log('is_israeli_id_number ' + id);
    console.log(id.length);
    id = id.length < 9 ? ('00000000' + id).slice(-9) : id;
    return (
      Array.from(id, Number).reduce((counter, digit, i) => {
        const step = digit * ((i % 2) + 1);
        return counter + (step > 9 ? step - 9 : step);
      }) %
        10 ===
      0
    );
  };

  return (
    <div className='form-div'>
      <h1>תעודת הזהות שלך</h1>
      <input
        className='inputStyle'
        // pattern='[0-9]{9}'
        maxLength='9'
        type='text'
        autoComplete='off'
        value={idNumber}
        id='idNum'
        onChange={(event) => onChangeHandler(event)}
        onKeyPress={(event) => onKeyPress(event)}
      />{' '}
      <br /> <button onClick={checkID}> המשך </button>
      <div id='error'>{errorMessage}</div>
      <br /> <p className='revealId'> {legitlId}</p>
    </div>
  );
};

export default IdentNumber;
