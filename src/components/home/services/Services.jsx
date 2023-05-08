import HeaderH3 from "../../forAll/headerH3/HeaderH3";
import ServicesCreate from "./ServicesCreate";


function Services() {

    return(
        <div className="servicesSection">
            <div className="servicesSectionHeader">
                <HeaderH3 title={"Our services"} />
            </div>
            <div className="servicesSectionFlex">
                <ServicesCreate />
            </div>
        </div>
    );
}

export default Services;