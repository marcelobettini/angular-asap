import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterOutlet } from '@angular/router'
import { ButtonComponent } from './button/button.component'
import { ListItemsComponent } from "./list-items/list-items.component"

@Component({
  selector: 'app-root',
  imports: [FormsModule, ListItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello World with Angular';
  message = "valor inicial"
  num_1 = 5;
  num_2 = 10;
  count = 0;
  incrementCount() {
    this.count++
  }
  multiplyTwoNumbers(a: number, b: number) {
    return a * b
  }
}
