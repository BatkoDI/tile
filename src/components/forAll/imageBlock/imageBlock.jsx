import { useEffect, useRef, useState } from "react";
import "./imageBlock.css";

function ImageBlock(props) {
    const refImg = useRef();
    const [parallaxImg, setParallaxImg] = useState("translateY(0)");
  
    /* Parallax effect (when scrolling, the picture moves at a higher speed than the scroll itself) */
    useEffect(() => {
        const parallaxEfect = (e) => {
            let heightWindow = document.documentElement.clientHeight;
            let heightBody = document.body.offsetHeight;
            let topBounding = refImg.current.getBoundingClientRect().top;
            let calculateScroll = -topBounding / heightBody * 100;
        
            if(topBounding < heightWindow && topBounding > -heightWindow) {
                setParallaxImg(`translateY(${calculateScroll * 3}%)`); 
            } else {
                setParallaxImg("translateY(0)");
            }  
        };
        
        window.addEventListener("scroll", parallaxEfect); 
        return ()=> window.removeEventListener("scroll", parallaxEfect);
    });

    return(
        <div ref={refImg} className="stagesSectionImage">
            <div className="stagesSectionImageDiv" style={{transform: parallaxImg}}>
                <img src={props.image} alt="imageMain"/>
            </div>
        </div>
    );
};

export default ImageBlock;