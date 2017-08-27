import { Component, OnInit } from '@angular/core';
import { RestService, MetaBuilderService } from '../../services';
import { Meta } from '@angular/platform-browser';
import { Post, PostCategory } from '../../models';
import { Router } from '@angular/router';
@Component({
    template: require('./blog.component.html')
})
export class BlogComponent implements OnInit {
    posts: Array<Post>;
    postCategories: Array<PostCategory>;
    restApiService: RestService;
    constructor(private restService: RestService, private router: Router, private meta: Meta, private metaBuilder: MetaBuilderService) {
        this.meta = this.metaBuilder.BuildMeta(this.meta, {
            title: 'Blog', 
            metaDescription: 'This blog highlights some of our work'
        })        
    }
    ngOnInit() {
        this.restService.getPosts().subscribe((posts: Array<Post>) => {
            this.posts = posts;
            console.log(this.posts[0])
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
