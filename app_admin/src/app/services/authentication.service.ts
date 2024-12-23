import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { TripDataService } from '../services/trip-data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedInStatus = false;

  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private tripDataService: TripDataService,
    private http: HttpClient
  ) {}

  // Variable to handle Authentication Responses
  authResp: AuthResponse = new AuthResponse();

  // Get our token from our Storage provider.
  public getToken(): string {
    let out: any;
    out = this.storage.getItem('ryanshatchapp-token');
    if (!out) {
      return '';
    }
    return out;
  }

  // Save our token to our Storage provider.
  public saveToken(token: string): void {
    this.storage.setItem('ryanshatchapp-token', token);
  }

  // Logout of our application and remove the JWT from Storage
  public logout(): void {
    this.storage.removeItem('ryanshatchapp-token');
  }

  public isLoggedIn(): boolean {
    return this.isLoggedInStatus;
  }

  public getCurrentUser(): User {
    const token: string = this.getToken();
    const { email, name } = JSON.parse(atob(token.split('.')[1]));
    return { email, name } as User;
  }

  // Login method that leverages the login method in tripDataService
  public login(user: User, passwd: string): Observable<any> {
    // Implement the login logic here, e.g., make an HTTP request to the backend API
    // this.http.post('/api/login', { user, password }).subscribe(response => {
    //   if (response.success) {
    //     this.isLoggedInStatus = true;
    //   }
    // });
    return this.http.post<any>('/api/login', { user, passwd });
  }

  // Register method that leverages the register method in tripDataService
  public register(user: User, passwd: string): void {
    this.tripDataService.register(user, passwd).subscribe({
      next: (value: any) => {
        if (value) {
          this.authResp = value;
          this.saveToken(this.authResp.token);
          this.isLoggedInStatus = true;
        }
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      },
    });
  }
}
