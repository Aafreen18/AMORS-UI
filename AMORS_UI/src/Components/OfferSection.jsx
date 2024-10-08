import React from "react";
import Attendence_img from "../assets/Attendence2.jpg";
import software_img from "../assets/Software.jpg";
import optical_img from "../assets/Optical.jpg";
import Description from "./Description";

const OfferSection = () => {
    return(
        <>
            <div className="container offer-section mb-5" >
                <h1
                    className="text-center"
                    style={{
                    fontSize: "60px",
                    background: "linear-gradient(to right, darkblue, lightblue)", 
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    height: "120px"
                    }}
                >
                    What we offer
                </h1>

                <div className="row g-5 p-5">
                    <div className="col-lg-4 col-md-12 col-6 p-5">
                        <Description 
                        imageSrc={Attendence_img} 
                        altText="Attendance" 
                        title="Attendance System Web Application" 
                        content="Gain In-Depth Insights into Your Organization’s Activity with Our Application"
                        />
                    </div>

                    <div className="col-lg-4 col-md-12 col-6 p-5">
                        <Description
                        imageSrc={software_img} 
                        altText="Software as a Service" 
                        title="Software as a Service" 
                        content="Get a hassle-free attendance system with our affordable, seamlessly connected SaaS solution."
                        />
                    </div>

                    <div className="col-lg-4 col-md-12 col-6 p-5">
                        <Description
                        imageSrc= {optical_img}
                        altText="Optical Recognition Devices" 
                        title="Optical Recognition Devices" 
                        content="Utilize our custom-built optical recognition devices for seamless attendance management."
                        />
                    </div>

                </div>
            </div>

            <div className="container mt-0 why-section mb-5 p-5" >
                <h1
                    className="text-center mb-5"
                    style={{
                    fontSize: "60px",
                    background: "linear-gradient(to right, darkblue, lightblue)", 
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    
                    }}
                >
                    Why Amors
                </h1>

                <div className="row g-5 p-5 " style={{backgroundColor:"transparent"}}>
                    <div className="col-lg-4 col-md-12 col-6 mb-5" style={{backgroundColor:"transparent"}}>
                        <Description 
                        imageSrc={Attendence_img} 
                        altText="Wide Network" 
                        title="Wide Network" 
                        content="No matter where you are, we've got you covered."
                        />
                    </div>

                    <div className="col-lg-4 col-md-12 col-6 mb-5" style={{backgroundColor:"transparent"}}>
                        <Description
                        imageSrc={software_img} 
                        altText="Unmatched Support" 
                        title="Unmatched Support" 
                        content="Virtual assistance. Talk to us about any concerns, 24/7."
                    
                        />
                    </div>

                    <div className="col-lg-4 col-md-12 col-6 mb-5" style={{backgroundColor:"transparent"}}>
                        <Description
                        imageSrc= {optical_img}
                        altText="Beginner-Friendly" 
                        title="Beginner-Friendly" 
                        content="Easy peasy UI. Our interface is simple and easy to use."
                    
                        />
                    </div>

                </div>
            </div>
        </>
    );
}

export default OfferSection;