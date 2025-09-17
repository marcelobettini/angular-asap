import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-form-template',
  imports: [FormsModule],
  template: `
  <div class="form-container">
    <h2>Template-Driven Form</h2>
    <form (submit)="handleSubmit($event)">
      <label>Pick a color
        <input type="color" name="colorCode" [(ngModel)]="colorCode">
      </label>
      <label>Color name
        <input type="text" name="colorName" [(ngModel)]="colorName">
      </label>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
    <br>
    <p>Color code: {{colorCode}}</p>
    <p>Color name: {{colorName}}</p>

  </div>
  `,
  styleUrl: './form-template.css'
})
export class FormTemplate {
  colorCode = '#ffffff'
  colorName = ''
  handleSubmit($event: Event) {
    $event.preventDefault()
    alert(`You've picked the color: ${this.colorCode} - ${this.colorName}`)
  }

}
