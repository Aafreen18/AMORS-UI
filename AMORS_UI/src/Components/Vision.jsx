import React from "react";
import Circle from "./Circle";
import myImage from "../assets/vision1.png";

const Vision = () => {
    return(
        <>
            <div className="container p-5" style={{position: "relative", zIndex: "2"}}>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-8 order-1 order-lg-0 p-5" style={{position: "relative"}}>
                        <h1 style={{marginTop:"10%", color:"darkblue", position: "relative", zIndex: "3",display:"inline"}}>VISION</h1>

                        <Circle className="circle" top={'55%'} left={'60%'} color={'#050A30'} style={{position: "absolute"}} />

                        <p className="text-white" style={{position: "relative", zIndex: "3",marginTop:"30px",backgroundColor:"transparent"}}>
                            AMORS: Advanced Management and Optical Recognition Service aims to<br />revolutionize organizational 
                            efficiency and security through a cutting-edge <br /> facial recognition attendance system, creating seamless, 
                            intelligent, and <br /> trustworthy solutions that empower institutions to 
                            optimize their operations <br /> and achieve excellence.
                        </p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 order-0 order-lg-1 mt-3" style={{zIndex: "2"}}>
                        <img src={myImage} alt="Description of image" width="400" height="400" style={{backgroundColor:"transparent !important",borderRadius:" 15px"}}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Vision;
