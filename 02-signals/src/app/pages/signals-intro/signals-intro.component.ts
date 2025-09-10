import { Component, computed, Signal, signal, WritableSignal } from '@angular/core'

@Component({
  selector: 'app-signals-intro',
  imports: [],
  templateUrl: './signals-intro.component.html',
  styleUrl: './signals-intro.component.css'
})
export class SignalsIntroComponent {
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
