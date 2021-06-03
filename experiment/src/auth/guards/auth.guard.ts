import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { UserService } from "src/user/user.service";

@Injectable()
export class DefaultUserGuard implements CanActivate {
    constructor(private readonly userService: UserService) {}

    canActivate(
        context: ExecutionContext
    ): boolean | Promise<boolean> {
        // console.log(context.switchToHttp().getRequest().body)
        // const userSession = this.userService.validateSession(context.switchToHttp().getRequest().body)

        // // Return true of session is set, false if session isn't set
        // return !!userSession
        return true
    }
}