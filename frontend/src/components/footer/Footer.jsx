import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4> Contact Us </h4>
                        <ul className="list-unstyled">
                            <li>Bulevardul Decebal 9, Piatra Neamț 610007</li>
                            <li>+40 753 918 398</li>
                            <li>coffee_house@yahoo.com</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>Hours</h4>
                        <ul className="list-unstyled">
                            <strong> Monday - Friday </strong>
                            <li> 7:30 - 20:00 </li>
                            <strong> Saturday - Sunday </strong>
                            <li> 7:30 - 12:00 </li>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>Follow us</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a
                                    className="svgColor1"
                                    href="https://www.instagram.com/dante.coffee.roastery/"
                                    target="_blank"
                                >
                                    <svg
                                        className="size "
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            fill="#3b5998"
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="svgColor1"
                                    href="https://www.facebook.com/dante.coffee.roastery"
                                    target="_blank"
                                >
                                    <svg
                                        className="size"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="#3b5998"
                                            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                   
                    <div className="col">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe
                                    width="300"
                                    height="200"
                                    id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=Bulevardul%20Decebal%209,%20Piatra%20Neam%C8%9B%20610007&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                ></iframe>
                                <a href="https://www.whatismyip-address.com/divi-discount/"></a>
                                <br />
                                <a href="https://www.embedgooglemap.net"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Silvia Papara | Licenta
                        | All right reserved
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Footer;
