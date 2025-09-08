import { Component, Input, signal, WritableSignal } from '@angular/core'
import { Product } from '../../data/product.type'

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input()
  product!: Product
  isFullText: WritableSignal<boolean> = signal(false)

}
