import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {

    transform(minutes: number): string {
        let ret = '';
        if (minutes >= 60) {
         ret = '' + Math.floor( minutes / 60) + 'h ';
        }
        ret += '' + minutes % 60 + 'm';
        return ret;
    }

}
