import axios from 'axios';
import React, { useState } from 'react';

const Search = () => {
  const [searchId, setSearchId] = useState('');
  const [searchData, setSearchData] = useState(null);
  const [error, setError] = useState('');

  const handleSearchInput = (e) => {
    setSearchId(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/Employee/${searchId}`);
      setSearchData(res.data);
      setError('');
    } catch (err) {
      console.error(err);
      setSearchData(null);
      setError('Employee not found or server error.');
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>🔍 Search Employee</h1>

        <label htmlFor="empId" style={styles.label}>Employee ID</label>
        <input
          type="text"
          id="empId"
          name="id"
          value={searchId}
          onChange={handleSearchInput}
          placeholder="Enter ID Like, 101"
          style={styles.input}
        />

        <button type="submit" onClick={handleSearch} style={styles.button}>
          Search
        </button>

        <div style={styles.result}>
          {error && <p style={styles.error}>{error}</p>}
          {searchData && (
            <div style={styles.resultCard}>
              <h2 style={styles.resultTitle}>{searchData.name}</h2>
              <p><strong>Position:</strong> {searchData.position}</p>
              <p><strong>Department:</strong> {searchData.department}</p>
              <p><strong>Phone:</strong> {searchData.phone}</p>
              <p><strong>Salary:</strong> ₹{searchData.salary}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: '50vh',
    background: '#fff)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
  },
  card: {
    background: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    width: '100%',
    maxWidth: '450px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '25px',
    color: '#333',
    fontSize: '28px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    color: '#444',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginBottom: '20px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#2575fc',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  result: {
    marginTop: '25px',
  },
  resultCard: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid #e0e0e0',
  },
  resultTitle: {
    marginBottom: '10px',
    color: '#2575fc',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default Search;
