import axios from 'axios';

const token = localStorage.getItem('token');
const urlPath = axios.create({
	baseURL: `https://rfm-app.herokuapp.com/photography/royalframesmedia/`,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `${token}`
	}
});

export default urlPath;
