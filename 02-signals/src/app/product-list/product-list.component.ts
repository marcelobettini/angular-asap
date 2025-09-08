import { Component, signal, WritableSignal } from '@angular/core'
import products from '../../data/products.json'
import { Product } from '../../data/product.type'
import { CommonModule } from '@angular/common'
import { ProductCardComponent } from "../product-card/product-card.component"
import { ProductAddComponent } from "../product-add/product-add.component"
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCardComponent, ProductAddComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = signal<Product[]>(products)
  addProduct(newProduct: Product) {
    this.products.update((current) => [...current, newProduct])
  }
}
