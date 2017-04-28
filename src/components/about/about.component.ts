import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { About } from '../../models';
import { Router } from '@angular/router';
@Component({
    template: require('./about.component.html')
})
export class AboutComponent implements OnInit {
    about: About;
    restApiService: RestService;
    constructor(private restService: RestService, private router: Router) {
    }
    ngOnInit() {
        this.restService.getAbout().subscribe((about: About) => {
            this.about = about;
        });
    }

}
