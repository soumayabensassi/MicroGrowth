import { User } from "./user";

export class Training {
    idtraining!:number;
    title!:string;
    startdate!:Date;
    finshdate!:Date;
    state!:boolean;
    price!:number;
    numberofplace!:number;
    subject!:string;
    users!:User;
}
