import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello World with Angular';
  message = "valor inicial"
  num_1 = 5;
  num_2 = 10;
  multiplyTwoNumbers(a: number, b: number) {
    return a * b
  }
}
