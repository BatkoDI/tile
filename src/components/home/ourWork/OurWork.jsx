import OurWorkBlock from "./OurWorkBlock";
import imageMain1 from "../../../images/ourWorksMain.jpg";
import imageMain2 from "../../../images/ourWorksMain2.jpg";
import imageMain3 from "../../../images/ourWorksMain3.jpg";
import imageMain4 from "../../../images/ourWorksMain4.jpg";
import dataOurWorkBrick from "./dataOurWorkBrick";
import dataOurWorkLaminate from "./dataOurWorkLaminate";
import dataOurWorkStone from "./dataOurWorkStone";
import dataOurWorkLaminateFloor from "./dataOurWorkLaminateFloor";



function OurWork() {

    return(
        <>
            <OurWorkBlock image={imageMain1} data={dataOurWorkBrick} title={"Our work on installing tiles similar to brick"} />
            <OurWorkBlock image={imageMain3} data={dataOurWorkStone} title={"Our work on installing tiles stimulating natural stone"} />
            <OurWorkBlock image={imageMain2} data={dataOurWorkLaminate} title={"Our work on installing laminate on the wall"} />
            <OurWorkBlock image={imageMain4} data={dataOurWorkLaminateFloor} title={"Our work on installing laminate flooring"} />
        </>
    );
};

export default OurWork;