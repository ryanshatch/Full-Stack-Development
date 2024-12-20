import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import { User } from "../models/user";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.css",
})
export class RegisterComponent {
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

  public onRegisterSubmit(): void {
    this.formError = "";
    if (
      !this.credentials.email ||
      !this.credentials.password ||
      !this.credentials.name
    ) {
      this.formError = "All fields are required, please try again";
    } else {
      this.doRegister();
    }
  }

  private doRegister(): void {
    let newUser = {
      name: this.credentials.name,
      email: this.credentials.email,
    } as User;
    this.authenticationService.register(newUser, this.credentials.password);
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate([""]);
    } else {
      this.formError = "Registration failed, please try again";
    }
  }
}
