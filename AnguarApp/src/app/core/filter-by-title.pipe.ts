import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../Interfaces/Course-interface';

@Pipe({
    name: 'filterByTitle'
})
export class FilterByTitlePipe implements PipeTransform {

    transform(courses: ICourse[], text: string): ICourse[] {
        return courses.filter((value: ICourse) => value.Title.includes(text));
    }
}
