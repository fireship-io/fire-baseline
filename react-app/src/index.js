import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FirebaseAppProvider } from 'reactfire';
import 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/functions';
import 'firebase/performance';

const config = {
    apiKey: 'AIzaSyCNGXNpOeRLQcJnuSgUXLv8sWcPhvJfyVA',
    authDomain: 'fireship-lessons.firebaseapp.com',
    databaseURL: 'https://fireship-lessons.firebaseio.com',
    projectId: 'fireship-lessons',
    storageBucket: 'fireship-lessons.appspot.com',
    messagingSenderId: '758773997881',
    appId: '1:758773997881:web:8991643725992873'
}


ReactDOM.render(
    <FirebaseAppProvider firebaseConfig={config} initPerformance>
        <App />
    </FirebaseAppProvider>
, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
