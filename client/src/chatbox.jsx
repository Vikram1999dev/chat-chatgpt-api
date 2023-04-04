/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
const Chatbox = () => {
  const [message, setMessage] = useState('');
  const [question, setQuestion] = useState('');
  const [recievedMessage, setRecievedMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    //when submitting,the recieved message should be initialized to
    //null
    setQuestion(message);
    setRecievedMessage('');
    const res = await axios.post('http://localhost:3001/recieve', { message });
    setRecievedMessage([res.data]);
    setMessage('');
  };

  return (
    <div>
      <form action=''>
        <input
          placeholder='Ask me anything...'
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <br />
      <br />
      <div>
        {recievedMessage ? (
          <div>
            <h3>{question}</h3>
            <p>{recievedMessage}</p>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Chatbox;
