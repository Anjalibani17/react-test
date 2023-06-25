import React, { useState } from 'react';
const AddUser = ({ addUser }) => {

  const [username, setUsername] = useState('');
  
const handleSubmit = (e) => {
      e.preventDefault();
      if (username.trim() === '') {
        return; 
      }
      addUser(username);
      setUsername('');
    };
   
  return (
    <>
    <h2> Add username here </h2>
      <input
        type="text"
       
        value={username}
      
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter user here"
      />
      <button onClick={handleSubmit}>Add User</button>
      {/* <div>
        <h2>User List:</h2>
        <ul>
          {displayValue.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div> */}
    </>
  );
};

export default AddUser;








