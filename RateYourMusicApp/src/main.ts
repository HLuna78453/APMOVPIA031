import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({"projectId":"rymapp-unofficial-1948924","appId":"1:584881246596:web:1205d5ffaec9b3b5c0cdd1","storageBucket":"rymapp-unofficial-1948924.firebasestorage.app","apiKey":"AIzaSyDUpSHZSeDA_x_ZmIJ2_w2fNPBzuUsFxIw","authDomain":"rymapp-unofficial-1948924.firebaseapp.com","messagingSenderId":"584881246596"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
});
