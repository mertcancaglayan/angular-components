import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-read-user',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let name of userService.users">{{ name }}</li>
    </ul>
  `,
})
export class ReadUserComponent {
  constructor(public userService: UserService) {}
}
