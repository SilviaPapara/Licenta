import React from "react";
import Cami from "../../images/mada.png";
import "./AboutUs.css";
export default function Livrare() {
    return (
        <>
            <div>
                <div className="about">
                    <img className="aboutPic" src={Cami} />
                    <div className="aboutText">
                        <h1 className="bigText">ABOUT US</h1>
                        <br></br>
                        <h4>Coffee House was created out of love for coffee by 2 good friends.</h4>
                        <h6>
                            We are not only a place to drop in and get your
                            morning cup of coffee (although you are more than
                            welcome to do that), we are a place where you can
                            sit down and enjoy that tailor-made cup of coffee.
                            If you need to work, we have a seating area created
                            specifically for you. If you need to rest, we have a
                            soft-seating area in front of a stone fire place
                            that is perfect for your weary mind and body
                            <br></br>
                            <br></br>
                            We offer a delicious variety of coffee from
                            Safehouse Coffee made by our professionally trained
                            baristas. We have everything from classic coffee to
                            our house made specialty beverages. 
                        </h6>
                        <br></br>
                        <br></br>
                        <a href="/Shop2">
                            <button className="aboutButton"> SHOP</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
