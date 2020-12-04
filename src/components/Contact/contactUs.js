import React from 'react';
import './contactUs.css';
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';

const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <div className='topcontainer'>
                <h1 className='cont'>Contact Us</h1>
                <div className='content-container'>
                    <h2>
                        Phone number:
                    </h2>
                    <p>
                        +91 xxxxxxxxxx
                    </p>
                    <h2>
                        Email:
                    </h2>
                    <p>
                        abcd@xyz.com
                    </p>
                </div>
                <div className='inner-content'>
                <h1 className='add'>
                    Address:
                </h1>
                <p>
                Lorem ipsum dolor sit amet Phasellus arcu ligula, pulvinar et lobortis nec, elementum in nulla. 
                </p>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                        <iframe width="431" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=delhi&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default ContactUs;