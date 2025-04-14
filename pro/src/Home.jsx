import React from 'react';

const Home = () => {
    const containerStyle = {
        textAlign: 'center',
        padding: '40px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        minHeight: '100vh'
    };

    const headingStyle = {
        fontSize: '36px',
        color: '#333',
        marginBottom: '20px'
    };

    

    return (
        <>
            <div style={containerStyle}>
                <h1 style={headingStyle}>Welcome to the Employee Management Portal</h1>
            </div>
        </>
    );
};

export default Home;
