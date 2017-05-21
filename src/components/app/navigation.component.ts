import { Component, Input } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Settings } from '../../models';

@Component({
    selector: 'nav-menu',
    template: require('./navigation.component.html')
})
export class NavigationComponent {
    showMenu: boolean = false;
    @Input() isDark: boolean;
    restApiService: RestService;
    settings: Settings;
    constructor(private restService: RestService) {
        this.restService.getSettings().subscribe((settings: Settings) => {
            this.settings = settings;
        });
    }
    toggleMenu(){
        this.showMenu = !this.showMenu;
    }
}
