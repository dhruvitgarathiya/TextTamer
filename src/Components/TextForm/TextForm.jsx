import PropTypes from "prop-types";

export default function TextForm(props){
    return(
        <div>
            <h1>{props.heading}</h1>
             <div className="mb-3">
              <label for="myBox" className="form-label">start from here</label>
              <textarea className="form-control" id="myBox" rows="8"></textarea>
             </div>
        </div>
    )
}

TextForm.PropType = {
    heading : PropTypes.string.isRequired
};