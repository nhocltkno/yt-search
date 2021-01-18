import axios from 'axios'

const KEY ='AIzaSyCbHMUks6tO9uWV02qbdqo2oAPuPGu4HoQ';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})