import dataStages from "./dataStages";
import StagesCreateText from "./StagesCreateText";



function StagesMainBlok(props) {

    const createBlok = dataStages.map((elements) => {
        return(
            <article key={elements.id} className="stagesSectionBlok">
                <div className="stagesSectionBlok_Title">
                    <h4>
                        {elements.title}
                    </h4>
                </div>
                <div className="stagesSectionBlok_Text">
                    <StagesCreateText index={elements.id} />
                </div>
                <div className="stagesSectionBlok_Number">
                    {elements.number}
                </div>
            </article>
        )
    })

    return(
        <div className="stagesSectionTapeDiv" style={{transform: `translateX(${props.translate}%)`}}>
            {createBlok}
        </div>
    );
}

export default StagesMainBlok;