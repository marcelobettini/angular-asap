import { Component } from '@angular/core'
import { FormControl, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-form-reactive',
  imports: [ReactiveFormsModule],
  template: `
  <div class="form-container">
    <h2>Reactive Forms</h2>
    <form (submit)="handleSubmit($event)">
      <label>Pick a color
      <input type="color" [formControl]="colorCode">
      </label>
      <label>Color name
        <input type="text" [formControl]="colorName">
      </label>
      <button type="submit">Submit</button>
      <button type="button" (click)="handleReset()">Reset</button>

    </form>
    <br>
    <p>Color code: {{colorCode.value}}</p>
    <p>Color name: {{colorName.value}}</p>

  </div>
  `,
  styleUrl: './form-reactive.css'
})
export class FormReactive {
  colorCode = new FormControl('#ffffff')
  colorName = new FormControl('')

  handleSubmit($event: Event) {
    $event.preventDefault()
    alert(`You've picked the color: ${this.colorCode.value} - ${this.colorName.value}`)
  }
  handleReset() {
    this.colorCode.setValue("#ffffff")
    this.colorName.setValue("")

  }
}
