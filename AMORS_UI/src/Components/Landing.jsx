import React from "react";
import Circle from "./Circle";
import Star from "./Star";
import Vision from "./Vision";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const LearnMorePage = () => {
    navigate("/learnMore")
  };
  
    return(
        <>
            <Star />
            <Circle className="circle" top = {'0'} left = {'0'} color={'darkblue'} />
            
            <div className="container home-section">
                <div className="row g-5">
                    <div className="col-6 ">

                    </div>

                    <div className="col-6">
                        <div className="text-white d-flex justify-content-center align-items-center flex-column" >
                            <Circle className="circle" top = {'60%'} left = {'85%'}  color={'#050A30'} style={{position:"absolute"}}/>
                            <h1 style={{backgroundColor:"transparent",overflow:"hidden"}}>Unlock</h1> 
                            <h1 style={{backgroundColor:"transparent",overflow:"hidden"}}>Smarter </h1>
                            <h1 style={{zIndex:"2",backgroundColor:"transparent",overflow:"hidden"}}>Management</h1>
                            
                            <button type="button" onClick={LearnMorePage} className="btn bg-light">Learn More</button>
                        </div>    
                    </div>
                </div>
            </div>
                
            <Vision />
        </>
    );
}

export default Landing;