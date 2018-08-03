import { IUser } from './User-interface';


export class User implements IUser {
    public id: string;
    public FirstName: string;
    public LastName: string;
}
