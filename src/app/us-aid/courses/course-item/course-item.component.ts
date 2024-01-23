import { Component, Input } from '@angular/core';
import { IcourseDto } from '../../shared/dto/course.dto';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent {
  @Input() currCourse!: IcourseDto;
}
