import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const PostData = () => {
    const [input, setInput] = useState({});

    const handelFormInput = (e) => {
        const { name, value } = e.target;
        setInput(values => ({ ...values, [name]: value }));
    };

    const handelSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:3000/Employee", input);
        console.log(res.data);
        toast.success("Data Submitted Successfuly!")
    };

    const formStyle = {
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        width: '400px',
        margin: '40px auto',
        fontFamily: 'Arial, sans-serif'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '6px',
        fontWeight: 'bold',
        color: '#333'
    };

    const inputStyle = {
        marginBottom: '20px',
        padding: '10px',
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '6px',
        outline: 'none',
        fontSize: '14px'
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px',
        width: '100%'
    };

    const hrStyle = {
        margin: '30px 0',
        height: '4px',
        backgroundColor: 'red',
        border: 'none'
    };

    return (
        <>
            <form onSubmit={handelSubmit} style={formStyle}>
                <label htmlFor="empId" style={labelStyle}>Enter your EmpId:</label>
                <input
                    type="text"
                    id="empId"
                    name="id"
                    onChange={handelFormInput}
                    style={inputStyle}
                />

                <label htmlFor="name" style={labelStyle}>Enter your Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handelFormInput}
                    style={inputStyle}
                />

                <label htmlFor="position" style={labelStyle}>Enter your Position:</label>
                <input
                    type="text"
                    id="position"
                    name="position"
                    onChange={handelFormInput}
                    style={inputStyle}
                />

                <label htmlFor="department" style={labelStyle}>Enter your Department:</label>
                <input
                    type="text"
                    id="department"
                    name="department"
                    onChange={handelFormInput}
                    style={inputStyle}
                />

                <hr style={hrStyle} />

                <label htmlFor="phone" style={labelStyle}>Enter your Phone No:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={handelFormInput}
                    style={inputStyle}
                />

                <label htmlFor="salary" style={labelStyle}>Enter your Salary:</label>
                <input
                    type="text"
                    id="salary"
                    name="salary"
                    onChange={handelFormInput}
                    style={inputStyle}
                />

                <button type="submit" style={buttonStyle}>Submit</button>
            </form>
            <ToastContainer />
        </>
    );
};

export default PostData;
