import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommandsComponent } from './commands.component';

const routes: Routes = [
  { path: 'commands/:symbol', component: CommandsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CommandsRoutingModule {
}