import { Component } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';

@Component({
    selector: 'nav-menu',
    template: require('./navigation.component.html')
})
export class NavigationComponent {
    showMenu: boolean = false;
    constructor() {
        PageScrollConfig.defaultDuration = 300;
    }
    toggleMenu(){        
        this.showMenu = !this.showMenu;
    }
}
