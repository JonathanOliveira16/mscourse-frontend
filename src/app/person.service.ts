import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'
import { Person } from './course/Person';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  apiURL: string = environment.apiURLBase + '/v2/person';

  constructor(private http : HttpClient) { 
    
  }

  getPerson() : Observable<Person[]>{
    return this.http.get<Person[]>(this.apiURL+"/get-all");
  }
}
