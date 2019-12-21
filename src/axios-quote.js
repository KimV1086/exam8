import axios from 'axios';

const instance = axios.create({

    baseURL: 'https://exam8-82792.firebaseio.com/'

});


export default instance;
