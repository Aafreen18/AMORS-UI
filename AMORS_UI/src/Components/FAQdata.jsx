import React from 'react';

const faqData = [
  {
    question: "Does Nimble Signals cover installation fees & services?",
    answer: "Having an FAQ section is a great way to present information about your company. Using the question-and-answer format makes it more relatable for users."
  },
  {
    question: "How will I know which internet plan is suitable for me?",
    answer: "Having an FAQ section is a great way to present information about your company. Using the question-and-answer format makes it more relatable for users."
  },
  {
    question: "Is customer service available 24/7?",
    answer: "Having an FAQ section is a great way to present information about your company. Using the question-and-answer format makes it more relatable for users."
  }
];

const FAQ = () => {
  return (
    <div className="faq-section m-5">
        <h3 className="text-white aboutUsFont" style={{backgroundColor:"transparent",fontSize:"50px",marginLeft:"10%"}}>FAQS</h3>
        <div className="row g-5 justify-content-center" style={{marginTop:"5%",marginBottom:"5%"}}>
            {faqData.map((item, index) => (
                <div key={index} className="faq-item text-white col-lg-3 col-md-4 col-12 d-flex flex-column">
                  <h3 className="faq-question">{item.question}</h3>
                  <p className="faq-answer">{item.answer}</p>  
                </div>
            ))}
      </div>
    </div>
  );
};

export default FAQ;