import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ReadUserComponent } from './components/read-user/read-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateUserComponent, ReadUserComponent],
  template: `
    <app-create-user /><br />
    <app-read-user />
  `,
})
export class AppComponent {
  title = 'ders6';
}
