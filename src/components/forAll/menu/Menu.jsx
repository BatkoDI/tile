import AnchorLink from "react-anchor-link-smooth-scroll";
import menuLink from "./menuLink";
import "./menu.css";
import ButtonContact from "./ButtonContact";
import { useState } from "react";



function CreateLink(props) {
    return(
        <div className="menuLink">
            <AnchorLink className="menuSection" href={props.hrefPage}>{props.nameSection}</AnchorLink>
        </div>
    ); 
}

function Menu() {
    const [leftListMenu, setLeftListMenu] = useState("-100%");

    const eventClickSmallMenu = () => {
        if(leftListMenu === "-100%") {
            setLeftListMenu("0%");
        } else if (leftListMenu === "0%") {
            setLeftListMenu("-100%");
        };    
    };

    const linkMenu = menuLink.map((elements) => 
              <CreateLink key={elements.id} nameSection={elements.nameSection} hrefPage={elements.hrefPage}/>);

    return (
        <nav className="menu">
            <div className="link">
                <div className="bigMenu">
                    {linkMenu} 
                </div>
                <div className="smallMenu">
                    <div className="smallMenuLine" onClick={eventClickSmallMenu}>
                        <div className="lineTop"></div>
                        <div className="lineMidle"></div>
                        <div className="lineBottom"></div>
                    </div>
                    <div className="smallMenuList" style={{left: leftListMenu}}>
                        {linkMenu}
                    </div>
                </div>
            </div>
            <div className="contactUs">
                <ButtonContact />
            </div>
        </nav>
    );
}

export default Menu;