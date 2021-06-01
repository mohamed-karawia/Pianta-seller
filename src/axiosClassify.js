import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://graduationproject29.herokuapp.com/'
})

export default instance;