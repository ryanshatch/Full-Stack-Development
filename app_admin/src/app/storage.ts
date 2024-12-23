//* The 'Storage' class is a service added to the application through the 'BROWSER_STORAGE' InjectionToken. It uses the browser's local storage to keep data organized and easy to access.
// - With this service, the application can store and pull data from different parts, making sure everything stays consistent and available no matter where you are in the application.

import { Injectable, InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});

export class Storage {}

/*
// @Injectable({
//   providedIn: 'root'
// })
*/

/*
// import { Injectable, InjectionToken } from '@angular/core';

// export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
//   providedIn: 'root', factory: () => localStorage });

//   // This is a factory function that returns the localStorage object and is called when the service is created and it returns the localStorage object.
// //   factory: () => localStorage });

// export class Storage {
// }
*/
