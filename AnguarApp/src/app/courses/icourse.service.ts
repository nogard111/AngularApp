import { ICourse } from './Course-interface';

export abstract class ICourseService {
    abstract Getlist(): ICourse[];
    abstract GetItemById(id: String): ICourse;
    abstract UpdateItem(id: String, item: ICourse);
    abstract RemoveItem(id: String);
    abstract AddItem(item: ICourse);
}
