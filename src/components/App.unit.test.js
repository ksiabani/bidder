import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import App from './App';

beforeEach(function() {

    global.fetch = jest.fn().mockImplementation(() => {
        let p = new Promise((resolve, reject) => {
            resolve({
                ok: true,
                json: function() {
                    return [
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
                    ];
                }
            });
        });

        return p;
    });

});


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <App/>
        </MemoryRouter>, div);
});
