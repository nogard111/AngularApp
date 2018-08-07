import { Injectable, EventEmitter, Output } from '@angular/core';
import { ICourse } from './Course-interface';
import { ICourseService } from './icourse.service';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { HttpHeaders } from '@angular/common/http';
import { Course } from './Course';
import { API_URL } from '../constants';
import { ServerCoursesResponse } from './server-courses-response';

const BASE_URL = API_URL + 'courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService implements ICourseService {

  @Output() ChangeEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private http: HttpClient) {
    console.log('service created');
  }

  public Getlist(): Observable<ServerCoursesResponse> {
    return this.http.get<ServerCoursesResponse>(`${BASE_URL}`);
  }

  public GetListPart(start: number, count: number): Observable<ServerCoursesResponse> {
    return this.http.get<ServerCoursesResponse>(`${BASE_URL}?start=` + start + '&count=' + count);
  }

  CreateCourse() {

  }

  GetItemById(id: String): Observable<ICourse> {
    return this.http.get<Course>(`${BASE_URL}/${id}`);
  }

  UpdateItem(id: String, item: ICourse) {
    this.http.put<ICourse>(`${BASE_URL}/${id}`, item).subscribe(() => this.ChangeEvent.emit());
  }

  AddItem(item: ICourse) {
    this.http.post<ICourse>(`${BASE_URL}`, item).subscribe(() => this.ChangeEvent.emit());
  }

  private copyCourse(source: ICourse, destination: ICourse) {
    destination.name = source.name;
    destination.id = source.id;
    destination.creationTime = source.creationTime;
    destination.durationTime = source.durationTime;
    destination.description = source.description;
    destination.isTopRated = source.isTopRated;
  }

  RemoveItem(id: String) {
    console.log('Deleted id =' + id);

    this.http.delete<ICourse>(`${BASE_URL}/${id}`).subscribe(
      () => this.ChangeEvent.emit()
    );
  }

}
