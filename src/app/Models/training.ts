import { User } from "./user";

export class Training {
    idTraining!:number;
    title!:string;
    startDate!:Date;
    finishdate!:Date;
    state!:boolean;
    price!:number;
    nbrOfPlace!:number;
    subject!:string;
    image!:string;
    userList!:User[];
}
