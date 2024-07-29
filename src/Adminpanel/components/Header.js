import React, { useState } from 'react';
import user from '../../assets/images/man.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        // Add logout functionality here
        console.log('Logout clicked');
    };

    return (
        <>
            <header className="bg-gray-800 text-white flex items-center justify-between h-16 px-4">
                <h1 className="text-xl font-semibold">Admin Panel</h1>
                <div className="relative flex items-center gap-5">
                    Welcome, Admin
                    <div className="relative">
                        <img
                            src={user}
                            alt='user'
                            className='w-12 h-12 p-2 rounded-full cursor-pointer'
                            onClick={handleToggleDropdown}
                        />
                        {isDropdownOpen && (
                            <div className="absolute flex flex-col right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
                                <Link
                                 to="/admin/profile"
                                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => console.log('Profile clicked')}
                                >
                                    Profile
                                </Link>
                                <Link
                                   to="/login"
                                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                                    // className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
