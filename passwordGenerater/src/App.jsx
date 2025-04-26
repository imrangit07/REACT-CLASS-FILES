import React, { useCallback, useEffect, useState } from 'react';

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);

  const generatePassword = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = '';

    if (number) str += "1234567890";
    if (specialChar) str += "!@#$%&*";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, specialChar]);

  useEffect(() => {
    generatePassword();
  }, [length, number, specialChar, generatePassword]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ marginBottom: '20px', color: '#333' }}>Password Generator</h1>

      <input
        type="text"
        value={password}
        readOnly
        placeholder="Password"
        style={{
          padding: '10px',
          width: '300px',
          marginBottom: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />

      <button
        style={{
          padding: '10px 20px',
          marginBottom: '20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onClick={() => {
          navigator.clipboard.writeText(password);
          alert("Password Copied!");
        }}
      >
        Copy
      </button>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="range"
          max={20}
          min={6}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          style={{ width: '300px' }}
        />
        <label style={{ marginLeft: '10px' }}>Range: {length}</label>
      </div>

      <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
        <label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(prev => !prev)}
          />
          Include Numbers
        </label>

        <label>
          <input
            type="checkbox"
            checked={specialChar}
            onChange={() => setSpecialChar(prev => !prev)}
          />
          Include Special Characters
        </label>
      </div>
    </div>
  );
}

export default App;
