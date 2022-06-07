import React from "react";
import './index.module.scss';

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AboutUs } from "../../components/AboutUs"
import { InformSlider } from "../../components/InformSlider";
import { PopularCategories } from "../../components/PopularCategories";


const Main = () => {
    return (
        <div>
            <Header />
            <InformSlider />
            <PopularCategories />
            <AboutUs />
            <Footer />
        </div>
    )
}

export default Main