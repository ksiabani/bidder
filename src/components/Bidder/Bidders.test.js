import React from 'react';
import { shallow } from 'enzyme';
import Bidders from './Bidders';

beforeEach(function () {

    global.fetch = jest.fn().mockImplementation(() => {
        let p = new Promise((resolve, reject) => {
            resolve({
                ok: true,
                json: function () {
                    return ;
                }
            });
        });

        return p;
    });

});

describe('Bidders', () => {

    it('renders without crashing', () => {
        shallow(<Bidders />);
    });

});