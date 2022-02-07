import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import './MessageConfirmation.css';

const MessageConfirmation = ({setMessageConfirmation}) => {

  return (
    <div className='messageConfirmation'>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{}}>
        סוגיות חדשות יש 
        <span style={{ marginLeft: '-295px', display: 'inline-block' , fontSize:30}}>כל הזמן</span>
        </h2>
        <h4><span>.</span>כדי לשלוח לך עדכונים על סוגיות חדשות, נבקש את אישורך לקבל התראות </h4>
        <br />
        <h6>בחירתך ניתנת לשינוי בכל עת במסך הגדרות האפליקציה</h6>
        <div className='btns'>
        <button onClick={()=>setMessageConfirmation(true)}> מאשר/ת</button>
        <button  onClick={()=>setMessageConfirmation(true)}> בפעם אחרת</button>
        </div>
      </div>
    </div>
  );
};

export default MessageConfirmation;
