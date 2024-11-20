import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To access the URL parameters
import Banner from "@components/product/Banner";
import data from "@data/product/Productdata";
import Features from "@components/product/Features";
const Product = () => {
    const { id } = useParams(); // Get the product id from the URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const productId = Number(id);
        console.log(productId);

        const productDetails = data.find((product) => product.id === productId);
        setProduct(productDetails);
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Banner data={product} />{" "}
            <p className="relative px-5 font-sans text-sm font-bold lg:text-2xl lg:px-24 -top-16 lg:-top-36 text-headingcolor">
                {product.des}
            </p>
            <div className="flex justify-center w-full h-screen lg:-mt-20">
                <img className="w-96" src={product.img} alt={product.title} />
            </div>
            <Features data={product.features} />
            <div className="px-5 py-10 lg:px-16">
                <h1 className="mb-10 font-sans font-bold leading-tight text-center text-headingcolor sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl lg:text-start sm:text-center sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-tight">
                    Goal of the project
                </h1>
                <p className="font-sans text-sm font-bold lg:text-2xl text-headingcolor">
                    {product.goal}
                </p>
            </div>
        </>
    );
};

export default Product;
