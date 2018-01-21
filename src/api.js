import * as constants from './constants';

class Api {
    static all() {
        return fetch(constants.API, {
            method: 'GET'
        })
            .then((response) => {
                if(response.ok) {
                    return response.json();
                } else {
                    console.log('Fetch failed with status:', response.statusText);
                }
            })
            .catch((error) => {
                throw new Error('fetch failed' + error);
            });
    }

    static get(id) {
        return fetch(`${constants.API}/${id}`, {
            method: 'GET'
        })
            .then((response) => {
                if(response.ok) {
                    return response.json();
                } else {
                    console.log('Fetch failed with status:', response.statusText);
                }
            })
            .catch((error) => {
                throw new Error('fetch failed' + error);
            });
    }

    static put(id, data) {
        return fetch(`${constants.API}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if(response.ok) {
                    return response.json();
                } else {
                    console.log('Fetch failed with status:', response.statusText);
                }
            })
            .catch((error) => {
                throw new Error('fetch failed' + error);
            });
    }
}

export default Api;