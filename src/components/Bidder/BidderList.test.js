import React from 'react';
import ReactDOM from 'react-dom';
import BidderList from './BidderList';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BidderList />, div);
});
