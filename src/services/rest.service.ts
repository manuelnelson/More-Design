import { Injectable } from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Home,Project, ProjectType, About, Contact, Post, PostCategory, Settings} from '../models';

@Injectable()
export class RestService {
    constructor(private http: Http) {}

    getHome() : Observable<Home> {
        return this.http.get('/api/homes')
                .map((response) => {
                    const json = response.json();
                    if (response.ok) {
                        return json.data as Home;
                    } else {
                        return this.logError(json.data);
                    }
                });
    }
    getSettings() : Observable<Settings> {
        return this.http.get('/api/settings')
                .map((response) => {
                    const json = response.json();
                    if (response.ok) {
                        return json.data as Settings;
                    } else {
                        return this.logError(json.data);
                    }
                });
    }
    getProjects() : Observable<Array<Project>> {
        return this.http.get('/api/projects')
                .map((response) => {
                    const json = response.json();
                    if (response.ok) {
                        return json.data as Array<Project>;
                    } else {
                        return this.logError(json.data);
                    }
                });
    }
    getProject(projectId: number) : Observable<Project> {
        return this.http.get('/api/projects/' + projectId)
                .map((response) => {
                    const json = response.json();
                    if (response.ok) {
                        return json.data as Project;
                    } else {
                        return this.logError(json.data);
                    }
                });
    }
    getProjectTypes() : Observable<Array<ProjectType>> {
        return this.http.get('/api/projectTypes')
                .map((response) => {
                    const json = response.json();
                    if (response.ok) {
                        return json.data as Array<ProjectType>;
                    } else {
                        return this.logError(json.data);
                    }
                });
    }
    getPosts() : Observable<Array<Post>> {
        return this.http.get('/api/posts')
                .map((response) => {
                    const json = response.json();
                    if (response.ok) {
                        return json.data as Array<Post>;
                    } else {
                        return this.logError(json.data);
                    }
                });
    }
    getPostCategories() : Observable<Array<PostCategory>> {
        return this.http.get('/api/postCategories')
                .map((response) => {
                    const json = response.json();
                    if (response.ok) {
                        return json.data as Array<PostCategory>;
                    } else {
                        return this.logError(json.data);
                    }
                });
    }
    getPost(slug: string) : Observable<Post> {
        return this.http.get('/api/posts/' + slug)
                .map((response) => {
                    const json = response.json();
                    if (response.ok) {
                        return json.data as Post;
                    } else {
                        return this.logError(json.data);
                    }
                });
    }
    getNextPost(date: string) : Observable<Post> {
        return this.http.get('/api/posts/' + date + '/next')
                .map((response) => {
                    const json = response.json();
                    if (response.ok) {
                        return json.data as Post;
                    } else {
                        return this.logError(json.data);
                    }
                });
    }
    getPreviousPost(date: string) : Observable<Post> {
        return this.http.get('/api/posts/' + date + '/previous')
                .map((response) => {
                    const json = response.json();
                    if (response.ok) {
                        return json.data as Post;
                    } else {
                        return this.logError(json.data);
                    }
                });
    }

    getAbouts() : Observable<Array<About>> {
        return this.http.get('/api/abouts')
                .map((response) => {
                    const json = response.json();
                    if (response.ok) {
                        return json.data as Array<About>;
                    } else {
                        return this.logError(json.data);
                    }
                });
    }
    getContact() : Observable<Contact> {
        return this.http.get('/api/contacts')
                .map((response) => {
                    const json = response.json();
                    if (response.ok) {
                        return json.data as Contact;
                    } else {
                        return this.logError(json.data);
                    }
                });
    }
    private logError(error: any) {
        try {
            error = error.json();
            console.error(error.error);
        } catch(e) {
            // ...ignore
            console.error(error);
        }

        return Observable.throw(error);
    }
}
