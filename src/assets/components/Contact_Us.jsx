import React from 'react';
import {FaLocationDot} from "react-icons/fa6";
import {FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {FaInstagram} from "react-icons/fa";
import {FiTwitter} from "react-icons/fi";
import {FiFacebook} from "react-icons/fi";
import {PiTelegramLogoLight} from "react-icons/pi";
import {FiYoutube} from "react-icons/fi";


const ContactUs = () => {
    return (
        <div className="py-16 flex flex-col justify-center items-center bg-[url('./assets/images/vector2.png')] bg-no-repeat bg-bottom
       ">
            <div className="my-6 w-full flex flex-col justify-center items-center">
                <span className="md:text-[18px] text-[15px] text-black/80 tracking-widest">JOLLYPOP GROUP</span>
                <h1 className="md:text-[50px]  text-[35px] tracking-widest">CONTACT US</h1>
            </div>

            <div
                className="xl:w-[1200px] lg:w-[950px] w-[95%] md:h-[500px] h-[1000px] flex md:flex-row flex-col justify-center items-center bg-gray-100 shadow-lg rounded-[5px]">
                <div className="md:w-[50%] w-[85%] h-full flex flex-col pt-10 items-center gap-5">
                    <h5 className="tracking-widest flex flex-col items-center">INFORMATION FORM
                        <div className="w-[100px] h-[1.5px] bg-blue-400"></div>
                    </h5>
                    <input type="text" placeholder="Name" className="md:w-[75%] w-[95%] px-4 py-2 shadow text-[15px]"/>
                    <input type="text" placeholder="Email" className="md:w-[75%] w-[95%] px-4 py-2 shadow text-[15px]"/>
                    <input type="text" placeholder="Phone" className="md:w-[75%] w-[95%] px-4 py-2 shadow text-[15px]"/>
                    <textarea placeholder="Message"
                              className="md:w-[75%] w-[95%] h-[150px] px-4 py-2 shadow text-[15px]"/>
                    <input type="submit" value="SEND"
                           className="w-[250px] h-[40px] text-white text-[15px] bg-blue-400 rounded-[30px] cursor-pointer hover:shadow-md"/>
                </div>

                <div className="md:w-[50%] w-[85%] h-full  flex flex-col pt-10
                 items-center gap-5">
                    <h5 className="tracking-widest flex flex-col items-center">CONTACT DETAILS
                        <div className="w-[100px] h-[1.5px] bg-blue-400"></div>
                    </h5>

                    <div className=" w-[95%] flex flex-col items-start gap-5">

                        <div className=" flex justify-center items-center gap-2.5">
                            <div
                                className="bg-blue-400 w-[45px] h-[45px] rounded-[50%] flex justify-center items-center">
                                <FaLocationDot className="text-[20px] text-white"/>
                            </div>
                            <div className=" flex flex-col  ">
                                <span className="text-[17px] font-semibold		">Address:</span>
                                <span className="text-[15px]">2025 M Street, NW, Washington, DC, 20036. 2.</span>
                            </div>
                        </div>


                        <div className=" flex justify-center items-center gap-2.5">
                            <div
                                className="bg-blue-400 w-[45px] h-[45px] rounded-[50%] flex justify-center items-center">
                                <FaPhoneAlt className="text-[20px] text-white"/>
                            </div>
                            <div className=" flex flex-col ">
                                <span className="text-[17px] font-semibold		">Phone:</span>
                                <span className="text-[15px]">(908) 686-1200</span>
                            </div>
                        </div>


                        <div className=" flex justify-center items-center gap-2.5">
                            <div
                                className="bg-blue-400 w-[45px] h-[45px]  rounded-[50%] flex justify-center items-center">
                                <MdEmail className="text-[20px] text-white"/>
                            </div>
                            <div className=" flex flex-col ">
                                <span
                                    className="text-[17px] font-semibold		">Email:</span>
                                <span className="text-[15px]">jollypopteam@gmail.com</span>
                            </div>
                        </div>

                    </div>
                    <div className="w-[90%] bg-blue-400 h-[1.5px]"></div>

                    <div className=" w-[90%] flex justify-center gap-3 items-center">


                        <div
                            className="w-[45px] h-[45px] bg-white rounded-[50%] flex justify-center items-center shadow-md transition-all duration-700 cursor-pointer hover:bg-blue-400 hover:rotate-[360deg] group">
                            <a href="#">
                                <FaInstagram className="text-[18.5px] text-blue-500 group-hover:text-white"/>
                            </a>

                        </div>

                        <div
                            className="w-[45px] h-[45px] bg-white rounded-[50%] flex justify-center items-center shadow-md transition-all duration-700 cursor-pointer hover:bg-blue-400 hover:rotate-[360deg] group">
                            <a href="#">
                                <FiTwitter className="text-[18.5px] text-blue-500 group-hover:text-white"/>
                            </a>

                        </div>

                        <div
                            className="w-[45px] h-[45px] bg-white rounded-[50%] flex justify-center items-center shadow-md transition-all duration-700 cursor-pointer hover:bg-blue-400 hover:rotate-[360deg] group">
                            <a href="#">
                                <PiTelegramLogoLight className="text-[18.5px] text-blue-500 group-hover:text-white"/>

                            </a>
                        </div>

                        <div
                            className="w-[45px] h-[45px] bg-white rounded-[50%] flex justify-center items-center shadow-md transition-all duration-700 cursor-pointer hover:bg-blue-400 hover:rotate-[360deg] group">
                            <a href="#">
                                <FiFacebook className="text-[18.5px] text-blue-500 group-hover:text-white"/>
                            </a>

                        </div>

                        <div
                            className="w-[45px] h-[45px] bg-white rounded-[50%] flex justify-center items-center shadow-md transition-all duration-700 cursor-pointer hover:bg-blue-400 hover:rotate-[360deg] group">
                            <a href="#">
                                <FiYoutube className="text-[18.5px] text-blue-500 group-hover:text-white"/>
                            </a>

                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;
