import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/functions';

const config = {
    apiKey: 'AIzaSyCNGXNpOeRLQcJnuSgUXLv8sWcPhvJfyVA',
    authDomain: 'fireship-lessons.firebaseapp.com',
    databaseURL: 'https://fireship-lessons.firebaseio.com',
    projectId: 'fireship-lessons',
    storageBucket: 'fireship-lessons.appspot.com',
    messagingSenderId: '758773997881',
    appId: '1:758773997881:web:8991643725992873'
}

firebase.initializeApp(config);

export const app = firebase.app();
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const functions = firebase.functions();

console.log(!!app.name ? 'Firebase Mode Activated!' : 'Firebase not working :(')