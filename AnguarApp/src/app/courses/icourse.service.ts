import { ICourse } from './Course-interface';
import { Observable } from 'rxjs';

export abstract class ICourseService {
    abstract Getlist(): Observable<ICourse[]>;
    abstract GetItemById(id: String): Observable<ICourse>;
    abstract UpdateItem(id: String, item: ICourse);
    abstract RemoveItem(id: String);
    abstract AddItem(item: ICourse);
}
