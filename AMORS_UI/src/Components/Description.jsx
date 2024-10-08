import React from "react";

const Description = ({imageSrc, altText, title, content}) =>{
    return(
        <>
            <img src={imageSrc} alt={altText} width="100%" height="80%" style={{ borderRadius: "10px", backgroundColor:"transparent" }} />
            <h3 className="pt-3 text-center" style={{ color: "#ffbd59", backgroundColor:"transparent" }}>{title}</h3>
            <p className="text-white p-3 text-center" style={{backgroundColor:"transparent"}}>{content}</p>
        </>
    );
}

export default Description;  