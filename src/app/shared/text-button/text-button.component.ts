import { Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss']
})
export class TextButtonComponent {
  @Input() text : string = "";
  @Input() bg: string = "";
  @Input() fg: string = "";
}
