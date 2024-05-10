import React from 'react';
import Content from "./Content";
import Slider from "./Slider";

const Home = () => {
    return (
        <div className="w-full xl:h-[800px] lg:h-[750px] md:h-[650px] sm:h-[1200px] bg-[url('./assets/images/vector.png')] bg-no-repeat md:bg-center bg-top flex md:flex-row flex-col items-center md:justify-evenly md:gap-0 gap-6">
            <Content/>
            <Slider/>
        </div>
    );
};

export default Home;
