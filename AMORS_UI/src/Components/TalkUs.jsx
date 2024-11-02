import React from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";
import Star from "./Star";


const TalkUs = () => {
    const navigate = useNavigate();

  const ContactPage = () => {
    navigate("/Contact")
  };

    return(
        <>
            <h1 className="Talk-heading text-white text-center py-3 fs-3">Talk to Us</h1>
            <p className="text-white text-center fs-5 py-2">Feel free to call, email, or hit us up on our social media accounts.</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',fontFamily:"sans-serif"}}>
                <button type="button" onClick={ContactPage} className="btn bg-light text-center mb-5">
                    Contact Us
                </button>
            </div>

            <div style={{height:"200px"}}><Star /></div>
            <Footer />
        </>
    )
};

export default TalkUs;