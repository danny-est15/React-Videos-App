import axios from 'axios';

const KEY = 'AIzaSyBBRz1iM6UVwnZIO8AISfzx5Yw0EsQ_kdE';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params:{
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
});


