import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
@Component({
    selector: 'app-component',
    template: require('./app.component.html')
})
export class AppComponent{
    isDark: boolean = false;
    withLogo: boolean = true;
    constructor(private router: Router) {
        this.router.events.subscribe(event => {
        if (event instanceof RoutesRecognized) {
            if(event.url == '/'){
                this.isDark = true;
                this.withLogo = false;
            }
            else if(event.url.indexOf('/projects/') > -1)
            {
                this.isDark = true;
                this.withLogo = true;
            }else{
                this.isDark = false;
                this.withLogo = true;
            }
        }
    });
    }
}
