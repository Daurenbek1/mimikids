import React from "react";
import './index.module.scss';

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AboutUs } from "../../components/AboutUs"


const Main = () => {
    return (
        <div>
            <Header />
            <AboutUs />
            <Footer />
        </div>
    )
}

export default Main