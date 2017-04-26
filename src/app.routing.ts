import { NgModule }                from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent, ProjectComponent } from './components/';

const routes: Routes = [
    // Root
    // { path: 'home',  component: HomeComponent},
    // { path: '', redirectTo:'/home', pathMatch: 'full'}
    { path: '',  component: HomeComponent},
    { path: 'projects',  component: ProjectComponent}
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
