import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Mock user roles/permissions
  private userPermissions = ['edit', 'delete']; // Example permissions

  constructor() {}

  hasPermission(permission: string): boolean {
    return this.userPermissions.includes(permission);
  }
}
