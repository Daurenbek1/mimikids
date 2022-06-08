import React, { useState } from "react";
import './index.module.scss';

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AboutUs } from "../../components/AboutUs"
import { InformSlider } from "../../components/InformSlider";
import { PopularCategories } from "../../components/PopularCategories";
import { Modal } from "../../components/UI/Modal";
import { FormCallBack } from "../../components/FormCallBack";


const Main = () => {

    const [modal, setModal] = useState(false)

    return (
        <div>
            <Header />
            <Modal visible={modal} setVisible={setModal}>
                <FormCallBack />
            </Modal>
            <InformSlider />
            <PopularCategories />
            <AboutUs />
            <Footer />
        </div>
    )
}

export default Main