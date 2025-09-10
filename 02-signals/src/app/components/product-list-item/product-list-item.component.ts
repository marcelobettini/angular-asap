import { Component, Input } from '@angular/core'
import { Product } from '@app/data/product.type'
import { RouterLink } from "@angular/router"

@Component({
  selector: 'app-product-list-item',
  imports: [RouterLink],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css'
})
export class ProductListItemComponent {
  @Input() product!: Product
}
