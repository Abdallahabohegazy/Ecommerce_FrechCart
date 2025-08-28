import React, { useState } from "react";
import { toast } from 'react-toastify';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            toast.success("App link sent to your email!");
            setEmail('');
        } else {
            toast.error("Please enter your email address");
        }
    };

    return (
        <div className="bg-light py-4">
            <div className="container">
                {/* Quick Links Section */}
                <div className="row mb-4">
                    <div className="col-lg-3 col-md-6 mb-3">
                        <h6 className="fw-bold text-main">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><a href="/home" className="text-muted text-decoration-none">Home</a></li>
                            <li><a href="/products" className="text-muted text-decoration-none">Products</a></li>
                            <li><a href="/categories" className="text-muted text-decoration-none">Categories</a></li>
                            <li><a href="/brands" className="text-muted text-decoration-none">Brands</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-3">
                        <h6 className="fw-bold text-main">Customer Service</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-muted text-decoration-none">Contact Us</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Help Center</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Returns & Exchanges</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Shipping Info</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-3">
                        <h6 className="fw-bold text-main">About FreshCart</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-muted text-decoration-none">About Us</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Careers</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Privacy Policy</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-3">
                        <h6 className="fw-bold text-main">Follow Us</h6>
                        <div className="d-flex gap-3">
                            <a target="_blank" href="https://www.facebook.com/abdullah.mohamed.179037" className="text-muted text-decoration-none">
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a target="_blank" href="https://x.com/Bo_Hegazy" className="text-muted text-decoration-none">
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/bo_hegazy/" className="text-muted text-decoration-none">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/feed/" className="text-muted text-decoration-none">
                                <i className="fab fa-linkedin fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

                {/* App Download Section */}
                <div className="row align-items-center mb-4">
                    <div className="col-lg-6 mb-3 mb-lg-0">
                        <h5 className="fw-bold">Get the FreshCart app</h5>
                        <p className="text-muted">
                            We will send you a link, open it on your phone to download the app.
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="row align-items-center">
                            <div className="col-md-8">
                                <input
                                    type="email"
                                    className="form-control w-100"
                                    placeholder="Enter your email..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="col-md-4 text-md-end mt-2 mt-md-0">
                                <button
                                    type="submit"
                                    className="btn bg-main text-white w-100"
                                >
                                    Share App Link
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 text-center text-lg-end">
                        <small className="fw-bold d-block mb-2">Get deliveries with FreshCart</small>
                        <div className="d-flex gap-2 justify-content-center justify-content-lg-end">
                            <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                                <img
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="App Store"
                                    style={{ height: '30px' }}
                                />
                            </a>
                            <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Google Play"
                                    style={{ height: '30px' }}
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

                {/* Payment Partners & Copyright */}
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-3 mb-lg-0 text-center text-lg-start">
                        <small className="fw-bold d-block mb-2">Payment Partners</small>
                        <div className="d-flex gap-2 justify-content-center justify-content-lg-start">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                                height="20"
                                alt="MasterCard"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                height="20"
                                alt="PayPal"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                                height="20"
                                alt="Visa"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-end">
                        <small className="text-muted">
                            © 2025 FreshCart. All rights reserved.
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}

