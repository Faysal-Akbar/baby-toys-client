import React from 'react';

const Footer = () => {
    return (
        <div className="row grid grid-cols-1 md:grid-cols-4 bg-black py-5">
            <div className="col ml-8 text-left">
            <p><span className="text-blue-400 font-bold text-3xl">Unique</span> <span className="text-3xl font-bold text-white">mall</span></p>
            <p className="text-gray-200 mt-2 mb-4 font-bold">Keep Eyes on</p>
            <a href="*"><i className="fab fa-facebook text-white bg-gray-500 p-2 mr-3 rounded-full"></i></a>
            <a href="*"><i className="fab fa-instagram text-white bg-gray-500 p-2 mr-3 rounded-full"></i></a>
            <a href="*"><i className="fab fa-twitter text-white bg-gray-500 p-2 mr-3 rounded-full"></i></a>
            <a href="*"><i className="fab fa-linkedin text-white bg-gray-500 p-2 rounded-full"></i></a>
            </div>
            <div className="col text-white ml-8">
                <h3 className="text-xl font-bold mb-5 text-left uppercase">Pages</h3>
                <div className="text-left uppercase">
                <p>Home</p>
                <p>About</p>
                <p>Blog</p>
                <p>FAQS</p>
                </div>
            </div>
            <div className="col text-white ml-8">
            <h3 className="text-xl font-bold mb-5 text-left uppercase">Accounts</h3>
                <div className="text-left uppercase">
                <p>My Account</p>
                <p>Wish List</p>
                <p>Shopping Cart</p>
                <p>Checkout</p>
                </div>
            </div>
            <div className="col text-white ml-8 mr-8">
            <h3 className="text-xl font-bold mb-5 text-left uppercase">Newsletter</h3>
                <div className="text-left">
                <p>Subscribe to the Unique mall mailing list to receive updates on new arrivals, offers, and other discount information</p>
                <input style={{width: '100%', height: '30px', borderRadius: '2px', marginTop: '10px', }} placeholder="Subscribe Now" type="text" />
                </div>
            </div>
        </div>
    );
};

export default Footer;