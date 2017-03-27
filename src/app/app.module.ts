import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { CochesService } from './coches.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent ],
  providers: [ CochesService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
