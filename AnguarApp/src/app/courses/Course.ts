import { ICourse } from './Course-interface';

export class Course implements ICourse {
 public id: string;
 public Title: string;
 public CreationTime: Date;
 public DurationTime: number;
 public Description: string;
 public TopRated: boolean;
}
