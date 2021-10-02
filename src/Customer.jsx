import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Customer = () => {
     return (
          <>
               <Navbar />
               <div className="cards-2 bg-gray">
               <div className="container">
               <div className="row">
                    <div className="col-lg-12">
                    <h2 className="h2-heading">Customer Contacts</h2>
                    </div>
               </div> 
               <div className="row">
                    <div className="container">
                    <table className="table">
                         <thead>
                         <tr>
                         <th>Firstname</th>
                         <th>Lastname</th>
                         <th>Email</th>
                         </tr>
                         </thead>
                         <tbody>
                         <tr>
                         <td>John</td>
                         <td>Doe</td>
                         <td>john@example.com</td>
                         </tr>
                         <tr>
                         <td>Mary</td>
                         <td>Moe</td>
                         <td>mary@example.com</td>
                         </tr>
                         <tr>
                         <td>July</td>
                         <td>Dooley</td>
                         <td>july@example.com</td>
                         </tr>
                         </tbody>
                    </table>
                    </div>                
               </div>
               </div>
               </div>
               <Footer />
          </>
     );
};
export default Customer;