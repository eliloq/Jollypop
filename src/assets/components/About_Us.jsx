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
                <p className="text-white text-[15px] text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Debitis, dignissimos fugit laborum magnam nisi omnis sequi ut velit. Pariatur porro
                    praesentium rerum saepe sint tempore ullam velit. A amet, mollitia.Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Debitis, dignissimos fugit laborum magnam nisi omnis sequi ut velit.
                    Pariatur porro praesentium rerum saepe sint tempore ullam velit. A amet, mollitia.Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Debitis, dignissimos fugit laborum magnam nisi omnis sequi
                    ut velit. Pariatur porro praesentium rerum saepe sint tempore ullam velit. A amet, mollitia.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
