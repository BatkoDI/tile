import AboutStat from "./AboutStat";
import {useInView} from "react-intersection-observer";

function About() {
    const {ref: myRef, inView: elementIsVisible} = useInView({threshold: 0.7});
    const {ref: myRef1, inView: elementIsVisible1} = useInView({threshold: 0.7});

    return(
        <div ref={myRef} className="aboutStat">
            <div className="aboutStatLineLeft" style={{width: `${elementIsVisible  ? "100%" : "0"}`, transition: "width 0.5s"}}></div>
            <AboutStat />
            <div ref={myRef1} className="aboutStatLineLeft" style={{width: `${elementIsVisible1  ? "100%" : "0"}`, transition: "width 0.5s"}}></div>
        </div>
    );
};

export default About;



