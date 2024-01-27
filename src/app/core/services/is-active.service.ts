import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsActiveService {
  activePageSubject: Subject<string> = new Subject<string>();
  constructor() {}
}
