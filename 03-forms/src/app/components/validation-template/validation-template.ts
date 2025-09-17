import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-validation-template',
  imports: [FormsModule],
  templateUrl: './validation-template.html',
  styleUrl: './validation-template.css'
})
export class ValidationTemplate {
  user = {
    name: '',
    email: ''
  }

  handleSubmit($event: Event) {
    $event.preventDefault()
    alert(`USER NAME: ${this.user.name} - EMAL: ${this.user.email}`)
  }
}
