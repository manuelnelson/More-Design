import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Project, ProjectType } from '../../models';
import { Router } from '@angular/router';
@Component({
    template: require('./project.component.html')
})
export class ProjectComponent implements OnInit {
    projects: Array<Project>;
    projectTypes: Array<ProjectType>;
    restApiService: RestService;
    constructor(private restService: RestService, private router: Router) {

    }
    ngOnInit() {
        this.restService.getProjects().subscribe((projects: Array<Project>) => {
            this.projects = projects;
        });
        this.restService.getProjectTypes().subscribe((projectTypes: Array<ProjectType>) => {
            this.projectTypes = projectTypes;
        });
    }

}
