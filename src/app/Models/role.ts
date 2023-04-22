import { User } from "./user";

export class Role {
    id_user!:number;
    name!:string;
    users!:[User];
}
