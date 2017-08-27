import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models';
import { Router } from '@angular/router';
import { RestService, MetaBuilderService } from '../../services';
import { Meta } from '@angular/platform-browser';

@Component({
    template: require('./contact.component.html')
})
export class ContactComponent implements OnInit {
    contact: Contact;
    restApiService: RestService;
    constructor(private restService: RestService, private router: Router, private meta: Meta, private metaBuilder: MetaBuilderService) {
        this.meta = this.metaBuilder.BuildMeta(this.meta, {
            title: 'Contact', 
            metaDescription: 'MORE design build is a niche, go to company for design and construction.'
        })        
    }
    ngOnInit() {
        this.restService.getContact().subscribe((contact: Contact) => {
            this.contact = contact;
        });
    }

}
