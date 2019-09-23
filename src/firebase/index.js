import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyA94Wc7yxRK8QOKINaKU305lTidUXh9B78',
	authDomain: 'royalframemedia-b5598.firebaseapp.com',
	databaseURL: 'https://royalframemedia-b5598.firebaseio.com',
	projectId: 'royalframemedia-b5598',
	storageBucket: 'royalframemedia-b5598.appspot.com',
	messagingSenderId: '457794441418',
	appId: '1:457794441418:web:1034e6413e90d2fb292433'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
