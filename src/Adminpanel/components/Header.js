import React from 'react';
import user from '../../assets/images/man.png'

const Header = () => {
        
    return (
        <>
    <header className="bg-gray-800 text-white flex items-center justify-between h-16 px-4">
      <h1 className="text-xl font-semibold">Admin Panel</h1>
      <div className="flex items-center gap-5">
        Welcome, User Name
        <button
        //   onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
        <img src={user} alt='user' className='w-12 h-12 rounded-full'/>
      </div>
    </header>

    </>
  );
};

export default Header;
