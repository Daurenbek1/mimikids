import React from "react";
import { Carousel } from "react-bootstrap";

export const CarouselSlider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src='/assets/informSlider/3.jpg'
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src='/assets/informSlider/3.jpg'
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src='/assets/informSlider/3.jpg'
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}