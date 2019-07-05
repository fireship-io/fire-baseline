## 1. Install Firebase and @angular/fire

Angular apps typically depend on [@angular/fire](https://github.com/angular/angularfire2). 

```
ng add @angular/fire

// or 

npm i firebase @angular/fire
```

## 2. Add Project Credentials

Create a [Firebase](https://firebase.google.com/) project and grab your web credentials. 

![firebase-credentials](https://firebasestorage.googleapis.com/v0/b/fireship-lessons.appspot.com/o/add-app.PNG?alt=media&token=b31bcba9-4493-44de-9f21-0b60d05caee5)

Add the credentials to `src/environments/environments.ts` and `environments.prod.ts`

```
export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
    appId: '<your-app-id>'
  }
};
```

### 3. Update the App Module

Add the desired Firebase features to the App Module. 

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```