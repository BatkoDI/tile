import HeaderH3 from "../../forAll/headerH3/HeaderH3";
import dataExampleBedroom from "./dataExampleBedroom";
import dataExampleKitchen from "./dataExampleKitchen";
import dataExampleLivroom from "./dataExampleLivroom";
import dataExampleOut from "./dataExampleOut";
import ExampleBlok from "./ExampleBlok";


function Example() {

    return(
        <div className="exampleSection">
            <article className="exampleSectionArticle">
                <HeaderH3 title={"we install the tile quickly, efficiently, and most importantly not expensive"} />
            </article>
            <div className="exampleSectionImg">
                <div className="exampleSectionImgBlok">
                    <div className="exampleSectionImgBlokMarg">
                        <div className="exampleBlok">
                            <ExampleBlok data={dataExampleKitchen} />
                        </div>
                        <div className="exampleBlok">
                            <ExampleBlok data={dataExampleLivroom} />
                        </div>
                        <div className="exampleBlok">
                            <ExampleBlok data={dataExampleBedroom} />
                        </div>
                        <div className="exampleBlok">
                            <ExampleBlok data={dataExampleOut} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;