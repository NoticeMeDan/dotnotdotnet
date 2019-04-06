import RestClient from '../../util/RestClient';

const getData = () =>
    RestClient.get('/storeMeasurements');

export default getData;
