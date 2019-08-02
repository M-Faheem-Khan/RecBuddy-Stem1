import React from 'react';
import ReactDOM from 'react-dom';
// Styles
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
// App Component
import App from './App';
// Service Worker
import registerServiceWorker from './registerServiceWorker';
// Navigation
import { BrowserRouter as Router } from 'react-router-dom';
// Firebase
import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCt-tqxiVJgwkmNcOYHzCv2Qi1dgU5h3Hs",
    authDomain: "fir-blog-247323.firebaseapp.com",
    databaseURL: "https://fir-blog-247323.firebaseio.com",
    projectId: "firebase-blog-247323",
    storageBucket: "firebase-blog-247323.appspot.com",
    messagingSenderId: "398740179487",
    appId: "1:398740179487:web:192f57a4c9478fa6"
};

firebase.initializeApp(firebaseConfig);


ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
