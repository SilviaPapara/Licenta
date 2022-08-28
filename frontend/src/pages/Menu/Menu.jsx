import React from "react";
import Carousel from "react-bootstrap/Carousel";
import cafea from "../../images/cafea.png";
import bauturi from "../../images/bauturi.png";
import meniu from "../../images/meniu1.0.png";
import "./Menu.css";

export default function Menu() {
    return (
        <>
        <div className="meniu">

            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        
                        className="meniu"
                        src={meniu}
                        alt="First slide"
                        />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                          className="meniu"
                          src={cafea}
                          alt="Second slide"
                          />

                    <Carousel.Caption>                   
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                          className="meniu"
                        src={bauturi}
                        alt="Third slide"
                        />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
                        </div>
        </>
    );
}
