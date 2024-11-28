import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideClientHydration(), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp(
      {"projectId":"contacts-b9881",
      "appId":"1:1020590382006:web:b7ed392a6f908d4367bf17",
      "storageBucket":"contacts-b9881.appspot.com",
      "apiKey":"AIzaSyCNQzAlJ2Y-TXGCXJQYYiV6coaYtRMxVGI",
      "authDomain":"contacts-b9881.firebaseapp.com",
      "messagingSenderId":"1020590382006"}))),
       importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage()))]
};
