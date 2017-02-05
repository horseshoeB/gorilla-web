import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ModalModule } from 'ng2-bootstrap/modal';
import { Ng2TableModule } from 'ng2-table';

import { CommandsComponent } from './commands.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommandsRoutingModule } from './commands-routing.module';
import { CommandsService } from './commands.service';
import { CommandTableComponent } from './command-table/command-table.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    Ng2TableModule,
    CommandsRoutingModule
  ],
  declarations: [
    CommandsComponent,
    NavBarComponent,
    CommandTableComponent
  ],
  exports: [
    CommandsComponent,
    NavBarComponent
  ],
  providers: [
    CommandsService
  ]
})
export class CommandsModule { }
