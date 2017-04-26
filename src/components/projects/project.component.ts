import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Project } from '../../models';
@Component({
    template: require('./project.component.html')
})
export class ProjectComponent implements OnInit {
    projects: Array<Project>;
    restApiService: RestService;
    constructor(private restService: RestService) {
    }
    ngOnInit() {
        this.restService.getProjects().subscribe((projects: Array<Project>) => {
            this.projects = projects;
        });
    }

}
