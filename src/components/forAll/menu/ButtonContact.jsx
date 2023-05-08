import { useState } from "react";
import FormSubmitHeader from "../../home/formSubmit/FormSubmitHeader";


function ButtonContact() {
    const [formLeft, setFormLeft] = useState("110%");

    const eventAppearanceForm = () => {
        setFormLeft("10%");
    };

    const eventDisappearanceForm = () => {
        setFormLeft("110%");
    }

    return(
        <>
            <div className="frameButton">
                <div className="frameTop"></div>
                <div className="frameBottom"></div>
                <div className="frameLeft"></div>
                <div className="frameRight"></div>
                <button onClick={eventAppearanceForm}>
                    Contact Us
                </button>
            </div>  
            <FormSubmitHeader formLeft={formLeft} eventDasappearances={eventDisappearanceForm} />
        </>
          
    );
};

export default ButtonContact;