import React from "react";
import "./ConfirmOrder.css";
import Confirm from "../../images/Confirm.png";
export default function ConfirmOrder() {
    return (
        <>
            <div className="Confirm" >

            <img className="ConfirmIcon" src={Confirm} />
                <div>
                    <h2>
                        <strong>Thank you for your purchase!</strong>
                    </h2>
                </div>

                <div>
                    <h4>
                        We will send you a confirmation email as soon as the
                        courier picks up the package.
                    </h4>
                </div>
            </div>
        </>
    );
}
