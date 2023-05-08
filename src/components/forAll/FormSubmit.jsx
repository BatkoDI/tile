import { useState } from "react";



function FormSubmit() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    /* Function for writing user-entered data to useState variables */
    const changeValue = (e, setState) => {
        setState(e.target.value);
    }

    /* */
    const sendForm = async(e) => {
        e.preventDefault();
        try{
            let response = await fetch("http://localhost:5000/order", {
                method: "POST",
                headers: {"Content-Type": "application/json; charset=utf-8"},
                body: JSON.stringify({
                    name: name,
                    phone: phone,
                    email: email,
                    message: message,
                }),
            });
            if(response.status === 200) {
                setName("");
                setPhone("");
                setEmail("");
                setMessage("");
                setSuccessMessage("Thank you for contacting us. We will contact you soon.");
            } else {
                setSuccessMessage("An error has occurred. Your message has not been sent. Try again.");
            }
        } catch(err) {
            console.log("error");
        }
    }

    return(
        <div className="form">
            <form onSubmit={sendForm}>
                <fieldset>
                    <legend>Leave your phone number or email and we will contact you as soon as possible</legend>
                       <div className="formBlock">
                            <div className="formBlockDate">
                                <div className="formDiv">
                                    <input type="text" id="form_name" maxLength={100} minLength={1}  value={name} onChange={(e) => changeValue(e, setName)}/>
                                    <label htmlFor="form_name">Name</label>
                                </div>
                                <div className="formDiv">
                                    <input type="tel" id="form_phone" maxLength={10} minLength={10} value={phone} onChange={(e) => changeValue(e, setPhone)}/>
                                    <label htmlFor="form_phone">Phone number</label>
                                </div>
                                <div className="formDiv">
                                    <input type="email" id="form_email" maxLength={50} minLength={1}  value={email} onChange={(e) => changeValue(e, setEmail)}/>
                                    <label htmlFor="form_email">Email</label>
                                </div>
                            </div>
                            <div className="formBlockMessage">
                                <div className="formDiv">
                                    <textarea type="text" id="form_message" maxLength={1000} minLength={0}  value={message} onChange={(e) => changeValue(e, setMessage)}/>
                                    <label htmlFor="form_message">Message</label>
                                </div>
                            </div>
                       </div>     
                </fieldset>
                <div className="buttonForm">
                   <button type="submit"> Send </button> 
                   <p>
                        {successMessage}
                   </p>
                </div> 
            </form>
        </div>
    );
};

export default FormSubmit;