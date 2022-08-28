import React from "react";
import homepic from "../../images/poza12.png";
import Button from "react-bootstrap/Button";
import "./Home.css";

export default function Home() {
    return (
        <>
            <div className="bgColor">
                <img className="homePic" src={homepic} />
                <div className="newDiv">
                    <div className="homeText">
                        <h1 className="CoffeeHouse">COFFEE HOUSE</h1>
                        <h4>Bulevardul Decebal 9, Piatra Neamț 610007</h4>
                        <h4 className="orar">Monday-Friday</h4>
                        <h5>7:30 - 20:00</h5>
                        <h4 className="orar">Saturday-Sunday</h4>
                        <h5>7:30 - 12:00</h5>
                    </div>
 
                    <div className="button">
                        <Button variant="dark" size="lg" href="/menu">
                            Menu
                        </Button>{" "}
                        <Button variant="dark" size="lg" href="/Shop2">
                            Shop
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
