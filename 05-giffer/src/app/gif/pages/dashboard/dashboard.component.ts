import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { SideMenuHeaderComponent } from "@app/gif/components/side-menu-header/side-menu-header.component"
import { SideMenuOptionsComponent } from '@app/gif/components/side-menu-options/side-menu-options.component'
import { SideMenuHistoryComponent } from "@app/gif/components/side-menu-history/side-menu-history.component"
@Component({
  selector: 'dashboard',
  imports: [RouterOutlet, SideMenuHeaderComponent, SideMenuOptionsComponent, SideMenuHistoryComponent],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

}
