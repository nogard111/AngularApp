import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from './Course-interface';

@Pipe({
    name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {

    transform(courses: ICourse[]): ICourse[] {
        return courses.sort((a: ICourse, b: ICourse) => a.CreationTime > b.CreationTime ? 1 : -1);
    }
}
