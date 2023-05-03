import { Interesse } from "./interesse";
import { Participer } from "./participer";
import { Rating } from "./rating";
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
    nombreInteresse!:number;
    nombreParticiper!:number;
    userList!:User[];
    participerList!:Participer;
    interesseList!:Interesse;
    rating!:Rating ;
    


}
