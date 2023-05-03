import { Credit } from "./credit";

export class Penalite {
    id_penalite!:number
    date_penalite!:Date;
    montant_penalite!:any;
    paye!:boolean;
    credit!:Credit 
}
