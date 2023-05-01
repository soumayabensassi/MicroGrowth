import { ActivitySector } from "./activity-sector";
import { User } from "./user";

export class Credit {
    id_credit!:number
    date_echeance!:Date;
    amount_credit!:any;
    
    amount_garant!:any;
    demande_date!:Date;
    obtaining_date!:Date;
    duree!:number;
    garanties!:boolean;
    intrestRaiting!:any;
    montant_penalities!:any;
    monthlyAmount!:any;
    pack!:boolean;
    penalities!:number;
    rembourse!:boolean;
    state!:number;
    type_credit!:string;
    users!:User;
    activity!:ActivitySector;
    score_credit!:number;




}
