import { Component, OnInit } from '@angular/core';
import { RestService, MetaBuilderService } from '../../services';
import { Post } from '../../models';
import { Router, ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
@Component({
    template: require('./post.component.html')
})
export class PostComponent implements OnInit {
    post: Post;
    nextPost: Post;
    previousPost: Post;
    restApiService: RestService;
    showDescription: boolean = true;

    constructor(private restService: RestService, private route: ActivatedRoute, private meta: Meta, private metaBuilder: MetaBuilderService) {
      this.post = this.route.snapshot.data['blogPost'];
      this.meta = this.metaBuilder.BuildMeta(this.meta, this.post)
    }
    ngOnInit() {
        this.post.images = this.post.images;
        this.restService.getNextPost(this.post.date.toLocaleString("YYYY-MM-dd")).subscribe((nextPost: Post) => {
            this.nextPost = nextPost;
        });
        this.restService.getPreviousPost(this.post.date.toLocaleString("YYYY-MM-dd")).subscribe((previousPost: Post) => {
            this.previousPost = previousPost;
        });
    }
    toggleDescription(){
        this.showDescription = !this.showDescription;
    }

}
