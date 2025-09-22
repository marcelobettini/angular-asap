import { Injectable } from '@angular/core'
import { iHousingLocation } from './housing-location/housing-location.interface'

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3000/locations"
  async getAllHousingLocation(): Promise<iHousingLocation[]> {
    const data = await fetch(this.url)
    const houses = (await data.json()) ?? []
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(houses)
      }, 500)
    })
  }
  async getHousingLocationById(id: Number): Promise<iHousingLocation> {
    const data = await fetch(`${this.url}/${id}`)
    return (await data.json()) ?? {}
  }




}
