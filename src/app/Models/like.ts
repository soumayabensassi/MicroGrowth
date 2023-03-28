import { Pubication } from "./pubication";
import { User } from "./user";
import { Comment } from "./comment";
export class Like {
    idlike!:number
    publications!:Pubication
    users!:User;
    comments!:Comment;

}
 