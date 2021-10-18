import React from 'react'


function Slider(props) {
    return (
            <div className="swiper-slide slide">
                <div className="content">
                    <h3>{props.title}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem reiciendis sequi dolorum</p>
                </div>
                <div className="image">
                    <img src={props.img} alt="" />
                </div>
            </div>
    )
}

export default Slider;