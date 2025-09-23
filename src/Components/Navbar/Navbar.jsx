import React from 'react';
import "./navbar.css"
import Currency from "../Images/Currency.png"
import Logo from "../../assets/logo.png"

const Navbar = ({currentBalance}) => {
    return (
        <div className="bg-white mt-10">
            <div className='navbar max-container'>
                <div className="navbar ">
                    <div className="navbar-start">
                    
                        <div className="dropdown">
                            <div tabIndex="0" role="button" className="btn bg-gray-200 border-none shadow-sm text-black lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="0"
                                className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-7 w-52 p-2 font-sora text-[rgba(19,19,19,0.7)] shadow">
                                <li className='mb-2 hover:bg-gray-300 rounded-sm hover:py-2 transition-all duration-100 ease-linear'><a>Home</a></li>
                                <li className='mb-2 hover:bg-gray-300 rounded-sm hover:py-2 transition-all duration-100 ease-linear'><a>Fixtures</a></li>
                                <li className='mb-2 hover:bg-gray-300 rounded-sm hover:py-2 transition-all duration-100 ease-linear'><a>Teams</a></li>
                                <li className='mb-2 hover:bg-gray-300 rounded-sm hover:py-2 transition-all duration-100 ease-linear'><a>Schedules</a></li>
                            </ul>
                        </div>

                        <a className="btn bg-transparent border-none shadow-none text-xl">
                            <img src={Logo} alt="" />
                        </a>

                        
                    </div>
                    <div className="navbar-end hidden gap-5 text-neutral-900 lg:flex">
                        <ul className="menu menu-horizontal text-[rgba(19,19,19,0.7)] font-sora px-0">
                            <li className='mr-2'><a>Home</a></li>
                            <li className='mr-2'><a>Fixtures</a></li>
                            <li className='mr-2'><a>Teams</a></li>
                            <li className='mr-2'><a>Schedules</a></li>

                        </ul>
                        <a className="btn borde-1 font-sora border-gray-200 bg-transparent shadow-none text-black px-7 text-md font-semibold rounded-lg">
                            <span>{currentBalance}</span> Coins
                            <img src={Currency} alt="" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;