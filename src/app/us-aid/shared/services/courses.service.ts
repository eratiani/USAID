import { Injectable } from '@angular/core';
import { IcourseDto } from '../dto/course.dto';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courseItems: IcourseDto[] = [
    {
      imgName: 'tablet.jpg',
      courseName: 'iOS Development',
      courseStatus: 'რეგისტრაცია დასრულებულია',
      id: 1,
    },
    {
      imgName: 'react.jpg',
      courseName: 'React',
      courseStatus: 'რეგისტრაცია დასრულებულია',
      id: 2,
    },
    {
      imgName: 'logo-light-blue.jpg',
      courseName: 'Intro to Python',
      courseStatus: 'რეგისტრაცია დასრულებულია',
      id: 3,
    },
    {
      imgName: 'logo-blue.jpg',
      courseName: 'Advanced Python',
      courseStatus: 'რეგისტრაცია დასრულებულია',
      id: 4,
    },
    {
      imgName: 'keyboard.jpg',
      courseName: 'Advanced Cybersecurity Course',
      courseStatus: 'რეგისტრაცია დასრულებულია',
      id: 5,
    },
    {
      imgName: 'lecture.jpg',
      courseName: 'ToT - Training of Trainers',
      courseStatus: 'რეგისტრაცია დასრულებულია',
      id: 6,
    },
    {
      imgName: 'server.jpg',
      courseName: 'Blockchain',
      courseStatus: 'რეგისტრაცია დასრულებულია',
      id: 7,
    },
    {
      imgName: 'to-do.jpg',
      courseName: 'DevOps',
      courseStatus: 'რეგისტრაცია დასრულებულია',
      id: 8,
    },
    {
      imgName: 'leptop.jpg',
      courseName: 'Information Security Governance',
      courseStatus: 'რეგისტრაცია დასრულებულია',
      id: 9,
    },
  ];
  constructor() {}
  getCourseItem(id: number) {
    return this.courseItems.filter((item) => item.id === id)[0];
  }
  getCourseItems() {
    return [...this.courseItems];
  }
}
