import { inject, Injectable, signal } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import type { GiphyResponse } from '../interfaces/giphy.interface'
import type { Gif } from '../interfaces/gif.interface'
import { environment } from 'src/environments/environment.development'
import { GifMapper } from '../mapper/gif.mapper'

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  http: HttpClient = inject(HttpClient)
  trendingGifs = signal<Gif[]>([])
  gifsFromSearch = signal<Gif[]>([])
  loading = signal<boolean>(true)
  constructor() {
    this.loadTrendingGifs()
  }
  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20
      }
    }).subscribe(res => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(res.data)
      this.trendingGifs.set(gifs)
      this.loading.set(false)
    })
  }
  searchGifs(query: string) {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        q: query
      }
    }).subscribe(res => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(res.data)
      this.gifsFromSearch.set(gifs)
      this.loading.set(false)
    })

  }

}
