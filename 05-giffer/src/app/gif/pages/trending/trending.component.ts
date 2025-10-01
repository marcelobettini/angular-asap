import { Component, inject } from '@angular/core'
import { GiphyService } from '@app/gif/services/giphy.service'
import { GifListComponent } from "@app/gif/components/gif-list/gif-list.component"

@Component({
  selector: 'trending',
  imports: [GifListComponent],
  templateUrl: './trending.component.html'
})
export class TrendingComponent {
  giphyService = inject(GiphyService)

}
