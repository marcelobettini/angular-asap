import { Component, ElementRef, inject, input, viewChild } from '@angular/core'
import { GifListItemComponent } from '../gif-list-item/gif-list-item.component'
import type { Gif } from '@app/gif/interfaces/gif.interface'
import { GiphyService } from '@app/gif/services/giphy.service'

@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html'
})
export class GifListComponent {
  giphyService = inject(GiphyService)
  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('gifsContainer')
  gifs = input.required<Gif[]>()
  handleScroll() {
    const gifsContainer = this.scrollDivRef()?.nativeElement
    if (!gifsContainer) return
    const safetyMargin = 300
    const scrollTop = gifsContainer.scrollTop
    const clientHeight = gifsContainer.clientHeight
    const maxScroll = gifsContainer.scrollHeight
    const isBottomContainer: boolean = scrollTop + clientHeight + safetyMargin >= maxScroll
    if (isBottomContainer) {
      this.giphyService.loadTrendingGifs()
    }
  }

}
