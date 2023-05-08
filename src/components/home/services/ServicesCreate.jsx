import { useState } from "react";
import dataServices from "./dataServices";


function ServicesCreate() {
    const[imgOpacity, setImgOpacity] = useState([0, 0, 0, 0, 0, 0,]);
    const[titleOpacity, setTitleOpacity] = useState([1, 1, 1, 1, 1, 1,]);

    
    const mouseOver = (id) => {
        setImgOpacity((prev) => [
            ...prev,
            imgOpacity[id] = 1,
        ]);
        setTitleOpacity((prev) => [
            ...prev,
            titleOpacity[id] = 0,
        ]);
    };

    const mouseOut = (id) => {
        setImgOpacity((prev) => [
            ...prev,
            imgOpacity[id] = 0,
        ]);
        setTitleOpacity((prev) => [
            ...prev,
            titleOpacity[id] = 1,
        ]);
    };

    const createSection = dataServices.map((element) => {
        return(
            <div key={element.id} className="servicesSectionBlockOne">
                <div className="servicesSectionTitle" style={{opacity: titleOpacity[element.id], transition: "opacity 1s"}}>
                    <h4>
                        {element.title}
                    </h4>
                </div>
                <div className="servicesSectionImg" onMouseEnter={() => {mouseOver(element.id)}} onMouseLeave={() => {mouseOut(element.id)}} style={{opacity: imgOpacity[element.id], transition: "opacity 1s"}}>
                    <img src={element.image} alt={element.alt} />
                </div>
            </div>
        )
    })

    return(
        <div className="servicesSectionFlexBox">
            {createSection}
        </div>
    );
}

export default ServicesCreate;