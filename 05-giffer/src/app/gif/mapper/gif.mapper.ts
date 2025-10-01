import { GiphyItem } from "../interfaces/giphy.interface"
import { Gif } from "../interfaces/gif.interface"
export class GifMapper {
    static mapGiphyItemToGif(giphyItem: GiphyItem): Gif {
        return {
            id: giphyItem.id,
            title: giphyItem.title,
            url: giphyItem.images.original.url
        }
    }
    static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
        // return items.map((item)=> this.mapGiphyItemToGif(item))
        return items.map(this.mapGiphyItemToGif)
    }

}