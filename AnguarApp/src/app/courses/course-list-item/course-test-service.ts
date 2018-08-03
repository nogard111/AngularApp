import { ICourseService } from '../icourse.service';
import { ICourse } from '../Course-interface';
import { Observable } from 'rxjs';

export class CourseTestService implements ICourseService {

    public deleteId: String;
    RemoveItem(id: String) {
        this.deleteId = id;
    }
    Getlist(): Observable<ICourse[]> {
        return null;
    }
    GetItemById(id: String): Observable<ICourse> {
        return null;
    }

    UpdateItem(id: String, item: ICourse) {
    }

    AddItem(item: ICourse) {
    }
}
