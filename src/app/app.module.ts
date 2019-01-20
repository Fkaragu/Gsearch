import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GheaderComponent } from './gheader/gheader.component';
import { GdetailComponent } from './gdetail/gdetail.component';
import { GdetailchildComponent } from './gdetailchild/gdetailchild.component';

@NgModule({
  declarations: [
    AppComponent,
    GheaderComponent,
    GdetailComponent,
    GdetailchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule,
    NgProgressHttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
