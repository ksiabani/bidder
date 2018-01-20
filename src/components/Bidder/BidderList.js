import React from 'react';
import Bidder from './Bidder';

const BidderList = (props) => (
    <div className="bidders-list" data-testid={props.state}>
        <div className="bidders-list__name">{props.name}</div>
        {
            props.bidders
                .filter((bidder) => bidder.state === props.state)
                .map((bidder) => <Bidder
                    key={bidder.id}
                    id={bidder.id}
                    bidder={bidder}
                    name={bidder.name}
                    endpoint={bidder.endpoint}
                    action={props.state === "LIVE" ? "Check your bidder" : "Validate your bidder"}
                />)
        }
    </div>
);

export default BidderList;