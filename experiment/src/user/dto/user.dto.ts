import { UserSession } from "./user-session.model";
import { User } from "./user.model";

export class UserDto  {
    user: User
    userSession: UserSession
}