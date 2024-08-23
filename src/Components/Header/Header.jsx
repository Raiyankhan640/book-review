import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const NavLinkItem = ({ to, children }) => (
        <NavLink
            to={to}
            className={({ isActive, isPending, isTransitioning }) =>
                [
                    isPending ? "pending" : "",
                    isActive ? "active" : "",
                    isTransitioning ? "transitioning" : "",
                ].join(" ")
            }
        >
            {children}
        </NavLink>
    );


    const links = (
        <>
            <li className='font-bold' ><NavLinkItem to='/'>Home</NavLinkItem></li>
            <li className='font-bold'><NavLinkItem to='/listedBooks'>Listed Books</NavLinkItem></li>
            <li className='font-bold'><NavLinkItem to='/pagesToRead'>Pages To Read</NavLinkItem></li>
        </>
    );

    return (
        <div className='container mx-auto mb-12 mt-6'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-extrabold">Reza's Books</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <button type="button" className='btn custom-button bg-green-600 hover:bg-green-900 border-none text-white'>Sign Up</button>
                    <button type="button" className='btn custom-button bg-violet-700 hover:bg-violet-900 border-none text-white'>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
