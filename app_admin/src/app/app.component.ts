//  * - Developer: Ryan Hatch
//  * - Date of development: 2024/28/11
// Date of last modification: 2024/2/12
// Version: 5.0
//  * - Description:

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TripListingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Admin!';
}

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { TripListingComponent } from './trip-listing/trip-listing.component';
// // import { TripCardComponent } from './trip-card/trip-card.component';
// // import { TripDataService } from './services/trip-data.service';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'Admin!';
// }
