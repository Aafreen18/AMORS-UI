import React from "react";
import "../Contact.css";

const Contact = () => {
    return(
        <>  
            <div className="contact-container">
                <div className="contact-details">
                    <div className="contact-info">
                        <h3 className="fw-bolder text-center" style={{backgroundColor:"transparent",color:"blue", marginTop:"8%"}}>LET`S GET IN TOUCH</h3>
                        <p className="" style={{backgroundColor:"transparent",margin:"2rem"}}>
                            Feel free to reach out, share your experiences, and let us know how we can make our website and products even better for you.
                        </p>

                        <div className="ms-4 location" style={{ backgroundColor: "transparent", lineHeight: "1.2" }}>
                            <div className="me-2 d-flex align-items-center" style={{ backgroundColor: "transparent", marginBottom: "4px" }}>
                                <i className="fa-solid fa-map-location-dot m-1 p-1 text-center" style={{ color: "blue", backgroundColor: "transparent", borderRadius: "5px" }}></i>
                                <p className="mt-1 mb-0" style={{ backgroundColor: "transparent" }}>Dwarka Mor, New Delhi-110059</p>
                            </div>

                            <div className="me-2 d-flex align-items-center" style={{ backgroundColor: "transparent", marginBottom: "4px" }}>
                                <i className="fa-solid fa-envelope m-1 p-1 text-center" style={{ color: "blue", backgroundColor: "transparent", borderRadius: "5px" }}></i>
                                <p className="mt-1 mb-0" style={{ backgroundColor: "transparent" }}>Futuristiccoders@gmail.com</p>
                            </div>

                            <div className="me-2 d-flex align-items-center" style={{ backgroundColor: "transparent", marginBottom: "4px" }}>
                                <i className="fa-solid fa-phone-volume m-1 p-1 text-center" style={{ color: "blue", backgroundColor: "transparent", borderRadius: "5px" }}></i>
                                <p className="mt-1 mb-0" style={{ backgroundColor: "transparent" }}>8766257559</p>
                            </div>
                        </div>


                        <div className="social-media" style={{backgroundColor:"transparent"}}>
                            <h3 className="ms-4" style={{backgroundColor:"transparent",fontSize:"20px",marginTop:"10%"}}>Connect with us:</h3>
                            <div className="d-flex ms-4" style={{backgroundColor: "white"}}>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{backgroundColor: "white"}}>
                                    <i className="fa-brands fa-linkedin m-2 p-2 text-center" style={{ color: "#ffffff", backgroundColor: "blue" ,borderRadius:"5px"}}></i>
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{backgroundColor: "white"}}>
                                    <i className="fa-brands fa-x-twitter m-2 p-2 text-center" style={{ color: "#ffffff", backgroundColor: "blue",borderRadius:"5px" }}></i>
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{backgroundColor: "white"}}>
                                    <i className="fa-brands fa-instagram m-2 p-2 text-center" style={{ color: "#ffffff", backgroundColor: "blue", borderRadius:"5px" }}></i>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="contact-form">
                        <div className="circle one"></div>
                        <div className="circle two"></div>
                        <form className="contactForm">
                            <h3 className="fw-bolder text-center text-white" style={{backgroundColor:"transparent"}}>CONTACT US</h3>
                            <div className="input-container">
                                <input type="text" name="name" className="input" placeholder="username"></input>
                            </div>
                            <div className="input-container">
                                <input type="text" name="email" className="input" placeholder="email"></input>
                            </div>
                            <div className="input-container">
                                <input type="text" name="number" className="input" placeholder="phone"></input>
                            </div>
                            <div className="input-container">
                                <textarea type="text" name="message" className="input" placeholder="message"></textarea>
                            </div>
                            <button type="submit"  className="btn bg-light ms-3">Send</button>
                        </form>
                    </div>    
                </div>
                
            </div>
           
        </>
    );
}

export default Contact;