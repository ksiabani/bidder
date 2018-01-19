import React from 'react';
import Loader from '../Loader/Loader';
import './BidderForm.css';

const BidderForm = (props) => {
    return (
        <form className="bidder-form" data-testid="bidderForm">
            <div className="bidder-form__input-group">
                <div className="bidder-form__input">
                    <label className="title-label" htmlFor="name"> Bidder name</label>
                    <input
                        value={props.bidder.name}
                        name="name"
                        type="text"
                        placeholder="TYPE BIDDER'S NAME HERE"
                        onChange={props.onChange}
                        data-testid="inputNameBidder"
                    />
                </div>
                <div className="bidder-form__input">
                    <label className="title-label" htmlFor="endpoint"> Endpoint URL</label>
                    <input
                        value={props.bidder.endpoint}
                        name="endpoint"
                        type="text"
                        placeholder="TYPE ENDPOINT URL HERE"
                        onChange={props.onChange}
                    />
                </div>
            </div>
            <hr/>
            <button
                type="submit"
                // disabled={saving}
                // value={saving ? 'Saving...' : 'Save'}
                className="button alert bidder-form__button"
                onClick={props.onSave}
                data-testId="bidderSubmitButton"
            >
                {props.isSaving ? <Loader /> : 'Save'}
            </button>
        </form>
    );
};

BidderForm.propTypes = {
    // course: React.PropTypes.object.isRequired,
    // allAuthors: React.PropTypes.array,
    // onSave: React.PropTypes.func.isRequired,
    // onChange: React.PropTypes.func.isRequired,
    // saving: React.PropTypes.bool,
    // errors: React.PropTypes.object
};

export default BidderForm;