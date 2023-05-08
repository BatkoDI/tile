import "./headerH3.css"
import { useInView } from "react-intersection-observer";


function HeaderH3(props) {
    const {ref: myRef, inView: elementIsVisible} = useInView({threshold: 0.5});

    return(
        <h3 ref={myRef} style={{opacity: `${elementIsVisible ? 1 : 0}`, transform:`${elementIsVisible ? "translateX(0)" : "translateX(150px)"}`, transition: `${elementIsVisible ? "transform 0.8s" : null}`}}>
            {props.title} 
        </h3>
    );
}

export default HeaderH3;