import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
@Component({
    selector: 'app-component',
    template: require('./app.component.html')
})
export class AppComponent{
    isDark: boolean = false;
    constructor(private router: Router) {
        this.router.events.subscribe(event => {
        if (event instanceof RoutesRecognized) {
            if(event.url == '/' || event.url.indexOf('/projects/') > -1)
            {
                this.isDark = true;
            }else{
                this.isDark = false;
            }
        }
    });
    }
}
