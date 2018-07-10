import { ICourse } from '../Interfaces/Course-interface';

export class Course implements ICourse {
	public Id: string;
	public Title: string;
	public CreationTime: Date;
	public DurationTime: number;
	public Description: string;
	public TopRated: boolean;
}
