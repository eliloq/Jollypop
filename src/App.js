import React from 'react';
import "./App.css"
import Footer from "./assets/components/Footer.jsx";
import Home from "./assets/components/landingPage/Home.jsx";
import {Link, Outlet} from "react-router-dom";
import {FiSearch} from "react-icons/fi";
import {LuShoppingBag} from "react-icons/lu";
import logo from "./assets/images/logo.png"

const App = () => {
    return (
        <div>
            <div className="w-full h-[75px] bg-[#000102] flex items-center justify-between">
                <div className="h-full flex items-center grow-[2] pl-2.5">
                    <img src={logo} alt="Jollypop Logo" className="w-[80px] cursor-pointer"/>
                </div>
                <div className="h-full flex items-center justify-center grow-[3] md:gap-16 sm:gap-8 gap-5">
                    <Link to="/"
                          className="links text-white text-[16.5px] transition-all hover:tracking-wider hover:scale-110">Home</Link>
                    <Link to="/about_us"
                          className="links text-white text-[16.5px] transition-all hover:tracking-wider hover:scale-110">About
                        Us</Link>
                    <Link to="/contact_us"
                          className="links text-white text-[16.5px] transition-all hover:tracking-wider hover:scale-110 ">Contact
                        Us</Link>
                </div>
                <div className="h-full flex items-center justify-evenly grow-[1]">
                    <FiSearch className="text-white text-[20px] cursor-pointer transition-all hover:scale-110"/>
                    <LuShoppingBag
                        className="text-white text-[20px] cursor-pointer transition-all hover:scale-110"/>
                </div>

            </div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default App;
