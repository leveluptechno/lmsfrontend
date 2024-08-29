import React from 'react';
import image from '../../assets/images/man.png';
import { Link } from "react-router-dom";
import { HiOutlineBell, HiOutlineChatAlt } from 'react-icons/hi';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import classNames from 'classnames';

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex bg-gray-300 sm:h-16 min-h-[60px] px-7 justify-start sm:justify-between items-center gap-16 sm:gap-14">
      {/* Admin Panel Title - adjusts based on screen size */}
      <Link to="/admin">
      <h1 className="font-bold sm:text-sm text-xs md:text-l ml-6  lg:text-xl font-serif whitespace-nowrap">Admin Panel</h1>
      </Link>
      
      {/* Welcome message - hides on smaller screens */}
      <div className="hidden sm:block">
        <p className="font-semibold sm:text-sm md:text-sm lg:text-xl font-serif">Welcome, Admin</p>
      </div>
      
      {/* Icons and User Profile Menu */}
      <div className="flex items-center gap-0 ">
        {/* Chat Icon */}
        <Popover className="relative">
          {({ open }) => (
            <>
              <PopoverButton
                className={classNames(
                  open && 'bg-gray-100',
                  'p-1.5  rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                )}
              >
                <HiOutlineChatAlt fontSize={24} />
              </PopoverButton>

              <PopoverPanel className="absolute left-1/4 transform -translate-x-48 sm:-translate-x-0 sm:right-0 sm:left-auto mt-2 w-64 bg-gray-200 rounded-lg shadow-lg z-10">
                <div className="px-4 py-3">
                  <strong className="text-gray-700 font-medium">Messages</strong>
                  <div className="mt-2">
                    <Link to="" className="block text-gray-600 py-2 px-1 hover:bg-gray-100 rounded-md">Message 1</Link>
                    <Link to="" className="block text-gray-600 py-2 px-1 hover:bg-gray-100 rounded-md">Message 2</Link>
                  </div>
                </div>
              </PopoverPanel>
            </>
          )}
        </Popover>

        {/* Notification Icon */}
        <Popover className="relative">
          {({ open }) => (
            <>
              <PopoverButton
                className={classNames(
                  open && 'bg-gray-100',
                  'p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                )}
              >
                <HiOutlineBell fontSize={24} />
              </PopoverButton>

              <PopoverPanel className="absolute right-0 mt-2 w-64 bg-gray-200 rounded-lg shadow-lg z-10">
                <div className="px-4 py-3">
                  <strong className="text-gray-700 font-medium">Notifications</strong>
                  <div className="mt-2">
                    <Link to="" className="block text-gray-600 py-2 px-1 hover:bg-gray-100 rounded-md">Notification 1</Link>
                    <Link to="" className="block text-gray-600 py-2 px-1 hover:bg-gray-100 rounded-md">Notification 2</Link>
                  </div>
                </div>
              </PopoverPanel>
            </>
          )}
        </Popover>

        {/* User Profile Menu */}
        <Menu>
          <MenuButton className="relative inline-flex items-center">
            <span className="sr-only">Open user menu</span>
            <div
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <span className="sr-only">Admin</span>
            </div>
            <ChevronDownIcon className="h-5 w-5 ml-1 mr-3 text-gray-700" />
          </MenuButton>

          <MenuItems className="origin-top-right absolute right-5 mt-32 w-48 rounded-lg shadow-md bg-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <MenuItem>
              {({ active }) => (
                <div
                  onClick={() => navigate('/admin/profile')}
                  className={classNames(
                    active && 'bg-gray-100',
                    'px-4 py-2 text-gray-700 cursor-pointer rounded-md'
                  )}
                >
                  Profile
                </div>
              )}
            </MenuItem>

            <MenuItem>
              {({ active }) => (
                <div
                  onClick={() => navigate('/')}
                  className={classNames(
                    active && 'bg-gray-100',
                    'px-4 py-2 text-gray-700 cursor-pointer rounded-md'
                  )}
                >
                  Log out
                </div>
              )}
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}
