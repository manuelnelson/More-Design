import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RestService, MetaBuilderService } from '../../services';
import { Post } from '../../models';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Meta } from '@angular/platform-browser';
@Component({
    template: require('./post.component.html')
})
export class PostComponent implements OnInit, OnDestroy {
    post: Post;
    nextPost: Post;
    previousPost: Post;
    restApiService: RestService;
    showDescription: boolean = true;
    sub: Subscription;

    constructor(private restService: RestService, private route: ActivatedRoute, private meta: Meta, private metaBuilder: MetaBuilderService) {
      this.post = this.route.snapshot.data['blogPost'];
      this.meta = this.metaBuilder.BuildMeta(this.meta, this.post)
    }
    ngOnInit() {
        this.init();
        this.sub = this.route.params.subscribe((params) => {
            console.log(params)
            this.restService.getPost(params.slug).subscribe(post => {
                console.log(post);
                this.post = post
                this.init();
            }); 
        });

    }
    init(){
        this.post.images = this.post.images;
        this.restService.getNextPost(this.post.date.toLocaleString("YYYY-MM-dd")).subscribe((nextPost: Post) => {
            this.nextPost = nextPost;
        });
        this.restService.getPreviousPost(this.post.date.toLocaleString("YYYY-MM-dd")).subscribe((previousPost: Post) => {
            this.previousPost = previousPost;
        });
    }
    ngOnDestroy(){
        this.sub.unsubscribe();
    }
    toggleDescription(){
        this.showDescription = !this.showDescription;
    }

}
