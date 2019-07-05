## 1. Install Firebase and Vuefire

Vue apps typically depend on [vuefire](https://github.com/angular/angularfire2). 

```
npm install vuefire firebase
```

## 2. Add the Plugin

Add the plugin to the `src/main.js` file. 

```
import Vue from 'vue'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)
```

## 3. Initialize Firebase

Create a [Firebase](https://firebase.google.com/) project and grab your web credentials. 

![firebase-credentials](https://firebasestorage.googleapis.com/v0/b/fireship-lessons.appspot.com/o/add-app.PNG?alt=media&token=b31bcba9-4493-44de-9f21-0b60d05caee5)

Create a new file named `src/firebase.js` to initialize firebase and import the desired features. 

```
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/functions';

const config = {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
    appId: '<your-app-id>'
}

firebase.initializeApp(config);

export const app = firebase.app();
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const functions = firebase.functions()
```
