import React, { useContext, useState, useRef } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const { addTransactions } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [value, setValue] = useState(0);
  const textInput = useRef(text);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (value === 0) {
      alert('Please Set Amount');
      return;
    } else {
      const newTransaction = {
        id: Date.now(),
        text,
        amount: Number(value),
      };
      addTransactions(newTransaction);
      setText('');
      setValue(0);
      textInput.current.focus();
    }
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={(event) => onSubmitHandler(event)}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            ref={textInput}
            type='text'
            placeholder='Enter text...'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};
