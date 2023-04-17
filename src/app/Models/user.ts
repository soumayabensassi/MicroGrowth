import { Role } from "./role";

export class User {
    id_user!:number;
    firstName!:string;
    lasttName!:string;
    password!:string;
    verifPassword!:string;
    phone!:number;
    email!:string;
    roles!:Role;
    profession!:string;
    cin!:number
}
