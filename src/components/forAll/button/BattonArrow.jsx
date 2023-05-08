

function ButtonArrow(props) {
    return(
        <div className="stagesSectionButton">
            <div className="stagesSectionArrow">
                <div className="buttonLeft" onClick={props.clickLeft} style={{visibility: props.visibleLeft}}>
                    <div className="arrow1"></div>
                    <div className="arrow2"></div>
                    <div className="arrow3"></div>
                </div>
                <div className="buttonRight" onClick={props.clickRight} style={{visibility: props.visibleRight}}>
                    <div className="arrow1"></div>
                    <div className="arrow2"></div>
                    <div className="arrow3"></div>
                </div>
            </div>
        </div>
    );
}

export default ButtonArrow;