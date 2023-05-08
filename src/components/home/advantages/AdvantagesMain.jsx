import dataAdvantages from "./dateAdvantages";



function AdvantagesMain() {


    const createBlockMaim = dataAdvantages.map((element) => {
        return(
            <article key={element.id} className="advantagesMain_Block">
                <div className="advantagesMain_BlockIcon">
                    <div className="advantagesMain_BlockIconImg">
                        <img src={element.icon} alt={element.alt} />
                    </div>
                </div>
                <div className="advantagesMain_BlockTitle">
                    <h4>
                        {element.title}
                    </h4>
                </div>
                <div className="advantagesMain_BlockText">
                    <p>
                        {element.text}
                    </p>
                </div>
            </article>
        );
    });

    return(
        <div className="advantagesMain">
            {createBlockMaim}
        </div>
    );
};

export default AdvantagesMain;