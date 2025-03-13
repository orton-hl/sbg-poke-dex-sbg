import {ApplicationConfig} from '@angular/core';

import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeng/themes/aura';
import {provideHttpClient} from '@angular/common/http';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {FIREBASE_OPTIONS} from '@angular/fire/compat';
import {environment} from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    provideHttpClient(),
    provideRouter(routes),
    provideFirebaseApp( () => initializeApp(environment.firebaseConfig)),
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
  ]
};
