import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Renders', path: '/renders' },
  ];

  return (
    <div className='bg-black fixed top-0 left-0 w-full flex justify-between items-center h-24 px-4 text-white'>
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li key={item.id} className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul className={nav ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'}>
        {navItems.map(item => (
          <li key={item.id} className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'>
            <Link to={item.path} onClick={handleNav}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

