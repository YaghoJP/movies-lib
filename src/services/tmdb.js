import axios from "axios";

const apiKey = process.env.REACT_APP_KEY;

const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: apiKey,
        language: 'pt-br'
    }
});

export default tmdb;