import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../context';
import { CustomButton } from './';
import { logo, menu, search, thirdweb } from '../assets';
import { navlinks } from '../constants';

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex md:flex-row flex-col-reverse justify-between items-center">
        <div className="flex md:flex-1 flex-row max-w-md py-2 pl-4 pr-2 h-12 rounded-full bg-gray-900">
          <input
            type="text"
            placeholder="Search for campaigns"
            className="flex w-full font-epilogue text-sm placeholder:text-gray-400 text-white bg-transparent outline-none"
          />

          <div className="w-12 h-full rounded-full bg-green-500 flex justify-center items-center cursor-pointer">
            <img src={search} alt="search" className="w-6 h-6 object-contain" />
          </div>
        </div>

        <div className="flex md:justify-end items-center">
          <div className="hidden md:flex md:ml-4">
            <CustomButton
              btnType="button"
              title={address ? 'Create a campaign' : 'Connect'}
              styles={`bg-${address ? 'green-500' : 'purple-500'} text-white`}
              handleClick={() => {
                if (address) navigate('create-campaign');
                else connect();
              }}
            />
          </div>

          <Link to="/profile">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex justify-center items-center cursor-pointer ml-2">
              <img src={thirdweb} alt="user" className="w-6 h-6 object-contain" />
            </div>
          </Link>
        </div>

        {/* Small screen navigation */}
        <div className="md:hidden flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex justify-center items-center cursor-pointer">
            <img src={logo} alt="user" className="w-6 h-6 object-contain" />
          </div>

          <img
            src={menu}
            alt="menu"
            className="w-8 h-8 object-contain cursor-pointer ml-4"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />
        </div>
      </div>

      {/* Drawer for small screens */}
      <div
        className={`md:hidden bg-gray-800 shadow-lg py-2 ${!toggleDrawer ? 'hidden' : ''}`}
      >
        <ul className="flex flex-col items-center space-y-2">
          {navlinks.map((link) => (
            <li
              key={link.name}
              className={`flex p-2 ${isActive === link.name && 'bg-gray-900'}`}
              onClick={() => {
                setIsActive(link.name);
                setToggleDrawer(false);
                navigate(link.link);
              }}
            >
              <img
                src={link.imgUrl}
                alt={link.name}
                className={`w-6 h-6 object-contain ${isActive === link.name ? '' : 'grayscale'}`}
              />
              <p
                className={`ml-2 font-epilogue font-semibold text-xs ${
                  isActive === link.name ? 'text-green-500' : 'text-gray-400'
                }`}
              >
                {link.name}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-4">
          <CustomButton
            btnType="button"
            title={address ? 'Create a campaign' : 'Connect'}
            styles={`bg-${address ? 'green-500' : 'purple-500'} text-white`}
            handleClick={() => {
              if (address) navigate('create-campaign');
              else connect();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
