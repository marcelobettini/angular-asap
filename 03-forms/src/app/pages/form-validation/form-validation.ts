import { Component } from '@angular/core'
import { ValidationTemplate } from "../../components/validation-template/validation-template"
import { ValidationReactive } from "../../components/validation-reactive/validation-reactive"

@Component({
  selector: 'app-form-validation',
  imports: [ValidationTemplate, ValidationReactive],
  templateUrl: './form-validation.html',
  styleUrl: './form-validation.css'
})
export class FormValidation {

}
