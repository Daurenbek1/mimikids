import React from "react";
import { Carousel } from "react-bootstrap";


import SliderItem from '../../assets/informSlider/3.jpg'

export const CarouselSlider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={SliderItem}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={SliderItem}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={SliderItem}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}