import mainVideoImage from "../../video/mainVideoImage.jpg";
import mainVideoMP4 from "../../video/mainVideoMP4.mp4";
import mainVideoWEBM from "../../video/mainVideoWEBM.webm";


function IconVideo() {
    return(
        <video className="mainVideo" poster={mainVideoImage} loop autoPlay muted>
            <source src={mainVideoMP4} type="video/mp4" />
            <source src={mainVideoWEBM} type="video/webm" />
        </video>
    );
}

export default IconVideo;