import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SidebarComponent} from './sidebar.component';
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [RouterModule, CommonModule, NgbAccordionModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})

export class SidebarModule {
}
