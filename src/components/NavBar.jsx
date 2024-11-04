import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className=" bg-purple-400 p-4 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Shopping</Link>
        <Link to="/" className="text-xl font-bold hover:underline ">Home</Link>
      
        <Link to="/cart" className="text-lg bg-purple-800 py-2 px-4 rounded hover:bg-purple-900">
          Cart ({cartCount})
        </Link>
      </div>
      
      
    </nav>
  );
};

export default Navbar;


