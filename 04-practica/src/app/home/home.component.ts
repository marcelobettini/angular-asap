import { Component, signal, inject } from '@angular/core'
import { iHousingLocation } from '@app/housing-location/housing-location.interface'
import { HousingService } from '@app/housing.service'
import { HousingLocationComponent } from "@app/housing-location/housing-location.component"
@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  service: HousingService = inject(HousingService)




}
// import { Component, signal, inject, OnInit } from '@angular/core'
// import { iHousingLocation } from '@app/housing-location/housing-location.interface'
// import { HousingService } from '@app/housing.service'
// import { HousingLocationComponent } from "@app/housing-location/housing-location.component"
// @Component({
//   selector: 'app-home',
//   imports: [HousingLocationComponent],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent implements OnInit {
//   housingLocationList = signal<iHousingLocation[]>([])
//   filteredHousingLocation = signal<iHousingLocation[]>([])
//   housingService: HousingService = inject(HousingService)
//   // constructor() {
//   //   this.housingService.getAllHousingLocation()
//   //     .then((houses: iHousingLocation[]) => {
//   //       console.log(houses)
//   //       this.housingLocationList.set(houses)
//   //       this.filteredHousingLocation.set(houses)
//   //     })
//   // }
//   ngOnInit(): void {
//     this.housingService.getAllHousingLocation()
//       .then((houses: iHousingLocation[]) => {
//         console.log(houses)
//         this.housingLocationList.set(houses)
//         this.filteredHousingLocation.set(houses)
//       })
//   }

// }
