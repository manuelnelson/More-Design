import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Project, ProjectType, Slide } from '../../models';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    template: require('./detail.component.html')
})
export class ProjectDetailComponent implements OnInit {
    project: Project;
    slides: Array<Slide> = new Array<Slide>();
    restApiService: RestService;
    constructor(private restService: RestService, private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.restService.getProject(this.route.snapshot.params.slug).subscribe((project: Project) => {
            this.project = project;
        });
    }
}
