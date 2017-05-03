import { Injectable } from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Home,Project, ProjectType, About, Contact} from '../models';

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

    getAbout() : Observable<About> {
        return this.http.get('/api/abouts')
                .map((response) => {
                    const json = response.json();
                    if (response.ok) {
                        return json.data as About;
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
