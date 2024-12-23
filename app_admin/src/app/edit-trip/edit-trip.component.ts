import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';
import { AuthService } from '../services/auth.service'; // Assuming you have an AuthService to manage authentication

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css',
})
export class EditTripComponent implements OnInit {
  public editForm!: FormGroup;
  trip!: any;
  submitted = false;
  message: string = '';
  userHasEditPermission = false;
  userHasDeletePermission = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripDataService: TripDataService,
    private authService: AuthService // Assuming you have an AuthService to manage authentication
  ) {}

  ngOnInit(): void {
    let tripCode = localStorage.getItem('tripCode');
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }
    console.log('EditTripComponent::ngOnInit');
    console.log('tripCode: ' + tripCode);

    // initialize form
    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.tripDataService.getTrip(tripCode).subscribe({
      next: (value: any) => {
        this.trip = value;
        // Populate our record into the form
        this.editForm.patchValue(value[0]);
        if (!value) {
          this.message = 'No Trip Retrieved!';
        } else {
          this.message = 'Trip: ' + tripCode + ' retrieved';
        }
        console.log(this.message);
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      },
    });

    // Check user permissions
    this.userHasEditPermission = this.authService.hasPermission('edit');
    this.userHasDeletePermission = this.authService.hasPermission('delete');
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.editForm.valid) {
      this.tripDataService.updateTrip(this.editForm.value).subscribe({
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        },
      });
    }
  }
  // get the form short name to access the form fields
  get f() {
    return this.editForm.controls;
  }

  deleteTrip(): void {
    const tripCode = this.editForm.get('code')?.value;
    if (confirm(`Are you sure you want to delete the trip with code ${tripCode}?`)) {
      this.tripDataService.deleteTrip(tripCode).subscribe({
        next: (value: any) => {
          console.log('Trip deleted:', value);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error:', error);
        },
      });
    }
  }

}
