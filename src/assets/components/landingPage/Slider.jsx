import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import "./slider.css"

import img1 from "../../images/red-chilli.png"
import img2 from "../../images/cheezy-mix.png"
import img3 from "../../images/green-chilli.png"
import img4 from "../../images/cheezy-mix2.png"

export default () => {
    return (
        <Swiper className="xl:w-[500px] lg:w-[450px] md:w-[400px] sm:w-[480px] w-[90%] lg:h-[85%] md:h-[85%] sm:h-[700px] md:!m-0 md:!p-0 md:mt-0 mt-[30px] md:order-2 order-1"  modules={[Pagination]}
                direction="vertical"
                slidesPerView={1}
                pagination={{clickable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <img src={img1} alt="Red Chilli Popcorn"/>
            </SwiperSlide> <SwiperSlide>
            <img src={img2} alt="Green Chilli Popcorn"/>
        </SwiperSlide> <SwiperSlide>
            <img src={img3} alt="Cheezy Mix Popcorn"/>
        </SwiperSlide> <SwiperSlide>
            <img src={img4} alt="Cheezy Mix Popcorn"/>
        </SwiperSlide>
        </Swiper>
    );
};