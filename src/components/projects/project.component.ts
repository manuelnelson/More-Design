import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Project, ProjectType } from '../../models';
import { Router } from '@angular/router';
@Component({
    template: require('./project.component.html')
})
export class ProjectComponent implements OnInit {
    projects: Array<Project>;
    //allProjects: Array<Project>;
    projectTypes: Array<ProjectType>;
    restApiService: RestService;
    allTab: boolean = true;
    constructor(private restService: RestService, private router: Router) {

    }
    ngOnInit() {

        this.restService.getProjects().subscribe((projects: Array<Project>) => {
            this.projects = projects;
        });
        this.restService.getProjectTypes().subscribe((projectTypes: Array<ProjectType>) => {
            this.projectTypes = projectTypes;
            this.projectTypes.map(x=>x.hide = true);
        });
    }
    filterByType(projectType:ProjectType){
        this.projectTypes.map(x=>x.hide = true);
        if(projectType == null){
            this.projects.map(x=>x.hide = false);
            this.allTab = true;
        }
        else{
            projectType.hide = false;
            this.projects.map(x=> {
                x.type.name.toLowerCase() == projectType.name.toLowerCase() ? x.hide = false : x.hide = true;
            });
            this.allTab = false;
        }
    }
}
