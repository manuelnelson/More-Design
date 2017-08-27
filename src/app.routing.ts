import { NgModule }                from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectResolver, PostResolver } from './services';
// Components
import { HomeComponent, ProjectComponent, AboutComponent, ContactComponent, ProjectDetailComponent, BlogComponent, PostComponent } from './components/';

const routes: Routes = [
    // Root
    // { path: 'home',  component: HomeComponent},
    // { path: '', redirectTo:'/home', pathMatch: 'full'}
    { path: '',  component: HomeComponent},
    { path: 'projects',  component: ProjectComponent},
    { path: 'about',  component: AboutComponent},
    { path: 'blog',  component: BlogComponent},
    { path: 'projects/:slug', component: ProjectDetailComponent, pathMatch: 'full', resolve:{project:ProjectResolver}},
    { path: 'blog/post/:slug', component: PostComponent, resolve:{blogPost:PostResolver}},
    { path: 'contact',  component: ContactComponent},
    //{ path: '', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
