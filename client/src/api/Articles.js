import axios from 'axios';

// Set up API connection
export default axios.create({
    baseURL: "http://localhost:8000/api/v1/articles"

})