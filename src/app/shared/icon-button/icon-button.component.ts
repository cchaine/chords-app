import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() icon : string = "";
  @Input() fg: string = "";
  @Input() bg : string = "";
}
