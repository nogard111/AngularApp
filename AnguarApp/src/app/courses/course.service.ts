import { Injectable, EventEmitter, Output } from '@angular/core';
import { ICourse } from './Course-interface';
import { ICourseService } from './icourse.service';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { HttpHeaders } from '@angular/common/http';
import { Course } from './Course';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService implements ICourseService {

  @Output() ChangeEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private http: HttpClient) {
    console.log('service created');
  }

  public Getlist(): Observable<Course[]> {
    return this.http.get<Course[]>(`${BASE_URL}`);
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
    this.http.post<ICourse>(`${BASE_URL}`,  item).subscribe(() => this.ChangeEvent.emit());
  }

  private copyCourse(source: ICourse, destination: ICourse) {
    destination.Title = source.Title;
    destination.id = source.id;
    destination.CreationTime = source.CreationTime;
    destination.DurationTime = source.DurationTime;
    destination.Description = source.Description;
    destination.TopRated = source.TopRated;
  }

  RemoveItem(id: String) {
    console.log('Deleted id =' + id);

    this.http.delete<ICourse>(`${BASE_URL}/${id}`).subscribe(
      () => this.ChangeEvent.emit()
    );
  }

}
