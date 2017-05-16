import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { About } from '../../models';
import { Router } from '@angular/router';
@Component({
    template: require('./about.component.html')
})
export class AboutComponent implements OnInit {
    abouts: Array<About>;
    restApiService: RestService;
    constructor(private restService: RestService, private router: Router) {
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
