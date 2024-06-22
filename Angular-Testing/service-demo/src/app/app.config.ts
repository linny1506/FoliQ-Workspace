import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({"projectId":"service-demo-20c1f",
      "appId":"1:890744571423:web:2000571ea9699f83a4b72a",
      "storageBucket":"service-demo-20c1f.appspot.com",
      "apiKey":"AIzaSyDuMnrOjKYWKyyTUvpF0T-6ksAnx1KW81I",
      "authDomain":"service-demo-20c1f.firebaseapp.com",
      "messagingSenderId":"890744571423"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage())]
};
