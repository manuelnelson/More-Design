import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { RestService } from '../services/rest.service';
import { Project } from '../models';
@Injectable()
export class ProjectResolver implements Resolve<Project> {
    constructor(private restService: RestService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Promise<Project> {
      return this.restService.getProject(route.params.slug).map(project => project).toPromise();
        //
        // return this.restService.get(email).map(patient => patient).toPromise();
    }
}
