import { Component } from '@angular/core';

@Component({
    selector: 'nav-menu',
    template: require('./navigation.component.html')
})
export class NavigationComponent {
    showMenu: boolean = false;
    constructor() {
    }
    toggleMenu(){
        this.showMenu = !this.showMenu;
    }
}
