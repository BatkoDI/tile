


function ExampleBlok(props) {

    const listImages = props.data.map((element) => {
        return(
            <div key={element.id} className="exampleBlokOne">
                <img src={element.image} alt={element.alt} />
            </div>
        )
    });
    
    return(
        <>
            {listImages}
        </>
    );
}

export default ExampleBlok;