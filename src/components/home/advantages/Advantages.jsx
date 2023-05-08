import HeaderH3 from "../../forAll/headerH3/HeaderH3";
import AdvantagesMain from "./AdvantagesMain";



function Advantages() {

    return(
        <div className="advantagesSection">
            <div className="advantagesSectionHeader">
                <HeaderH3 title="Our advantages" />
            </div>
            <div className="advantagesSectionMain">
                <AdvantagesMain />
            </div>
        </div>
    );
};

export default Advantages;