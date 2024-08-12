import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  template: `
    <input type="text" placeholder="Name" #txtName />
    <button (click)="userCreate(txtName.value)">Create</button>
  `,
})
export class CreateUserComponent {
  constructor(private userService: UserService) {}
  userCreate(name: string) {
    this.userService.addUser(name);
  }
}
