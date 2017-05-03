import { Component, Input } from '@angular/core';

@Component({
    selector: 'nav-menu',
    template: require('./navigation.component.html')
})
export class NavigationComponent {
    showMenu: boolean = false;
    @Input() isDark: boolean;
    constructor() {
    }
    toggleMenu(){
        this.showMenu = !this.showMenu;
    }
}
