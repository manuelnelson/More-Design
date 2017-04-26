import { NgModule, OnInit } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RestService } from './services/rest.service';
import { AppRoutingModule }  from './app.routing';

import {
    HomeComponent, CarouselComponent, AppComponent  
} from './components/';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ HomeComponent, CarouselComponent, AppComponent],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [ RestService ]
})
export class AppModule{
}
