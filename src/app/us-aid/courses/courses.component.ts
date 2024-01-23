import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';
import { IcourseDto } from '../shared/dto/course.dto';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses!: IcourseDto[];
  constructor(private courseServ: CoursesService) {}
  ngOnInit(): void {
    this.courses = this.courseServ.getCourseItems();
  }
}
