import { Dislike } from "./dislike";
import { Pubication } from "./pubication";
import { User } from "./user";

export class Comment {
    idComment!:number
    publication!:Pubication;
    text!:string;
    users!:User;
    likes!:number;
    dislikes!:Dislike
}
