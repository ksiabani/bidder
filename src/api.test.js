import React from 'react';
import Api from './api';

describe('Data returned from API', () => {

    it('should return an array of bidders', async () => {
        const data = await Api.all();
        expect(data).not.toHaveLength(0);
    });

    it('should have properties id, name, endpoint and state', async () => {
        const data = await Api.all();
        expect(data).toBeDefined()
        expect(data[0]).toHaveProperty('id');
        expect(data[0]).toHaveProperty('name');
        expect(data[0]).toHaveProperty('endpoint');
        expect(data[0]).toHaveProperty('state');
    });

});