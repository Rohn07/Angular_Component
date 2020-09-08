import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudiComponent } from './audi/audi.component';
import { BentleyComponent } from './bentley/bentley.component';
import { ChervoletComponent } from './chervolet/chervolet.component';
import { DodgeComponent } from './dodge/dodge.component';
import { ElfinComponent } from './elfin/elfin.component';

@NgModule({
  declarations: [
    AppComponent,
    AudiComponent,
    BentleyComponent,
    ChervoletComponent,
    DodgeComponent,
    ElfinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
