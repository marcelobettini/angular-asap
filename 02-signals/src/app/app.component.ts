import { Component, signal, computed, WritableSignal, Signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ProductListComponent } from "./product-list/product-list.component"

@Component({
  selector: 'app-root',
  imports: [ProductListComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Signals';
  oldCount = 0;
  showCount: WritableSignal<boolean> = signal(false)
  count: WritableSignal<number> = signal(0)
  doubleCount: Signal<number> = computed(() => this.count() * 2)
  conditionalMessage = computed(() => {
    if (this.showCount()) {
      return `The conditional message is printed. ${this.count()}.`
    } else {
      return `Nothing to see here... yet`
    }
  })

  //computed values with Signals

  addOneToOldCount() {
    this.oldCount++
  }

  addOne() {
    this.count.update(prev => prev + 1)
  }
  subOne() {
    this.count.update(prev => prev - 1)
  }
  reset() {
    this.count.set(0)
  }

  toggleShowcount() {
    this.showCount.update(prev => !prev)

  }
}

