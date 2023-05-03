import { ImageProfile } from "./image-profile";
import { Role } from "./role";

export class User {
    idUser!:number;
    firstName!:string;
    lasttName!:string;
    password!:string;
    verifPassword!:string;
    phone!:number;
    email!:string;
    roles!:Role;
    profession!:string;
    cin!:number
    image!:ImageProfile
}
