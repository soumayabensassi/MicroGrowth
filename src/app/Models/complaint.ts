import { RetourComplaint } from "./retour-complaint";
import { User } from "./user";

export class Complaint {

    idComplaint!:number;
    date!:Date;
    subject!:String;
    text!:String;
    state!:Boolean;
    retourComplaint!:RetourComplaint;
    users!:User;
    
}
