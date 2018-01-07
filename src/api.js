// A simple data API that will be used to get the data for our
// components.
const biddersAPI = {
    bidders: [
        {
            "id": "e7fe51ce-4f63-7687-6353-ff0961c2eb0d",
            "name": "Bidder 1",
            "endpoint": "https://mybidder.com/bids",
            "state": "CREATED"
        },
        {
            "id": "d7f4f63e-c2cb-7687-c2cb-ff6353c2cb0e",
            "name": "Bidder 2",
            "endpoint": "https://test.bidder.com/bids",
            "state": "LIVE"
        },
        {
            "id": "ff0961c2-4f63-7687-6353-fd7f4f63eb0b",
            "name": "Bidder 3",
            "endpoint": "https://mybidrequest.my-example-bidder-endpoint.com/bidsRequests/id/12345689/987654321/000076",
            "state": "LIVE"
        }
    ],
    all: function() { return this.bidders},
    get: function(id) {
        const isBidder = b => b.id === id;
        return this.bidders.find(isBidder);
    }
};

export default biddersAPI;
