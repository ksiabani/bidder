import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';


const BidderForm = ({onChange, onSave, bidder, isSaving}) => {
    return (
        <form className="bidder-form" data-testid="bidderForm">
            <div className="bidder-form__input-group">
                <div className="bidder-form__input">
                    <label className="title-label" htmlFor="name"> Bidder name</label>
                    <input
                        value={bidder.name}
                        name="name"
                        type="text"
                        placeholder="TYPE BIDDER'S NAME HERE"
                        onChange={onChange}
                        data-testid="inputNameBidder"
                    />
                </div>
                <div className="bidder-form__input">
                    <label className="title-label" htmlFor="endpoint"> Endpoint URL</label>
                    <input
                        value={bidder.endpoint}
                        name="endpoint"
                        type="text"
                        placeholder="TYPE ENDPOINT URL HERE"
                        onChange={onChange}
                    />
                </div>
            </div>
            <hr/>
            <button
                type="submit"
                className="button alert bidder-form__button"
                onClick={onSave}
                data-testid="bidderSubmitButton"
            >
                {isSaving ? <Loader /> : 'Save'}
            </button>
        </form>
    );
};

BidderForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    bidder: PropTypes.object.isRequired,
    isSaving: PropTypes.bool.isRequired
};

export default BidderForm;
