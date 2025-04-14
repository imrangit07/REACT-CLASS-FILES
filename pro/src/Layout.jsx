import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    const linkStyle = {
        margin: '0 10px',
        textDecoration: 'none',
        color: '#007bff',
        fontWeight: 'bold'
    };

    const navStyle = {
        textAlign: 'center',
        marginTop: '20px'
    };

    const footerStyle = {
        textAlign: 'center',
        marginTop: '40px',
        color: '#333'
    };

    const hrStyle = {
        height: '4px',
        backgroundColor: 'red',
        border: 'none',
        margin: '20px 0'
    };

    return (
        <>
            <div style={navStyle}>
                <Link to="home" style={linkStyle}>Home</Link> |
                <Link to="post" style={linkStyle}>Post</Link> |
                <Link to="display" style={linkStyle}>Display</Link> |
                <Link to="update" style={linkStyle}>Update</Link> |
                <Link to="search" style={linkStyle}>Search</Link> 
            </div>

            <Outlet />

            <hr style={hrStyle} />

            <h1 style={footerStyle}>This is footer</h1>
        </>
    );
};

export default Layout;
