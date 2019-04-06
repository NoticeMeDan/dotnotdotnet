import axios from 'axios';

export default axios.create({
    baseURL: 'https://europe-west1-plantmonitor-236813.cloudfunctions.net',
    timeout: 1000,
});
