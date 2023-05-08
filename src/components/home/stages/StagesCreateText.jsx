import dataStages from "./dataStages";




function StagesCreateText(props) {
    const createText= dataStages[props.index].text.map((elem) => {
        return(
            <p key={elem.id}>
                {elem.subText}
            </p>
        )
    }) 

    return(
        <div className="stagesSectionBlok_TextP">
            {createText}
        </div>
    )
}

export default StagesCreateText;