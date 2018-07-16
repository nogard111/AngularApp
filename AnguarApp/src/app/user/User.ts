import { IUser } from './User-interface';


export class User implements IUser {
    public Id: string;
    public FirstName: string;
    public LastName: string;
}
