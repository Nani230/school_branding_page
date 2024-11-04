import React from "react";

const ClientCard = ({ data }) => {
    return <img className="w-28 h-28" src={data.img} alt="" />;
};

export default ClientCard;
