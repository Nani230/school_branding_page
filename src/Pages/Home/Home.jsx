import React, { useEffect, useState } from "react";
import image from "@assets/registerbackground.png";

import Features from "@/Components/Home/Features";

import Banner from "@components/Home/Banner";
import Faqs from "@/Components/Home/Faqs";

const Home = () => {
    return (
        <>
            <Banner />
            <Features />
            <Faqs />
        </>
    );
};

export default Home;
