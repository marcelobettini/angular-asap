import { Component, computed, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { GiphyService } from '@app/gif/services/giphy.service'
import { map } from 'rxjs'
import { toSignal } from '@angular/core/rxjs-interop'
import { GifListComponent } from '@app/gif/components/gif-list/gif-list.component'
@Component({
  selector: 'history',
  imports: [GifListComponent],
  templateUrl: './history.component.html'
})
export default class HistoryComponent {
  giphyService = inject(GiphyService)
  queryKey = toSignal(inject(ActivatedRoute).params.pipe(map(p => p['query'] ?? '')))
  gifsByQuery = computed(() => this.giphyService.getHistoryByQuery(this.queryKey()))
}
