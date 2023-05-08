import AboutStatArticle from "./AboutStatArticle";
import aboutStateDate from "./aboutStatDate";
import {useInView} from "react-intersection-observer";

function AboutStat() {
    const {ref: myRef, inView: elementIsVisible} = useInView({threshold: 0.9});
    const {ref: myRef1, inView: elementIsVisible1} = useInView({threshold: 0.9});
    const {ref: myRef2, inView: elementIsVisible2} = useInView({threshold: 0.9});
  
    return(
        <>
            <div ref={myRef1} className="aboutStatUpper" style={{opacity: `${elementIsVisible1 ? 1 : 0}`, transform:`${elementIsVisible1 ? "translateY(0)" : "translateY(-100px)"}`, transition: `${elementIsVisible1 ? "transform 0.8s" : null}`}}>
                <AboutStatArticle text={aboutStateDate[0]} stat={`${elementIsVisible1 ? 278 : 0}`}/>
                <AboutStatArticle text={aboutStateDate[1]} stat={`${elementIsVisible1 ? 9 : 0}`} />
            </div>
            <div ref={myRef} className="aboutStatLineRight" style={{width: `${elementIsVisible  ? "100%" : "0"}`, transition: "width 0.5s"}}></div>
            <div ref={myRef2} className="aboutStatLower" style={{opacity: `${elementIsVisible2 ? 1 : 0}`, transform:`${elementIsVisible2 ? "translateY(0)" : "translateY(100px)"}`, transition: `${elementIsVisible1 ? "transform 0.8s" : null}`}}>
                <AboutStatArticle text={aboutStateDate[2]} stat={`${elementIsVisible2 ? 18 : 0}`} />
                <AboutStatArticle text={aboutStateDate[3]} stat={`${elementIsVisible2 ? 7521 : 0}`} />
            </div>
        </>
    );
};

export default AboutStat;