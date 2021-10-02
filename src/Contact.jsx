import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
     return (
          <>
               <Navbar />
    <div id="contact" className="form-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text-container">
                        <div className="section-title">GET QUOTE</div>
                        <h2>Submit the form for quote</h2>
                        <p>Aliquam et enim vel sem pulvinar suscipit sit amet quis lorem. Sed risus ipsum, egestas sed odio in, pulvinar euismod ipsum. Sed ut enim non nunc fermentum dictum et sit amet erat. Maecenas</p>
                        <ul className="list-unstyled li-space-lg">
                            <li className="d-flex">
                                <i className="fas fa-square"></i>
                                <div className="flex-grow-1">Vel maximus nunc aliquam ut. Donec semper, magna a pulvinar</div>
                            </li>
                            <li className="d-flex">
                                <i className="fas fa-square"></i>
                                <div className="flex-grow-1">Suscipit sit amet quis lorem. Sed risus ipsum, egestas mare</div>
                            </li>
                            <li className="d-flex">
                                <i className="fas fa-square"></i>
                                <div className="flex-grow-1">Sem pulvinar suscipit sit amet quis lorem. Sed risus</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control-input" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control-input" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control-input" placeholder="Industry" required />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control-input" placeholder="Your product" required />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
    </div>                <Footer />
          </>
     );
};
export default Contact;