import React from 'react'
import Slider from './Slider'

import Slider1 from '../../assets/images/slider1.jpeg'
import Slider2 from '../../assets/images/slider2.jpeg'
import Slider3 from '../../assets/images/slider3.jpeg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);


function SliderSection() {
    return (
        <section className="home" id="home">
            <Swiper pagination={true} className="mySwiper">
                <SwiperSlide>
                    {/* <Slider 
                        title={'register to have all your operations synchronized'}
                        img={Slider1}
                    /> */}
                    Slide 1
                </SwiperSlide>
                    
                <SwiperSlide>
                    {/* <Slider 
                        title={'Control over your income and expenses'}
                        img={Slider2}
                    /> */}
                    Slide 2
                </SwiperSlide>
                    
                <SwiperSlide>
                    {/* <Slider 
                        title={'register to have all your operations synchronized'}
                        img={Slider3}
                    /> */}
                    Slide 3
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default SliderSection;