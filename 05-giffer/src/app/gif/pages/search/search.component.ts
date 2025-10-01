import { Component, inject } from '@angular/core'
import { GifListComponent } from "@app/gif/components/gif-list/gif-list.component"
import { GiphyService } from '@app/gif/services/giphy.service'

@Component({
  selector: 'search',
  imports: [GifListComponent],
  templateUrl: './search.component.html'
})
export default class SearchComponent {
  giphyService = inject(GiphyService)
  onSearch(query: string) {
    query = query.trim()
    if (!query) return
    this.giphyService.searchGifs(query)
  }

}
