import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {

    transform(minutes: number): string {
        let hours = '';
        if (minutes >= 60) {
            hours = Math.floor( minutes / 60).toString() + 'h ';
        }
        return hours + (minutes % 60).toString() + 'm';
    }

}
