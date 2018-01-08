import React from 'react';
import {Link} from 'react-router-dom';
import './BidderForm.css';
// import TextInput from '../common/TextInput';
// import SelectInput from '../common/SelectInput';

const CourseForm = (props) => {
    return (
        <div className="bidders">
            <i className="icon design_code x3 bidders__icon"/>
            <div className="bidders__breadcrumbs">
                <Link to="/bidders">View your bidders</Link>
                <i className="icon arrows-1_minimal-right"/>
                <span>Bidder 1</span>
            </div>
            <form className="bidder-form">
                <div className="bidder-form__input">
                    <label className="title-label" htmlFor="name"> Bidder name</label>
                    <input value={props.bidder.name} name="name" type="text" placeholder="TYPE BIDDER'S NAME HERE" className="bottom-spacing-half-x"/>
                </div>
                <div className="bidder-form__input">
                    <label className="title-label" htmlFor="endpoint"> Endpoint URL</label>
                    <input value={props.bidder.endpoint} name="endpoint" type="text" placeholder="TYPE ENDPOINT URL HERE" />
                </div>
            </form>
        </div>
    );
};

CourseForm.propTypes = {
    // course: React.PropTypes.object.isRequired,
    // allAuthors: React.PropTypes.array,
    // onSave: React.PropTypes.func.isRequired,
    // onChange: React.PropTypes.func.isRequired,
    // saving: React.PropTypes.bool,
    // errors: React.PropTypes.object
};

export default CourseForm;