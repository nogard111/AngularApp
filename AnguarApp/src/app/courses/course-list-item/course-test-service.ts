import { ICourseService } from '../icourse.service';
import { ICourse } from '../Course-interface';

export class CourseTestService implements ICourseService {

    public deleteId: String;
    RemoveItem(id: String) {
        this.deleteId = id;
    }
    Getlist(): ICourse[] {
        return null;
    }
    GetItemById(id: String): ICourse {
        return null;
    }

    UpdateItem(id: String, item: ICourse) {
    }

    AddItem(item: ICourse) {
    }
}
