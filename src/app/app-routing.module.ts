import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GdetailComponent} from './gdetail/gdetail.component';
import {GdetailchildComponent} from './gdetailchild/gdetailchild.component';
import {GheaderComponent} from './gheader/gheader.component';


const routes: Routes = [
{path: 'search', component: GdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
