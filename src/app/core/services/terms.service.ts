import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TermsService {
  toggleTermsSubject: Subject<boolean> = new Subject<boolean>();
  constructor() {}
}
