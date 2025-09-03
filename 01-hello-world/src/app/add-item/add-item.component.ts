import { Component, Output, EventEmitter } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Item } from '../types'
@Component({
  selector: 'app-add-item',
  imports: [FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  newItemName: string = ""
  @Output() addItemEvent = new EventEmitter<Item>()
  addItem() {
    if (this.newItemName.trim()) {

      const newItem: Item = {
        id: crypto.randomUUID(),
        name: this.newItemName,
        isAvailable: true
      }
      this.addItemEvent.emit(newItem)
      this.newItemName = ""




    }

  }
}
