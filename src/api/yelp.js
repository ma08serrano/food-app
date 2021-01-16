import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 
        'Bearer Hg-WQajZGsfM4lfC-bizbyj4uHX-OWSNuUhv5vYSF0IeN3W3Uu9KECgvUfw02N4q21cC69S4FEVolQQSGbQGxSaDZ-Ef_O6hhkDfJ-FC5DUomgLCfksISVBGWIDWX3Yx'
    }
});