import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className=' space-x-8 text-2xl text-lime-900 mt-2'>
            <Link to="/">Home</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Header;