import { Component } from '@angular/core'
import { FormReactive } from '../../components/form-reactive/form-reactive'
import { FormTemplate } from '../../components/form-template/form-template'

@Component({
  selector: 'app-form-types',
  imports: [FormReactive, FormTemplate],
  templateUrl: './form-types.html',
  styleUrl: './form-types.css'
})
export class FormTypes {

}
