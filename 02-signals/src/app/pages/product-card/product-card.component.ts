import { Component, signal, WritableSignal, inject } from '@angular/core'
import { Product } from '../../data/product.type'
import products from '@app/data/products.json'
import { ActivatedRoute, RouterLink } from '@angular/router'

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  readonly productId: string
  private activatedRoute = inject(ActivatedRoute)
  products: Product[] = products
  product!: Product | undefined
  isFullText: WritableSignal<boolean> = signal(false)
  constructor() {
    this.productId = this.activatedRoute.snapshot.params['productId']
    this.product = this.products.find(p => p.id === Number(this.productId))
  }

}
