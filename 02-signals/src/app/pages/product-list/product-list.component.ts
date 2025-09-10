import { Component, signal, WritableSignal } from '@angular/core'
import products from "@app/data/products.json"
import { Product } from '@app/data/product.type'
import { CommonModule } from '@angular/common'
import { ProductAddComponent } from "@app/product-add/product-add.component"
import { ProductListItemComponent } from "@app/components/product-list-item/product-list-item.component"
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductListItemComponent, ProductAddComponent, ProductListItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: WritableSignal<Product[]> = signal(products)
  addProduct(newProduct: Product) {
    this.products.update((current) => [...current, newProduct])
  }
}
