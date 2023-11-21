import {keys} from "./keys.js";

const getUserEvents = (username) => {
    const url = `https://api.github.com/users/${username}/events`;
    const options = {
        method: 'Get',
        headers: {
            'Authorization': `token ${keys.github}`,
        },
    };
    return fetch(url, options)
        .then(response => response.json())
        .catch(error => console.error(error));
};

//main

(async () => {
    getUserEvents('mdevine23').then((event) => {
        console.log(event[0]);
    });


})();