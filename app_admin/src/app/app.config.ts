//  * - Developer: Ryan Hatch
//  * - Date of development: 2024/28/11
// Date of last modification: 2024/2/12
// Version: 5.0
//  * - Description:

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
