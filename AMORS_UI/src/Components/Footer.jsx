import React from "react";
import Circle from "./Circle";

const Footer = () =>{
    const date = new Date();
    const year = date.getFullYear();

    return(
        <>
            <div className="container footer-section p-5">
                <div className="row g-5">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div style={{ marginLeft:"40%", position: "relative" }}>
                            <Circle 
                                className="circle" 
                                color={'#050A30'} 
                                style={{ 
                                    position: "relative" 
                                }} 
                            />
                        </div>
                        <h1 className="fw-bold text-white" style={{position: "relative", zIndex: "3",backgroundColor:"transparent"}}>EMAIL</h1>
                        <p className="text-white" style={{position: "relative", zIndex: "3",backgroundColor:"transparent"}}>Futuristiccoders@gmail.com</p>
                        <div className="d-flex" style={{ position: "relative", zIndex: "5", backgroundColor: "transparent" }}>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin px-2" style={{ color: "#ffffff" }}></i>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-x-twitter px-2" style={{ color: "#ffffff" }}></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram px-2" style={{ color: "#ffffff" }}></i>
                            </a>
                        </div>

                    </div>

                    <div className="col-lg-6 col-md-12 col-12 d-flex justify-content-center align-items-center">
                        <div>
                            <ul className="text-white me-5" style={{listStyle:"none"}}>
                                <li>REGISTER</li>
                                <li>DASHBOARD</li>
                                <li>DONATE</li>
                                <li>GET IN TOUCH</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-white" style={{listStyle:"none"}}>
                                <li>SaaS DOCUMENTATION</li>
                                <li>VISIT STORE</li>
                                <li>FUTURISTIC CODERS</li>
                                <li>EXPLORE</li>
                            </ul>
                        </div>
                    </div>

                    <h5 className="text-white text-center">FuturisticCoders©{year}</h5>
                </div>
            </div>
        </>
    );
};

export default Footer;