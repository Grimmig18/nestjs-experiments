import { Body, Controller, Post, Put, UseGuards } from '@nestjs/common';
// import { DefaultUserGuard } from 'src/auth/guards/auth.guard';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UserSession } from './dto/user-session.model';
// import { UserDto } from './dto/user.dto';
// import { UserService } from './user.service';

@Controller('user')
export class UserController {

    // constructor(private readonly userService: UserService) {}

    // @Post('auth')
    // login(
    //     @Body() userSession: UserSession
    // ): UserDto {
    //     return this.userService.validateSession(userSession)
    // }

    // @Post('guard')
    // @UseGuards(DefaultUserGuard)
    // testGuard(
    //     @Body() userSession: UserSession
    // ): UserDto {
    //     return this.userService.getUser(userSession.userId)
    // }

    // @Put('create')
    // createUser(
    //     @Body() userData: CreateUserDto
    // ): UserDto {
    //     return this.userService.createUser(userData)
    // }
}
