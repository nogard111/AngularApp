import { ICourseService } from '../icourse.service';
import { ICourse } from '../Course-interface';
import { Observable } from 'rxjs';
import { ServerCoursesResponse } from '../server-courses-response';

export class CourseTestService implements ICourseService {


    public deleteId: String;
    RemoveItem(id: String) {
        this.deleteId = id;
    }

    Getlist(): Observable<ServerCoursesResponse> {
        return null;
    }

    GetListPart(start: number, count: number): Observable<ServerCoursesResponse> {
        throw null;
    }
    GetItemById(id: String): Observable<ICourse> {
        return null;
    }

    UpdateItem(id: String, item: ICourse) {
    }

    AddItem(item: ICourse) {
    }
}
