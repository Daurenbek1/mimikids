import React, { useState } from "react";
import './index.module.scss';

import { AboutUs } from "../../components/AboutUs"
import { InformSlider } from "../../components/InformSlider";
import { PopularCategories } from "../../components/PopularCategories";
import { Modal } from "../../components/UI/Modal";
import { FormCallBack } from "../../components/FormCallBack";


const Main = (props) => {
    return (
        <>
            <Modal visible={props.visible} setModal={props.setModal}>
                <FormCallBack />
            </Modal>
            <InformSlider />
            <PopularCategories />
            <AboutUs />
        </>
    )
}

export default Main