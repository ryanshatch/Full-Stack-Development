import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import { User } from "../models/user";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  public formError: string = "";
  submitted = false;
  credentials = {
    name: "",
    email: "",
    password: "",
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  public onLoginSubmit(): void {
    this.formError = "";
    if (
      !this.credentials.email ||
      !this.credentials.password ||
      !this.credentials.name
    ) {
      this.formError = "All fields are required, please try again";
      this.router.navigateByUrl("#"); // Return to login page
    } else {
      this.doLogin();
    }
  }

  private doLogin(): void {
    let newUser = {
      name: this.credentials.name,
      email: this.credentials.email,
    } as User;
    this.authenticationService.login(newUser, this.credentials.password).subscribe({
      next: () => {
        this.router.navigate([""]);
      },
      error: (err) => {
        this.formError = err.error.message;
      }
    });
  }
}