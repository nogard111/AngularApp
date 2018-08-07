import { ICourse } from './Course-interface';
import { Observable } from 'rxjs';
import { ServerCoursesResponse } from './server-courses-response';

export abstract class ICourseService {
    abstract Getlist(): Observable<ServerCoursesResponse>;
    abstract GetListPart(start: number, count: number): Observable<ServerCoursesResponse>;
    abstract GetItemById(id: String): Observable<ICourse>;
    abstract UpdateItem(id: String, item: ICourse);
    abstract RemoveItem(id: String);
    abstract AddItem(item: ICourse);
}
