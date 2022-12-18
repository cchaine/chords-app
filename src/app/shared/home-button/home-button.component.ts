import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.sass']
})
export class HomeButtonComponent {
  router : Router;

  constructor(router : Router) {
    this.router = router;
  }

  on_click() {
    this.router.navigateByUrl("/");
  }
}
