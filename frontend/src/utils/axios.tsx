import Axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL;
if ( !BASE_URL ) throw new Error("'VITE_BASE_URL' does not found in '.env'");

const axios = Axios.create({
    baseURL: BASE_URL,
});


export default axios