import React from 'react';
const Footer = () => {
     return (
          <>
               <div className="footer bg-gray">
                    <img className="decoration-circles" src="images/decoration-circles.png" alt="alternative" /> 
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-12">
                                   <h4>If you want to find out which are the right influencers for your product marketing campaigns then follow us</h4>
                                   <div className="social-container">
                                   <span className="fa-stack">
                                        <a href="#your-link">
                                             <i className="fas fa-circle fa-stack-2x"></i>
                                             <i className="fab fa-facebook-f fa-stack-1x"></i>
                                        </a>
                                   </span>
                                   <span className="fa-stack">
                                        <a href="#your-link">
                                             <i className="fas fa-circle fa-stack-2x"></i>
                                             <i className="fab fa-twitter fa-stack-1x"></i>
                                        </a>
                                   </span>
                                   <span className="fa-stack">
                                        <a href="#your-link">
                                             <i className="fas fa-circle fa-stack-2x"></i>
                                             <i className="fab fa-pinterest-p fa-stack-1x"></i>
                                        </a>
                                   </span>
                                   <span className="fa-stack">
                                        <a href="#your-link">
                                             <i className="fas fa-circle fa-stack-2x"></i>
                                             <i className="fab fa-instagram fa-stack-1x"></i>
                                        </a>
                                   </span>
                                   <span className="fa-stack">
                                        <a href="#your-link">
                                             <i className="fas fa-circle fa-stack-2x"></i>
                                             <i className="fab fa-youtube fa-stack-1x"></i>
                                        </a>
                                   </span>
                                   </div>
                              </div>
                         </div> 
                    </div> 
               </div>  
               <div className="copyright bg-gray">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                   <ul className="list-unstyled li-space-lg p-small">
                                   <li><a href="article.html">Article Details</a></li>
                                   <li><a href="terms.html">Terms & Conditions</a></li>
                                   <li><a href="privacy.html">Privacy Policy</a></li>
                                   </ul>
                              </div>
                              <div className="col-lg-3 col-md-12 col-sm-12">
                                   <p className="p-small statement">Copyright © <a href="index.html">Your name</a></p>
                              </div> 
                              <div className="col-lg-3 col-md-12 col-sm-12">
                                   <p className="p-small statement">Distributed by <a href="index.html">Themewagon</a></p>
                              </div>
                         </div> 
                    </div> 
               </div>                
       </>
  );
};
export default Footer;