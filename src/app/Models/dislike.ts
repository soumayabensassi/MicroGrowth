import { Pubication } from "./pubication";
import { User } from "./user";

export class Dislike {
    idDislike!:number
    publications!:Pubication
    users!:User;
    comments!:Comment;
}
