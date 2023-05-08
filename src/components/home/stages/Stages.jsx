import { useState } from "react";
import HeaderH3AndButtonArrow from "../../forAll/HeaderH3AndButtonArrow";
import StagesMainBlok from "./StagesMainBlok";
import imageMain from "../../../images/stagesMain.jpg";
import ImageBlock from "../../forAll/imageBlock/imageBlock";


function Stages() {
    const [translateMain, setTranslateMain] = useState(0);
    const [visibleArrowLeft, setVisibleArrowLeft] = useState("hidden");
    const [visibleArrowRight, setVisibleArrowRight] = useState("visible");

    /* When the button is pressed, the block with the stages moves from the beginning to the end */
    const clickLeft = () => {
        let sum = translateMain;
        sum = sum + 100;
        setTranslateMain(sum);
        if(sum === -100 && visibleArrowRight === "hidden") {
            setVisibleArrowRight("visible");
        }; 
        if(sum === 0 && visibleArrowLeft === "visible") {
            setVisibleArrowLeft("hidden");
        };  
    };

    /* When the button is pressed, the block with the stages moves from the end to the beginning */
    const clickRight = () => {
        let sum = translateMain;
        sum = sum - 100;
        setTranslateMain(sum);
        if(sum === -100 && visibleArrowLeft === "hidden") {
            setVisibleArrowLeft("visible");
        };  
        if(sum === -200 && visibleArrowRight === "visible") {
            setVisibleArrowRight("hidden");
        }; 
    };


    return(
        <div className="stagesSection">
            <HeaderH3AndButtonArrow title={"How we work"} clickLeft={clickLeft} clickRight={clickRight} visibleLeft={visibleArrowLeft} visibleRight={visibleArrowRight} />
            <div className="stagesSectionMain">
                <div className="stagesSectionTape">
                    <StagesMainBlok translate={translateMain} />
                </div>
            </div>
            <ImageBlock image={imageMain}/>
        </div>
    );
};

export default Stages;