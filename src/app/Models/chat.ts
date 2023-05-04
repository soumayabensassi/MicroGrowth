import { LocalDatabase } from "@ngx-pwa/local-storage";
import { User } from "./user"

export class Chat {
    id!:number
    recipient!:User;
    sender!:User;
    Content!:String;
    sentAt!:Date;
}
