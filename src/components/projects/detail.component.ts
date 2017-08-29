import { Component, OnInit } from '@angular/core';
import { Project, ProjectType, Slide } from '../../models';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService, MetaBuilderService } from '../../services';
import { Meta } from '@angular/platform-browser';
declare var window: any;
@Component({
    template: require('./detail.component.html')
})
export class ProjectDetailComponent implements OnInit{
    project: Project;
    slides: Array<Slide> = new Array<Slide>();
    restApiService: RestService;
    showDescription: boolean = false;
    constructor(private restService: RestService, private route: ActivatedRoute, private meta: Meta, private metaBuilder: MetaBuilderService) {
        this.project = this.route.snapshot.data['project'];
        this.meta = this.metaBuilder.BuildMeta(this.meta, this.project);
    }
    ngOnInit() {
    }
    toggleDescription(){
        this.showDescription = !this.showDescription;
    }
}
