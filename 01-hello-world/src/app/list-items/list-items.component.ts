import { Component } from '@angular/core'
import { Item } from '../types'
import { AddItemComponent } from "../add-item/add-item.component"
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-list-items',
  imports: [AddItemComponent, CommonModule],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {

  items: Item[] = [
    { id: crypto.randomUUID(), name: "lorem ipsum dolor", isAvailable: true },
    { id: crypto.randomUUID(), name: "sit amet consectetur", isAvailable: true }
  ];
  addItem(item: Item) {
    this.items.push(item)
  };
  toggleIsAvailable(item: Item) {
    item.isAvailable = !item.isAvailable
  }


}
