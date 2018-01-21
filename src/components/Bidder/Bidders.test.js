import React from 'react';
import { shallow } from 'enzyme';
import * as constants from '../../constants';
import Bidders from './Bidders';

beforeEach(function () {

    global.fetch = jest.fn().mockImplementation(() => {
        return new Promise((resolve, reject) => {
            resolve({
                ok: true,
                json: function () {
                    return constants.biddersMock;
                }
            });
        });
    });

});

describe('Bidders', () => {

    it('renders without crashing', () => {
        shallow(<Bidders />);
    });

});