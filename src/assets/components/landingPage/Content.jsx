import React from 'react';
import "./content.css"

const Content = () => {
    return (
        <div className="md:w-[30%] w-[70%] lg:h-[600px] md:h-[500px] flex flex-col md:justify-between justify-evenly gap-6 md:order-1 order-2 pb-[50px] pt-[15px] md:py-0">
            <div className="flex flex-col gap-5">
                <h1 className="relative lg:text-[55px] sm:text-[45px] text-[35px]
            lg:leading-[55px]
            sm:leading-[45px] leading-[36px] font-[Inter-Bold] after:bg-[url('./assets/images/group.png')]
            after:!bg-cover
             after:bg-no-repeat
            after:lg:!w-[100px] after:lg:!h-[100px] after:absolute after:lg:left-[-75px] after:lg:top-[-65px]
             after:sm:left-[-55px]
             after:sm:top-[-50px]
            after:sm:!w-[70px]
            after:sm:!h-[70px]
            after:left-[-40px]
             after:top-[-35px]
            after:!w-[50px]
            after:!h-[50px]
            text-black md:text-white
            ">
                    Enjoy the sweetness in new flavors
                </h1>
                <p className="w-full text-black md:text-white
            lg:text-[20px]  sm:text-[18px] text-[16.5px] font-medium lg:leading-[30px] leading-[25px]">
                    Experience the sweetness that comes with the four new flavors Dolph's fruit-flavored popcorn.
                </p>
                <a className="text-black lg:text-[16.5px] md:text-[15px] sm:text-[16.5px] font-bold bg-[#FFF316] lg:px-8 lg:py-4 px-7 py-3 rounded-[30px] w-fit transition-all hover:shadow-md"
                   href="#">
                    Place an order
                </a>
            </div>
            <div className="flex flex-wrap md:justify-evenly md:w-[120%] w-[100%] gap-3">
                <div className="flex items-center ">
                    <span className="font-[Inter-Bold]
                    lg:text-[30px] text-[25px] mr-1.5">
                        3 million+
                    </span>
                    <span className="text-[15px] leading-5">
                        Satisfied
                        <br/>
                        customers
                    </span>
                </div>
                <div className="flex items-center">
                    <span className="font-[Inter-Bold]
                    lg:text-[30px] text-[25px] mr-1.5">
                        20 million+
                    </span>
                    <span className="text-[15px] leading-4">
                        Completed
                        <br/>
                        orders
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Content;
