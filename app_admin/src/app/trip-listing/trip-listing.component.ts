//  * - Developer: Ryan Hatch
//  * - Date of development: 2024/28/11
// Date of last modification: 2024/2/12
// Version: 5.0
//  * - Description:

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trips } from '../data/trips';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css']
})
export class TripListingComponent implements OnInit {
  trips = trips;

  constructor() {}

  ngOnInit(): void {}
}

//* Old Copies of trip-listing.component.ts that I ended up keeping for reference.

// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Trips } from '../data/trips';

// // @Component({
// //   selector: 'app-trip-listing',
// //   standalone: true,
// //   imports: [CommonModule],
// //   templateUrl: './trip-listing.component.html',
// //   styleUrls: ['./trip-listing.component.css']
// // })

// // export class TripListingComponent implements OnInit {
// //   trips: Array<any> = Trips; // Trips is an array of objects

// //   constructor() {}

// //   ngOnInit(): void {
// //   }
// // }

// @Component({
//   selector: 'app-trip-listing',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './trip-listing.component.html',
//   styleUrls: ['./trip-listing.component.css']
// })
// export class TripListingComponent implements OnInit {
//   trips = trips;

//   constructor() {}

//   ngOnInit(): void {}
// }

// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Trip } from '../data/trips';
// import { TripCardComponent } from '../trip-card/trip-card.component'; // Adjust the path as needed
// import { TripDataService } from '../services/trip-data.service'; // Adjust the path as needed
// import { Router } from '@angular/router';

// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-trip-listing',
//   standalone: true,
//   imports: [CommonModule, TripCardComponent],
//   templateUrl: './trip-listing.component.html',
//   styleUrl: './trip-listing.component.css',
// })
// export class TripListingComponent implements OnInit {
//   trips!: Trip[];
//   message: string = '';

//   constructor(
//     private tripDataService: TripDataService,
//     private router: Router
//   ) {
//     console.log('trip-listing constructor');
//   }

//   public addTrip(): void {
//     this.router.navigate(['add-trip']);
//   }

//   private getStuff(): void {
//     this.tripDataService.getTrips().subscribe({
//       next: (value: any) => {
//         this.trips = value;
//         if (value.length > 0) {
//           this.message = 'There are ' + value.length + ' trips available.';
//         } else {
//           this.message = 'There were no trips retrieved from the database.';
//         }
//         console.log(this.message);
//       },
//       error: (error: any) => {
//         console.log('Error: ' + error);
//       },
//     });
//   }

//   ngOnInit(): void {
//     console.log('ngOnInit');
//     this.getStuff();
//   }
// }

// //* Version 2 attempt

// import { Component, OnInit } from '@angular/core';
// import { trips } from '../data/trips';

// @Component({
//   selector: 'app-trip-listing',
//   templateUrl: './trip-listing.component.html',
//   styleUrls: ['./trip-listing.component.css']
// })
// export class TripListingComponent implements OnInit {
//   trips = trips;

//   ngOnInit(): void {
//     // Additional initialization logic can go here
//   }
// }

// //* Version 1 attempt

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-trip-listing',
//   imports: [],
//   templateUrl: './trip-listing.component.html',
//   styleUrl: './trip-listing.component.css'
// })
// export class TripListingComponent {

// }
