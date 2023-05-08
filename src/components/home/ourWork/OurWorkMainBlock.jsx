import IconVideo from "../../forAll/IconVideo";


function OurWorkMainBlock(props) {

    const createBlock = props.data.map((element) => {
        return(
            <div key={element.id} className="ourWorkSectionBlock">
                <div className="ourWorkSectionBlock_Article">
                    <div className="ourWorkSectionBlock_ArticleImg">
                        <IconVideo />
                    </div>
                    <div className="ourWorkSectionBlock_ArticleTitle">
                        <h4>
                            {element.title}
                        </h4>
                        <p>
                            {element.text}
                        </p>
                    </div>
                </div>
                <div className="ourWorkSectionBlock_Img">
                    <div className="ourWorkSectionBlock_ImgView">
                        <div className="ourWorkSectionBlock_ImgViewIn">
                            <img src={element.image} alt={element.alt} />
                        </div>
                    </div>
                    <div className="ourWorkSectionBlock_ImgNumber" style={{width: props.width[element.id]}}>
                        <p style={{opacity: props.opacity[element.id]}}>
                            {element.number}
                        </p>
                    </div>
                </div>
            </div>
        );
    });

    return(
        <div className="ourWorkSectionTapeDiv" style={{transform: `translateX(${props.translate}%)`}}>
            {createBlock}
        </div>
    );
};

export default OurWorkMainBlock;