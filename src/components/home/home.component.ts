import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Home, Image } from '../../models';
@Component({
    template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
    home: Home;
    carousel: Array<Image> = new Array<Image>();
    restApiService: RestService;
    constructor(private restService: RestService) {
    }
    ngOnInit() {
        this.restService.getHome().subscribe((home: Home) => {
            this.home = home;
            console.log(home.backgroundImage1);
            if(this.home.backgroundImage1 != null)
                this.carousel.push(this.home.backgroundImage1);
            if(this.home.backgroundImage2 != null)
                this.carousel.push(this.home.backgroundImage2);
            if(this.home.backgroundImage3 != null)
                this.carousel.push(this.home.backgroundImage3);
        });
    }

}
