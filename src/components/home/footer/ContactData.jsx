import iconWhatsApp from "../../../icons/iconWhatsApp.png";
import iconTelegram from "../../../icons/iconTelegram.png";


function ContactData() {

    return(
        <div className="contact">
            <div className="email">
                <p> email: 
                    <a href="mailto:dmmozgllc@gmail.com">dmmozgllc@gmail.com</a> 
                </p>
            </div>
            <div className="phone">
                <p> phone: 
                    <a href="tel:+12245665759">+1-224-566-57-59</a> 
                </p>
            </div>
            <div className="messengers">
                <a href="https://wa.me/+12245665759">
                    <img src={iconWhatsApp} alt="icon WhatsApp"/> 
                </a> 
                <a href="https://t.me/@DMbatko">
                    <img src={iconTelegram} alt="icon Telegram" /> 
                </a>
            </div>
        </div>
    );
};

export default ContactData;