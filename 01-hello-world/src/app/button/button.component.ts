import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-button',
  imports: [],
  template: `

<button
[style.background-color]="btnBg"
[style.color]="btnColor"
(click)="onAddOne()"

>{{btnLabel}}</button>
  `,
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() btnLabel: string = 'aceptar';
  @Input() btnBg: string = "";
  @Input() btnColor: string = ""
  @Output() incrementCountEvent = new EventEmitter<void>()
  onAddOne() {
    this.incrementCountEvent.emit()
  }


}
