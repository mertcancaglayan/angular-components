import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: ` <h1>About</h1> `,
})
export class AboutComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    console.log(router.getCurrentNavigation()?.extras.state);
  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
    });
  }
}
