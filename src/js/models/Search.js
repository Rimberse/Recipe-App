import axios from 'axios';
// import { key, proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    };

    async getResults() {
        try {
            // const res = await axios(`https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${key}`);         // alternative
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch(error) {
            alert(error);
        }
    };
};