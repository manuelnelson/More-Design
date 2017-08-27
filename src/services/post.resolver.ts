import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { RestService } from '../services/rest.service';
import { Post } from '../models';
@Injectable()
export class PostResolver implements Resolve<Post> {
    constructor(private restService: RestService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Promise<Post> {
      return this.restService.getPost(route.params.slug).map(post => post).toPromise();
    }
}
