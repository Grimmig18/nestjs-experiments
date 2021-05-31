import { ValidateNested } from "class-validator";
import { UserSession } from "src/user/dto/user-session.model";

export class Verifieable {
    @ValidateNested()
    userSession: UserSession
}