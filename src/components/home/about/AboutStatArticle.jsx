import CountUp from "react-countup";


function AboutStatArticle(props) {
  
    return(
        <article className="aboutStatArticle">
            <p className="aboutStatArticle_Stat">
                <CountUp end={props.stat} separator=" " />
            </p>
            <p className="aboutStatArticle_Text">
                {props.text}
            </p>
        </article>
    );
};

export default AboutStatArticle;