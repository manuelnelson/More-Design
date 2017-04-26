import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Home } from '../../models';
@Component({
    template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
    home: Home;
    restApiService: RestService;
    constructor(private restService: RestService) {
    }
    ngOnInit() {
        this.restService.getHome().subscribe((home: Home) => {            
            this.home = home;
        });
    }

}
