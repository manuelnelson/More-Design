import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Contact } from '../../models';
import { Router } from '@angular/router';
@Component({
    template: require('./contact.component.html')
})
export class ContactComponent implements OnInit {
    contact: Contact;
    restApiService: RestService;
    constructor(private restService: RestService, private router: Router) {
    }
    ngOnInit() {
        this.restService.getContact().subscribe((contact: Contact) => {
            this.contact = contact;
        });
    }

}
