import { Training } from "./training";
import { User } from "./user";

export class Rating {
    idRating!:number
    nbrp!:number
    trainings!:Training
    users!:User;
}
