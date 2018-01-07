import React from 'react';
// import api from '../../api';
// import {Link} from 'react-router-dom';
import BidderList from '../BidderList/BidderList';
import './Bidders.css';

const Bidders = () => (
    <div className="bidders">
        <i className="icon design_code x3 bidders__icon"/>
        <h6>View your bidders</h6>
        <span className="bidders__hr"></span>
        <div className="bidders__cols">
            <BidderList name={"1. Submitted"} state={"CREATED"}/>
            <BidderList name={"2. Live"} state={"LIVE"}/>
        </div>
    </div>
);

export default Bidders;