import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div >
            <ul className=' text-black flex bg-white p-8 text-xl'>
                <Link to="/" className='mr-8 hover:text-red-500 transform hover:scale-110'>Home</Link>
                <Link to="/about" className='mr-8 hover:text-red-500 transform hover:scale-110'>About</Link>
                <Link to="/products" className='mr-8 hover:text-red-500 transform hover:scale-110 '>Products</Link>
                <Link to="/features" className='mr-8 hover:text-red-500 transform hover:scale-110'>Features</Link>
            </ul>
        </div >
    )
}

export default Navbar