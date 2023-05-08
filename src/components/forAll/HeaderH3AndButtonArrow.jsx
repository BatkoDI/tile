import "./headerH3AndButtonArrow.css"
import HeaderH3 from "./headerH3/HeaderH3";
import ButtonArrow from "./button/BattonArrow";


function HeaderH3AndButtonArrow(props) {
    return(
        <div className="headerH3AndButtonArrowSection">
            <HeaderH3 title={props.title} />
            <ButtonArrow clickLeft={props.clickLeft} clickRight={props.clickRight} visibleLeft={props.visibleLeft} visibleRight={props.visibleRight} />
        </div>
    );
};

export default HeaderH3AndButtonArrow;