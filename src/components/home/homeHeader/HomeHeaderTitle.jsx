import { useEffect, useState } from "react";
import homeHeaderTitleDate from "./homeHeaderTitleDate";


function HomeHeaderTitle() {
    const[title, setTitle] = useState(homeHeaderTitleDate[0]);
    const[manageTitle, setManageTitle] = useState({
        left: "30%",
        transition: "left 0.7s",
    })

    const asyncChange = async(transitionLeft, item, interval) => {
        const changePosition = (transitionLeft) => {
            return new Promise((resolve) => setTimeout(() => {
                const resultPosition = setManageTitle({
                    left: `${transitionLeft}%`,
                    transition: "left 1s",
                });
                resolve(resultPosition);
            }, interval));          
        };
        const changeTitle = (item) => {
            return new Promise((resolve) => setTimeout(() => {
                const resultTitle = setTitle(homeHeaderTitleDate[item]);
                resolve(resultTitle);
            }, 1000)); 
        };
    
        await changePosition(transitionLeft);
        await changeTitle(item);
    };

    useEffect(() => {
        const mediaScreenless500px = window.matchMedia("(max-width: 500px)");
        let timeInterval = setTimeout(function tick() {
            if(mediaScreenless500px.matches) {
                if(title === homeHeaderTitleDate[0] && (manageTitle.left === "10%" || manageTitle.left === "30%")) {
                    asyncChange(-100, 1, 5000);
                } else if(title === homeHeaderTitleDate[1] && manageTitle.left === "-100%") {
                    asyncChange(10, 1, 0);
                } else if(title === homeHeaderTitleDate[1] && (manageTitle.left === "10%" || manageTitle.left === "30%")) {
                    asyncChange(-100, 2, 5000);
                } else if(title === homeHeaderTitleDate[2] && manageTitle.left === "-100%") {
                    asyncChange(10, 2, 0);
                } else if(title === homeHeaderTitleDate[2] && (manageTitle.left === "10%" || manageTitle.left === "30%")) {
                    asyncChange(-100, 3, 5000);
                } else if(title === homeHeaderTitleDate[3] && manageTitle.left === "-100%") {
                    asyncChange(10, 3, 0);
                } else if(title === homeHeaderTitleDate[3] && (manageTitle.left === "10%" || manageTitle.left === "30%")) {
                    asyncChange(-100, 4, 5000);
                } else if(title === homeHeaderTitleDate[4] && manageTitle.left === "-100%") {
                    asyncChange(10, 4, 0);
                } else if(title === homeHeaderTitleDate[4] && (manageTitle.left === "10%" || manageTitle.left === "30%")) {
                    asyncChange(-100, 0, 5000);
                } else if(title === homeHeaderTitleDate[0] && manageTitle.left === "-100%") {
                    asyncChange(10, 0, 0);
                }
            } else {
                if(title === homeHeaderTitleDate[0] && (manageTitle.left === "30%" || manageTitle.left === "10%")) {
                    asyncChange(-100, 1, 5000);
                } else if(title === homeHeaderTitleDate[1] && manageTitle.left === "-100%") {
                    asyncChange(30, 1, 0);
                } else if(title === homeHeaderTitleDate[1] && (manageTitle.left === "30%" || manageTitle.left === "10%")) {
                    asyncChange(-100, 2, 5000);
                } else if(title === homeHeaderTitleDate[2] && manageTitle.left === "-100%") {
                    asyncChange(30, 2, 0);
                } else if(title === homeHeaderTitleDate[2] && (manageTitle.left === "30%" || manageTitle.left === "10%")) {
                    asyncChange(-100, 3, 5000);
                } else if(title === homeHeaderTitleDate[3] && manageTitle.left === "-100%") {
                    asyncChange(30, 3, 0);
                } else if(title === homeHeaderTitleDate[3] && (manageTitle.left === "30%" || manageTitle.left === "10%")) {
                    asyncChange(-100, 4, 5000);
                } else if(title === homeHeaderTitleDate[4] && manageTitle.left === "-100%") {
                    asyncChange(30, 4, 0);
                } else if(title === homeHeaderTitleDate[4] && (manageTitle.left === "30%" || manageTitle.left === "10%")) {
                    asyncChange(-100, 0, 5000);
                } else if(title === homeHeaderTitleDate[0] && manageTitle.left === "-100%") {
                    asyncChange(30, 0, 0);
                }
            }
            timeInterval = setTimeout(tick, 2000);
        }, 2000);
        return () => clearTimeout(timeInterval);
    })

    return(
        <div className="homeHeaderTitle" style={{left: manageTitle.left, transition: manageTitle.transition}}>
            <h2>
                {title}
            </h2>
        </div>
    )
};

export default HomeHeaderTitle;