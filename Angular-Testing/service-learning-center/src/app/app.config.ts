import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideHttpClient(),  // allows for http injected services: https://www.geeksforgeeks.org/using-a-http-service-in-angular-17-with-standalone-components/#approach-2-creating-a-standalone-service-with-httpclient-injected
    provideFirebaseApp(() => initializeApp({
      "projectId":"hello-world-f1d26",
      "appId":"1:38168539527:web:8f379a03ea135f3c902322",
      "storageBucket":"hello-world-f1d26.appspot.com",
      "apiKey":"AIzaSyBUP3rY_syPCz4QdvryJNHFGFBWHZzRdOA",
      "authDomain":"hello-world-f1d26.firebaseapp.com",
      "messagingSenderId":"38168539527",
      "measurementId":"G-DCJ5NLYVCS"})),
      provideFirestore(() => getFirestore()),    
  ]
};
