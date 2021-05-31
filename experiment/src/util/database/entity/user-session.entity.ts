import { Entity } from "typeorm";

@Entity('user_session')
export class UserSessionEntity {
    user_id: string

    
    session_id: string
    stay_logged_in: boolean
    expiration_date: Date
}