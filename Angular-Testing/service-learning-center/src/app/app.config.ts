import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideHttpClient(),    // allows for http injected services: https://www.geeksforgeeks.org/using-a-http-service-in-angular-17-with-standalone-components/#approach-2-creating-a-standalone-service-with-httpclient-injected
  ]
};
