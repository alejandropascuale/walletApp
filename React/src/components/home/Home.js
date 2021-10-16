import React from 'react'
import Slider from './Slider'

import Slider1 from '../../assets/images/slider1.jpeg'
import Slider2 from '../../assets/images/slider2.jpeg'
import Slider3 from '../../assets/images/slider3.jpeg'


function Home() {
    return (
        <main>
            <section class="home" id="home">
                <div class="swiper home-slider">
                    <div class="swiper-wrapper wrapper">
                        <Slider 
                            title={'register to have all your operations synchronized'}
                            img={Slider1}
                        />

                        <Slider 
                            title={'Control over your income and expenses'}
                            img={Slider2}
                        />
                        
                        <Slider 
                            title={'register to have all your operations synchronized'}
                            img={Slider3}
                        />
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </section>
        </main>
    )
}

export default Home;