import { Component, OnInit } from '@angular/core';
import { RestService, MetaBuilderService } from '../../services';
import { Meta } from '@angular/platform-browser';
import { Home, Image } from '../../models';
@Component({
    template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
    home: Home;
    carousel: Array<Image> = new Array<Image>();
    restApiService: RestService;
    constructor(private restService: RestService, private meta: Meta, private metaBuilder: MetaBuilderService) {
        this.meta = this.metaBuilder.BuildMeta(this.meta, {
            title: 'Home', 
            metaDescription: 'MORE design build is a niche, go to company for design and construction.'
        })        
    }
    ngOnInit() {
        this.restService.getHome().subscribe((home: Home) => {
            this.home = home;
            if(this.home.backgroundImage1 != null)
                this.carousel.push(this.home.backgroundImage1);
            if(this.home.backgroundImage2 != null)
                this.carousel.push(this.home.backgroundImage2);
            if(this.home.backgroundImage3 != null)
                this.carousel.push(this.home.backgroundImage3);
            if(this.home.backgroundImage4 != null)
                this.carousel.push(this.home.backgroundImage4);
        });
    }

}
