import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course.service';
import { Course } from '../Course';
import {Person} from '../Person'
import { PersonService } from 'src/app/person.service';
import { courseUpdate } from '../CourseUpdate';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  constructor(private service : CourseService, private personService : PersonService) { }
  courses: any;
  dados: Course
  courseUpdate:courseUpdate 
  listPerson:any
  showTable: boolean
  showForm: boolean
  ngOnInit(): void {
    this.showTable= false
    this.showForm = false
  }

  getData(){
    this.service.getCourses().subscribe(response=>{
      console.log(response)
      this.courses = response
      this.showTable = true
    })
  }
  
  updateData(c){
    this.showForm=true
    this.courseUpdate = c
    console.log(this.courseUpdate)
    this.personService.getPerson().subscribe(response=>{
      this.listPerson = response
      console.log(this.listPerson)
    })
  }

  onSelectChange(c){
    console.log(c)
  }

  onSubmit(){
    console.log(this.courseUpdate)
    this.service.save(this.courseUpdate).subscribe(response=>{
      console.log(response)
      this.showForm = false
      this.courses = response
    })
  }

}
