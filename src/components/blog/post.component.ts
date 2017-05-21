import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Post } from '../../models';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    template: require('./post.component.html')
})
export class PostComponent implements OnInit {
    post: Post;
    nextPost: Post;
    previousPost: Post;
    restApiService: RestService;
    showDescription: boolean = true;

    constructor(private restService: RestService, private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.route.params.map(params => params['slug'])
            .subscribe(slug => {
                this.restService.getPost(slug).subscribe((post: Post) => {
                    this.post = post;
                    this.post.images = post.images;
                    this.restService.getNextPost(this.post.date.toLocaleString("YYYY-MM-dd")).subscribe((nextPost: Post) => {
                        this.nextPost = nextPost;
                    });
                    this.restService.getPreviousPost(this.post.date.toLocaleString("YYYY-MM-dd")).subscribe((previousPost: Post) => {
                        this.previousPost = previousPost;
                    });
                });
            })
    }
    toggleDescription(){
        this.showDescription = !this.showDescription;
    }

}
