import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Bidder from './Bidder';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Bidder />, div);
});
