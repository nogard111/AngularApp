import { ICourse } from './Course-interface';

export class Course implements ICourse {
 public id: string;
 public name: string;
 public creationTime: Date;
 public durationTime: number;
 public description: string;
 public isTopRated: boolean;
}
