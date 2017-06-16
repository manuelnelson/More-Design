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
      let siteTag = " | More Design";
      this.meta.addTag({
        property: "og:url",
        name: "url",
        content: window.location.href
      })
      if(this.project.title.length > 0){
        this.meta.addTag({
          name: "title",
          content: this.project.title + siteTag
        })
        this.meta.addTag({
          property: "og:title",
          name: "title",
          content: this.project.title + siteTag
        })
      }
      if(this.project.metaDescription.length > 0){
        this.meta.addTag({
          name: "description",
          content: this.project.metaDescription
        })
        this.meta.addTag({
          name: "og:description",
          content: this.project.metaDescription
        })
      }
      this.meta.addTag({
        property: "og:image",
        name: "image",
        content: this.project.thumbnailImage.url
      })
    }
    toggleDescription(){
        this.showDescription = !this.showDescription;
    }
}
