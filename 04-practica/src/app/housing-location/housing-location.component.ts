import { Component, Input } from '@angular/core'
import { iHousingLocation } from './housing-location.interface'
import { RouterModule } from '@angular/router'
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  // ! = non null assertion operator -> tell compiler 'this input wont be null or undefined'
  @Input() housingLocation!: iHousingLocation
}
