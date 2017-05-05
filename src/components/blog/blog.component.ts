import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Post, PostCategory } from '../../models';
import { Router } from '@angular/router';
@Component({
    template: require('./blog.component.html')
})
export class BlogComponent implements OnInit {
    posts: Array<Post>;
    postCategories: Array<PostCategory>;
    restApiService: RestService;
    constructor(private restService: RestService, private router: Router) {

    }
    ngOnInit() {
        this.restService.getPosts().subscribe((posts: Array<Post>) => {
            this.posts = posts;
            //this.allProjects = posts;
        });
        this.restService.getPostCategories().subscribe((postCategories: Array<PostCategory>) => {
            this.postCategories = postCategories;
        });
    }
    filterByType(postCategory:PostCategory){
        if(postCategory == null){
            this.posts.map(x=>x.hide = false);
        }
        else{
            this.posts.map(x=> x.hide = !x.categories.some(y=>y.name.toLowerCase() == postCategory.name.toLowerCase()));
        }
    }
}
