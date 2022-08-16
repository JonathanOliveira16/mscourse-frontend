import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'
import { Course } from './course/Course';
import { courseUpdate } from './course/CourseUpdate';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  apiURL: string = environment.apiURLBase + '/v2/courses';

  constructor(private http : HttpClient) { 
    
  }

  getCourses() : Observable<Course[]>{
    return this.http.get<Course[]>(this.apiURL+"/get-all");
  }

  save(course : courseUpdate) : Observable<any> {
    return this.http.put<any>(`${this.apiURL+"/update"}`,course)
  }
}
