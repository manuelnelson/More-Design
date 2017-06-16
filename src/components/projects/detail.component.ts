import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Project, ProjectType, Slide } from '../../models';
import { Router, ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
    template: require('./detail.component.html')
})
export class ProjectDetailComponent implements OnInit{
    project: Project;
    slides: Array<Slide> = new Array<Slide>();
    restApiService: RestService;
    showDescription: boolean = false;
    constructor(private restService: RestService, private route: ActivatedRoute, private meta: Meta) {
    }
    ngOnInit() {
      this.project = this.route.snapshot.data['project'];
      this.meta.addTag({
        name: "title",
        content: this.project.title
      })
      this.meta.addTag({
        name: "description",
        content: this.project.metaDescription
      })
      this.meta.addTag({
        name: "og:title",
        content: this.project.title
      })
      this.meta.addTag({
        name: "og:description",
        content: this.project.metaDescription
      })
      this.meta.addTag({
        name: "og:image",
        content: this.project.thumbnailImage.url
      })

        // this.restService.getProject(this.route.snapshot.params.slug).subscribe((project: Project) => {
        //     this.project = project;
        // });
    }
    toggleDescription(){
        this.showDescription = !this.showDescription;
    }
}
