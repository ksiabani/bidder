import React from 'react';
import Bidder from './Bidder';
import './BidderList.css';
import api from '../../api';

const BidderList = (props) => (
    <div className="bidder-list">
        <div className="bidder-list__name">{props.name}</div>
        {
            api.all()
                .filter((bidder) => bidder.state === props.state)
                .map((bidder) => <Bidder
                    key={bidder.id}
                    id={bidder.id}
                    name={bidder.name}
                    endpoint={bidder.endpoint}
                    action={props.state === "LIVE" ? "Check your bidder" : "Validate your bidder"}
                />)
        }
    </div>
);

export default BidderList;