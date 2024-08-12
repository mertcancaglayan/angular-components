import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private names: string[];

  constructor() {
    this.names = [];
  }

  addUser(name: string) {
    this.names.push(name);
  }

  get users(): string[] {
    return this.names;
  }
}
