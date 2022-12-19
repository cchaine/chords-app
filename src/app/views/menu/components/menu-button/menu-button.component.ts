import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() enabled: boolean = true;
}
