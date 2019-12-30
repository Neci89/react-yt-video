import axios from 'axios';

const KEY = 'AIzaSyCSawOsyJEJ4J7H6jX1ee-cvDfmgHFOWy8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: `${KEY}`
  }
})