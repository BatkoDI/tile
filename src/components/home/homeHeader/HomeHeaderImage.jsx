import { useEffect, useState } from "react";
import imagesDate from "./homeHeaderImageDate";


function HomeHeaderImage() {
    const[scaleImageLast, setScaleImageLast] = useState({
        scale: "scale(1)",
        opacity: 1,
        trasitionScale: "",
        transitionOpacity: "",
    });
    const[scaleImage1, setScaleImage1] = useState({
        scale: "scale(1)",
        opacity: 1,
        trasitionScale: "",
        transitionOpacity: "",
    });
    const[scaleImage2, setScaleImage2] = useState({
        scale: "scale(1)",
        opacity: 1,
        trasitionScale: "",
        transitionOpacity: "",
    });
    const[scaleImage3, setScaleImage3] = useState({
        scale: "scale(1)",
        opacity: 1,
        trasitionScale: "",
        transitionOpacity: "",
    });
    const[scaleImage4, setScaleImage4] = useState({
        scale: "scale(1)",
        opacity: 1,
        trasitionScale: "",
        transitionOpacity: "",
    });
    const[scaleImage5, setScaleImage5] = useState({
        scale: "scale(1)",
        opacity: 1,
        trasitionScale: "",
        transitionOpacity: "",
    });
    const[scaleImage6, setScaleImage6] = useState({
        scale: "scale(1)",
        opacity: 1,
        trasitionScale: "",
        transitionOpacity: "",
    });
    const[scaleImage7, setScaleImage7] = useState({
        scale: "scale(1)",
        opacity: 1,
        trasitionScale: "",
        transitionOpacity: "",
    });
    const[scaleImage8, setScaleImage8] = useState({
        scale: "scale(1)",
        opacity: 1,
        trasitionScale: "",
        transitionOpacity: "",
    });
    const[scaleImage9, setScaleImage9] = useState({
        scale: "scale(1)",
        opacity: 1,
        trasitionScale: "",
        transitionOpacity: "",
    });
    const[scaleImage10, setScaleImage10] = useState({
        scale: "scale(1)",
        opacity: 1,
        trasitionScale: "",
        transitionOpacity: "",
    });
    const[scaleImage11, setScaleImage11] = useState({
        scale: "scale(1)",
        opacity: 1,
        trasitionScale: "",
        transitionOpacity: "",
    });
    const[scaleImage12, setScaleImage12] = useState({
        scale: "scale(1)",
        opacity: 1,
        trasitionScale: "",
        transitionOpacity: "",
    });
    const[scaleImage13, setScaleImage13] = useState({
        scale: "scale(1)",
        opacity: 1,
        trasitionScale: "",
        transitionOpacity: "",
    });
    const[scaleImage14, setScaleImage14] = useState({
        scale: "scale(1)",
        opacity: 1,
        trasitionScale: "",
        transitionOpacity: "",
    });

    /* Create images */
    const createImage = imagesDate.map((elements) => {
        return(
            <figure key={elements.id} className="mainImageFigure" style={{opacity: elements.opacity, transition: elements.transitionOpacity}}>
                <img src={elements.image} alt={elements.alt} style={{transform: elements.scale, transition: elements.transitionScale}} />
                <figcaption>{elements.title}</figcaption>
            </figure>
        )
    })

    /* Assignment of some values from object imageDate to hook useState for subsequent modification of these values.  */
    const assignDate = (itemNumber, state) => {
        imagesDate[itemNumber].scale = state.scale;
        imagesDate[itemNumber].opacity = state.opacity;
        imagesDate[itemNumber].transitionScale = state.trasitionScale;
        imagesDate[itemNumber].transitionOpacity = state.transitionOpacity;
    };
    assignDate(0, scaleImageLast);
    assignDate(1, scaleImage1);
    assignDate(2, scaleImage2);
    assignDate(3, scaleImage3);
    assignDate(4, scaleImage4);
    assignDate(5, scaleImage5);
    assignDate(6, scaleImage6);
    assignDate(7, scaleImage7);
    assignDate(8, scaleImage8);
    assignDate(9, scaleImage9);
    assignDate(10, scaleImage10);
    assignDate(11, scaleImage11);
    assignDate(12, scaleImage12);
    assignDate(13, scaleImage13);
    assignDate(14, scaleImage14);

    /* Function that returns Promise, and which changes the picture. */
    const changeImage = (setScaleImage, scale, opacity, transitionScale, transitionOpacity, interval) => {
        return new Promise (resolve => setTimeout(() => {
            const result = setScaleImage({
                scale: `scale(${scale})`,
                opacity: opacity,
                trasitionScale: `transform ${transitionScale}s`,
                transitionOpacity: `opacity ${transitionOpacity}s linear ${transitionOpacity}s`,
            });
            resolve(result);
        }, interval))
    };

    useEffect(() => { 
        /* Asynchronous function that changes images sequentially one after another. */
        const imageChangeStart = async() => {
            await changeImage(setScaleImage14, 1.3, 0, 5, 3, 2000); 
            await changeImage(setScaleImage13, 1.3, 0, 5, 3, 7000); 
            await changeImage(setScaleImage12, 1.3, 0, 5, 3, 7000);
            await changeImage(setScaleImage11, 1.3, 0, 5, 3, 7000);
            await changeImage(setScaleImage10, 1.3, 0, 5, 3, 7000); 
            await changeImage(setScaleImage9, 1.3, 0, 5, 3, 7000); 
            await changeImage(setScaleImage8, 1.3, 0, 5, 3, 7000);
            await changeImage(setScaleImage7, 1.3, 0, 5, 3, 7000);
            await changeImage(setScaleImage6, 1.3, 0, 5, 3, 7000);
            await changeImage(setScaleImage5, 1.3, 0, 5, 3, 7000); 
            await changeImage(setScaleImage4, 1.3, 0, 5, 3, 7000); 
            await changeImage(setScaleImage3, 1.3, 0, 5, 3, 7000);
            await changeImage(setScaleImage2, 1.3, 0, 5, 3, 7000);
            await changeImage(setScaleImage1, 1.3, 0, 5, 3, 7000); 
            await changeImage(setScaleImageLast, 1.3, 1, 5, 0, 7000); 
        };

        /* Asynchronous function that brings all the pictures to their original state. */
        const imageChangeEnd = async() => {
            await changeImage(setScaleImage14, 1, 1, 0, 0, 4000);
            await changeImage(setScaleImage13, 1, 1, 0, 0, 0);
            await changeImage(setScaleImage12, 1, 1, 0, 0, 0);
            await changeImage(setScaleImage11, 1, 1, 0, 0, 0);
            await changeImage(setScaleImage10, 1, 1, 0, 0, 0);
            await changeImage(setScaleImage9, 1, 1, 0, 0, 0);
            await changeImage(setScaleImage8, 1, 1, 0, 0, 0);
            await changeImage(setScaleImage7, 1, 1, 0, 0, 0);
            await changeImage(setScaleImage6, 1, 1, 0, 0, 0);
            await changeImage(setScaleImage5, 1, 1, 0, 2, 0);
            await changeImage(setScaleImage4, 1, 1, 0, 0, 0);
            await changeImage(setScaleImage3, 1, 1, 0, 0, 0);
            await changeImage(setScaleImage2, 1, 1, 0, 0, 0);
            await changeImage(setScaleImage1, 1, 1, 0, 0, 0);
            await changeImage(setScaleImageLast, 1, 1, 0, 0, 0);
        };

        /* A function that runs the code with a constant change of images. */
        let timeInterval = setTimeout(function tick() {
            if(scaleImageLast.scale === "scale(1.3)" && scaleImage1.opacity === 0 && scaleImage2.opacity === 0 && scaleImage3.opacity === 0 && scaleImage4.opacity === 0 && 
            scaleImage5.opacity === 0 && scaleImage6.opacity === 0 && scaleImage7.opacity === 0 && scaleImage8.opacity === 0 && scaleImage9.opacity === 0 && scaleImage10.opacity === 0 &&
            scaleImage11.opacity === 0 && scaleImage12.opacity === 0 && scaleImage13.opacity === 0 && scaleImage14.opacity === 0) {
                imageChangeEnd(); 
            } else if(scaleImageLast.scale === "scale(1)" && scaleImage1.opacity === 1 && scaleImage2.opacity === 1 && scaleImage3.opacity === 1 && scaleImage4.opacity === 1 && 
            scaleImage5.opacity === 1 && scaleImage6.opacity === 1 && scaleImage7.opacity === 1 && scaleImage8.opacity === 1 && scaleImage9.opacity === 1 && scaleImage10.opacity === 1 &&
            scaleImage11.opacity === 1 && scaleImage12.opacity === 1 && scaleImage13.opacity === 1 && scaleImage14.opacity === 1) {
                imageChangeStart();
            }
            timeInterval = setTimeout(tick, 1000);
        }, 1000);
        return () => clearTimeout(timeInterval);
    });

    return(
        <div className="mainImageDiv">
            {createImage}  
        </div>
    );
};

export default HomeHeaderImage;