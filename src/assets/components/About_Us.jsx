import React from 'react';

const AboutUs = () => {
    return (
        <div
            className="w-full md:h-[650px]  h-[1000px] md:bg-[url('./assets/images/flavors(1).gif')] bg-[url('./assets/images/flavors(2).gif')] bg-center bg-no-repeat bg-cover relative flex justify-center">

            <div className="px-1.5 py-10 md:w-[40%] w-[90%] absolute md:top-[50%] md:translate-y-[-50%] lg:right-[5%]
             md:right-[2.5%]
             flex flex-col gap-5">

                <h1 className="text-white text-[50px]">
                    About Us
                    <div className="w-[100%] bg-white h-[1.5px]"></div>

                </h1>
                <p className="text-white text-[15px] text-justify">
                    We are the Jollypop team and we are engaged in the production and distribution of popcorn. We started our activity in 2019 and until now, we have gone through many things and faced many difficulties. We always said that we are the best in this profession, do you need proof? So order our products right now to find out for yourself!
                    You can find any kind of popcorn with any flavor you want here, new things that you have never seen anywhere, so don't wait! Register on our site right now and place your order, so you can see the product in front of you and taste it. Welcome to Jollypop popcorn paradise!
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
