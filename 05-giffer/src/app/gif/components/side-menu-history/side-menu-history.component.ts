import { Component, inject } from '@angular/core'
import { GiphyService } from '@app/gif/services/giphy.service'
import { MatIconModule } from '@angular/material/icon'
import { RouterLink, RouterLinkActive } from "@angular/router"
@Component({
  selector: 'side-menu-history',
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './side-menu-history.component.html'
})
export class SideMenuHistoryComponent {
  giphyService = inject(GiphyService)
}
