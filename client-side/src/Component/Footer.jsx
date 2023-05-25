import React from 'react';
import { FaAddressBook, FaMapPin, FaPhone, FaSearchLocation, FaVoicemail } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container-fluid  text-white bg-dark px-3'>
            <div className=' row px-2 py-2 py-md-5'>
                <div className='col-12 col-md-6'>
                    <h4>Subscribe</h4>
                    <p>Register and get update notification<br></br>
                    about all updates and news before it gets too late</p>
                    <div className=''>
                        <input type="text" className='form-control'/>
                        <br />
                        <button className='btn btn-warning'>Sign Up</button>
                    </div>
                </div>
                <div className='col-12 col-md-3'>
                    <h4>Explore</h4>
                    <ul className='list-unstyled'>
                        <li><Link to="/" className='text-decoration-none text-white'>Home</Link></li>
                        <li><Link to="/aboutus" className='text-decoration-none text-white'>About</Link></li>
                        <li><Link to='/blog' className='text-decoration-none text-white'>Blog</Link></li>
                    </ul>
                </div>
                <div className='col-12 col-md-3'>
                    <h4>Contact</h4>
                    <p>
                    <FaMapPin></FaMapPin>787Market View, Stret<br></br>
                        New Town<br></br>
                    <FaAddressBook></FaAddressBook> info@thai-tongue.com
                    </p>
                    <p><FaPhone></FaPhone> Phone: 676 888 000</p>
                </div>
            </div>
            <footer className='text-center py-3 px-3 bg-dark-gray m-0'>
                All Rights Reserverd by ©ThaiTongue 2023
            </footer>
            
        </div>
    );
};

export default Footer;