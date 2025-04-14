import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Display = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await axios.get("http://localhost:3000/Employee");
        setData(res.data);
    };

    useEffect(() => {
        getData();
    }, []);


    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px'
    };

    const thStyle = {
        border: '1px solid black',
        padding: '10px',
        backgroundColor: '#f2f2f2',
        textAlign: 'left'
    };

    const tdStyle = {
        border: '1px solid black',
        padding: '10px',
        textAlign: 'left'
    };

    const headingStyle = {
        color: '#333',
        textAlign: 'center',
        marginTop: '20px'
    };

    const hrStyle = {
        height: '4px',
        backgroundColor: 'red',
        border: 'none',
        margin: '20px 0'
    };

    const ans = data.map((key, index) => {
        return (
            <tr key={index}>
                <td style={tdStyle}>{key.id}</td>
                <td style={tdStyle}>{key.name}</td>
                <td style={tdStyle}>{key.position}</td>
                <td style={tdStyle}>{key.department}</td>
                <td style={tdStyle}>{key.phone}</td>
                <td style={tdStyle}>{key.salary || "N/A"}</td>
            </tr>
        );
    });



    return (
        <>

            <h1 style={headingStyle}>Display Employee Data</h1>


            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Emp. Id</th>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Position</th>
                        <th style={thStyle}>Department</th>
                        <th style={thStyle}>Phone</th>
                        <th style={thStyle}>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                </tbody>
            </table>
        </>
    );
};

export default Display;
