import React from "react";

export default function Footer() {
    return (
        <div className="bg-light py-4">
            <div className="container ">
                <div className="align-items-center">
                    {/* Text*/}
                    <div className="mb-3 mb-lg-0">
                        <h5 className="fw-bold">Get the FreshCart app</h5>
                        <p className="text-muted">
                            We will send you a link, open it on your phone to download the app.
                        </p>

                        {/* Form */}
                        <form className="row align-items-center">
                            <div className="col-md-9">
                                <input
                                    type="email"
                                    className="form-control w-100"
                                    placeholder="Email .."
                                />
                            </div>
                            <div className="col-md-3 text-md-end mt-2 mt-md-0">
                                <button
                                    type="button"
                                    className="btn bg-main text-white w-75 mx-3"
                                >
                                    Share App Link
                                </button>
                            </div>
                        </form>
                        <hr className="my-4 w-100 text-secondary" />

                        {/* Icones */}
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-lg-3 col-md-6 mb-md-0 text-center text-lg-start d-flex justify-content-between">
                                <small className="fw-bold d-block mb-2">Payment Partners</small>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                                    height="20"
                                    className="me-2"
                                    alt="MasterCard"
                                />
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                    height="20"
                                    alt="PayPal"
                                />
                            </div>

                            <div className=" col-md-6 mb-md-0 text-center  d-flex justify-content-end gap-2">
                                <small className="fw-bold d-block my-1 ">Get deliveries with FreshCart</small>
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

                        <hr className="my-4 w-100 text-secondary" />

                    </div>
                </div>
            </div>
        </div>
    );
}

