import React, { useState } from 'react';

const PageNotFound = () => {
  // State to track the username input
  const [username, setUsername] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the username to the server (replace 'http://localhost:4000' with your server endpoint)
      const response = await fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
        // credentials: "include"
      });

      // Handle the response from the server
      if (response.ok) {
        console.log(await response.json())
        // console.log('Username submitted successfully!');
      } else {
        // console.error('Failed to submit username.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PageNotFound;

