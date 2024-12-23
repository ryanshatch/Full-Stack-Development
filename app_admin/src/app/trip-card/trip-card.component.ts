import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
// import { TripDataService } from '../services/trip-data.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css',
})
export class TripCardComponent implements OnInit {
  @Input('trip') trip: any;

  // constructor(private router: Router,
  //   private authenticationService: AuthenticationService
  // ) {}
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  public deleteTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['delete-trip']);
  }

  //* Optional chaining to safely access isLoggedIn method of authenticationService
  public isLoggedIn(): boolean {
    // If authenticationService is undefined or null, return false
    return this.authenticationService?.isLoggedIn() ?? false;}


  // public onLogout(): void {
  //   return this.authenticationService.logout();
  // }
}
