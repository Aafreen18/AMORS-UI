import React from "react";
import Circle from "./Circle";
import myImage from "../assets/Face.png";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import FAQ from "./FAQdata";

const About = () => {
    const navigate = useNavigate();

  const ContactPage = () => {
    navigate("/contact")
  };
  

    return(
        <>
            <Circle className="circle" top = {'0'} left = {'0'} color={'darkblue'} />
            
            <div className="container home-section">
                <div className="row g-5">
                    <div className="col-6 my-0 mt-0">
                        <img src={myImage} alt="Face" width="700" height="600"  style={{justifyContent:"center", alignItems:"center",background:"none",backgroundColor: 'black',marginTop:"5%"}}/>
                    </div>

                    <div className="col-6 mt-6">
                        <div className="text-white d-flex justify-content-center align-items-center flex-column" >
                            <Circle className="circle" top = {'60%'} left = {'65%'}  color={'#050A30'} style={{position:"absolute"}}/>
                            <h1 className="me-5 AMORS" style={{backgroundColor:"transparent",overflow:"hidden",marginTop:"10%",color:"darkblue",textAlign:"left"}}>AMORS :</h1> 
                            <h1 className="ms-5" style={{backgroundColor:"transparent !important",overflow:"hidden",zIndex:"3",lineHeight:"1"}}>Advanced <br/>Monitoring <br />& Optical <br/>Recognition <br/>Service</h1>       
                        </div>    
                    </div>
                </div>
            </div>

            <div className="container about-section p-5 mt-3 why-section">
                <div className="row g-5" style={{backgroundColor:"transparent"}}>
                    <div className="col-lg-6 col-md-12 col-12" style={{backgroundColor:"transparent"}}>
                        <h3 className="text-white aboutUsFont" style={{backgroundColor:"transparent"}}>ABOUT US</h3>
                        <h5 className="aboutInfoFont" style={{backgroundColor:"transparent"}}>Innovation and technology should make life simple. That's why, here at Nimble Signals, we make sure innovation works for you, your business, and your people. 
                        </h5>
                        <h5 className="aboutInfoFont mt-4" style={{backgroundColor:"transparent"}}>Our reliable internet connection services enable you to enjoy your life more. Our technologies improve every day, so you can confidently focus on what really matters.
                        </h5>

                        <button type="button" onClick={ContactPage} className="btn bg-light me-3 gradient-button fw-bolder">See our products</button>
                        <button type="button" onClick={ContactPage} className="btn bg-light gradient-button fw-bolder">Get In Touch</button>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 order-1 order-lg-0">
                        {/* image */}
                    </div>
                </div>
            </div>

            <FAQ />
            
        </>
    );
}

export default About;