import HeaderH3AndButtonArrow from "../../forAll/HeaderH3AndButtonArrow";
import ImageBlock from "../../forAll/imageBlock/imageBlock";
import OurWorkMainBlock from "./OurWorkMainBlock";
import { useState } from "react";



function OurWorkBlock(props) {
    const [translateMain, setTranslateMain] = useState(0);
    const [visibleArrowLeft, setVisibleArrowLeft] = useState("hidden");
    const [visibleArrowRight, setVisibleArrowRight] = useState("visible");

    /* Creating an array with width data for div className="ourWorkSectionBlock_ImgNumber */
    const dateWidth = [];
    props.data.forEach(function(item) {
            dateWidth.push("100%")
        });
    const [visibleImage, setVisibleImage] = useState(dateWidth);

    /* Creating an array with opacity data for div className="ourWorkSectionBlock_ImgNumber */
    const dataOpacity = [];
    props.data.forEach(function(item) {
            dataOpacity.push(1)
        });
    const [visibleNumber, setVisibleNumber] = useState(dataOpacity);

    /* When the button is pressed, the block with the stages moves from the beginning to the end
    and gradually a window with a picture opens */
    const clickLeft = () => {
        let sum = translateMain;
        sum = sum + 100;
        setTranslateMain(sum);
        if(sum === -(props.data.length - 2) * 100 && visibleArrowRight === "hidden") {
            setVisibleArrowRight("visible");
        }; 
        if(sum === 0 && visibleArrowLeft === "visible") {
            setVisibleArrowLeft("hidden");
        }; 
        setVisibleImage((prev) => [
            ...prev,
            visibleImage[-sum / 100] = "0",
            visibleImage[-(sum / 100 - 1)] = "100%",
        ]);
        setVisibleNumber((prev) => [
            ...prev,
            visibleNumber[-sum / 100] = 0,
            visibleNumber[-(sum / 100 - 1)] = 1,
        ]);
    };

    /* When the button is pressed, the block with the stages moves from the end to the beginning 
    and gradually a window with a picture opens*/
    const clickRight = () => {
        let sum = translateMain;
        sum = sum - 100;
        setTranslateMain(sum);
        if(sum === -100 && visibleArrowLeft === "hidden") {
            setVisibleArrowLeft("visible");
        };  
        if(sum === -(props.data.length - 1) * 100 && visibleArrowRight === "visible") {
            setVisibleArrowRight("hidden");
        };
        setVisibleImage((prev) => [
            ...prev,
            visibleImage[-sum / 100] = "0",
            visibleImage[-(sum / 100 + 1)] = "100%",
        ]);
        setVisibleNumber((prev) => [
            ...prev,
            visibleNumber[-sum / 100] = 0,
            visibleNumber[-(sum / 100 + 1)] = 1,
        ]);
    };

    return(
        <div className="ourWorkSection">
            <HeaderH3AndButtonArrow title={props.title} clickLeft={clickLeft} clickRight={clickRight} visibleLeft={visibleArrowLeft} visibleRight={visibleArrowRight} />
            <div className="ourWorkSectionMain">
                <div className="ourWorkSectionTape">
                    <OurWorkMainBlock data={props.data} translate={translateMain} width={visibleImage} opacity={visibleNumber} />
                </div>
            </div>
            <ImageBlock image={props.image} />
        </div>
    );
};

export default OurWorkBlock;