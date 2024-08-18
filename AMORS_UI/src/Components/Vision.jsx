import React from "react";
import Circle from "./Circle";

const Vision = () => {
    return(
        <>
            <div className="container p-5" style={{position: "relative", zIndex: "2"}}>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-8 order-1 order-lg-0 p-5" style={{position: "relative"}}>
                        <h1 style={{marginTop:"10%", color:"darkblue", position: "relative", zIndex: "3",display:"inline"}}>VISION</h1>

                        <Circle className="circle" top={'55%'} left={'60%'} color={'#050A30'} style={{position: "absolute"}} />

                        <p className="text-white" style={{position: "relative", zIndex: "3",marginTop:"30px",backgroundColor:"transparent"}}>
                            AMORS: Advanced Management and Optical Recognition Service aims to revolutionize organizational <br />
                            efficiency and security through a cutting-edge facial recognition attendance system, creating seamless, 
                            <br />intelligent, and trustworthy solutions that empower institutions to 
                            optimize their operations and achieve excellence.
                        </p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 bg-warning order-0 order-lg-1" style={{zIndex: "2"}}>
                        <p className="bg-light">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aliquam? 
                            Perferendis, tempore mollitia! Delectus nobis, esse nisi repellendus doloribus 
                            quas iure consectetur dolorem? Fugit harum nemo consectetur, doloribus itaque perferendis.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Vision;
