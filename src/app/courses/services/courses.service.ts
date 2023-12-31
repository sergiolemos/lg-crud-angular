import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap,first, delay } from 'rxjs/operators';

import { Course } from '../model/course';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/api/courses';

  constructor(private httpClient: HttpClient) {

  }

  list(){
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(1000),
      tap(courses => console.log(courses))
    );
  }

  save(record: Partial<Course>){
    console.log(record);
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }

  loadById(id: string){
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }
}
