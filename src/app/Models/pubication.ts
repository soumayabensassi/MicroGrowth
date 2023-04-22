import { Dislike } from "./dislike";
import { Like } from "./like";
import { User } from "./user";

export class Pubication {
    idPublication!:number;
    state!:boolean;
    text!:string;
    users!:User;
    likes!:Like;
    dislikes!:Dislike
}

