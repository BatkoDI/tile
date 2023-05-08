import FormSubmit from "../../forAll/FormSubmit";




function FormSubmitHeader(props) {


    return(
        <section className="formSubmit" style={{left: props.formLeft}}>
            <FormSubmit />
            <div className="closeForm" onClick={props.eventDasappearances}>
                <div className="closeForm_One"></div>
                <div className="closeForm_Two"></div>
            </div>
        </section>
    );
};

export default FormSubmitHeader;