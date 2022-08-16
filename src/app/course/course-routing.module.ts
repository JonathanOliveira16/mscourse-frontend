import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseFormComponent} from './course-form/course-form.component'
import { CourseUpdateComponent } from './course-update/course-update.component'

const routes: Routes = [
  {path:'course-list', component:CourseFormComponent},
  {path: 'course-update' ,component:CourseUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
