import { Component, OnInit } from '@angular/core';
import { About } from '../../models';
import { Router } from '@angular/router';
import { RestService, MetaBuilderService } from '../../services';
import { Meta } from '@angular/platform-browser';

@Component({
    template: require('./about.component.html')
})
export class AboutComponent implements OnInit {
    abouts: Array<About>;
    restApiService: RestService;
    constructor(private restService: RestService, private router: Router, private meta: Meta, private metaBuilder: MetaBuilderService) {
        this.meta = this.metaBuilder.BuildMeta(this.meta, {
            title: 'About', 
            metaDescription: 'MORE design build is a niche, go to company for design and construction.'
        });        
    }
    ngOnInit() {
        this.restService.getAbouts().subscribe((about: Array<About>) => {
            if(about.length > 0)
                about[0].show = true;
            this.abouts = about;
        });
    }
    filterByType(name:string){
        this.abouts.map(x=> {
            x.name.toLowerCase() == name.toLowerCase() ? x.show = true : x.show = false;
        });
    }

}
