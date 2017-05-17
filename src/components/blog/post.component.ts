import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Post } from '../../models';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    template: require('./post.component.html')
})
export class PostComponent implements OnInit {
    post: Post;
    restApiService: RestService;
    constructor(private restService: RestService, private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.restService.getPost(this.route.snapshot.params.slug).subscribe((post: Post) => {
            this.post = post;
        });
    }
}
