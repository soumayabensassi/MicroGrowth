import { ActivitySector } from './activity-sector';
import { User } from 'src/app/Models/user';
export class Insurance {
    idInsurance!: number;
    amount!: number;
    startDate!: Date;
    endDate!:Date;
    users!: User;
    activitySector!:  ActivitySector;
}
