import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms'

@Component({
  selector: 'app-validation-reactive',
  imports: [ReactiveFormsModule,],
  standalone: true,
  templateUrl: './validation-reactive.html',
  styleUrl: './validation-reactive.css'
})
export class ValidationReactive {
  user = {
    name: "",
    email: ""
  }
  userForm = new FormGroup({
    name: new FormControl(this.user.name, [
      Validators.required,
      Validators.minLength(5)
    ]),
    email: new FormControl(this.user.email, [
      Validators.required,
      Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}")
    ])
  })

  get nameControl() {
    return this.userForm.get("name")!
  }
  get emailControl() {
    return this.userForm.get("email")!
  }

  handleSubmit($event: Event) {
    $event.preventDefault()
    if (this.userForm.valid) {
      this.user.name = this.userForm.value.name || ''
      this.user.email = this.userForm.value.email || ''
      alert(`USER NAME: ${this.user.name} - EMAIL: ${this.user.email}`)
    } else {
      this.userForm.markAllAsTouched()
      alert("Please fix errors")
    }

  }

}
