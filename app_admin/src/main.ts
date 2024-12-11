//  * - Developer: Ryan Hatch
//  * - Date of development: 2024/28/11
// Date of last modification: 2024/2/12
// Version: 5.0
//  * - Description:

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
