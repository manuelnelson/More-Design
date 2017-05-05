import { NgModule, OnInit } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RestService } from './services/rest.service';
import { Safe } from './pipes/safeHtml.pipes';
import { AppRoutingModule }  from './app.routing';

import {
    HomeComponent, CarouselComponent, AppComponent, NavigationComponent,ProjectComponent,
    AboutComponent, ContactComponent, ImageCarouselComponent, ProjectDetailComponent, BlogComponent, PostComponent
} from './components/';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ HomeComponent, CarouselComponent, AppComponent, NavigationComponent, ProjectComponent,
        AboutComponent, Safe, ContactComponent, ImageCarouselComponent, ProjectDetailComponent, PostComponent, BlogComponent],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [ RestService ]
})
export class AppModule{
}
