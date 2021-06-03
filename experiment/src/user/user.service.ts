import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
// import { UserSession } from './dto/user-session.model'
// import { UserDto } from './dto/user.dto'
// import { User } from './dto/user.model'
// // import * as config from '../util/config/config'
// import { CreateUserDto } from './dto/create-user.dto'
// // import cryptoRandomString from 'crypto-random-string';
// // import { appendToJsonArray, appendToSessionArray, appendToUserArray } from 'src/util/json-utils'
// // import { staticSessionList, staticUserList } from '../util/config/config'

// const cryptoRandomString = import('crypto-random-string')

@Injectable()
export class UserService {

    // public validateSession(userSession: UserSession): UserDto {

    //     userSession = this.sessionReader(userSession.userId, userSession.sessionId)
    //     const user: User = this.getValidatedUser(userSession)

    //     return {
    //         user: user,
    //         userSession: userSession
    //     }
    // }

    // /**
    //  * To tets guards
    //  */
    // public getUser(userId: string): UserDto {
    //     const user: User = staticUserList.find(u => u.userId === userId)
    //     const userSession: UserSession = this.getUserSession(userId)

    //     if(!user) {
    //         throw new NotFoundException(`User with id ${userId} not found.`)
    //     }
    //     return {
    //         user: user,
    //         userSession: userSession
    //     }
    // }

    // public createUser(createUser: CreateUserDto): UserDto {
    //     // const userId: string = cryptoRandomString({ length: 6, type: 'alphanumeric' })
    //     // console.log(cryptoRandomString)

    //     // Create new User
    //     const userId: string = `id:${Math.floor(Math.random() * 1000000)}`
    //     const user: User = {
    //         userId: userId,
    //         ...createUser
    //     }
    //     appendToUserArray(user)
    //     // console.log(staticUserList)

    //     // Create new UserSession
    //     const sessionId: string = '' +  Math.floor(Math.random() * 1_000_000_000)
    //     const session: UserSession = {
    //         sessionId: sessionId,
    //         userId: userId
    //     }
    //     appendToSessionArray(session)
    //     // console.log(staticSessionList)

    //     return {
    //         user: user,
    //         userSession: session
    //     }
    // }

    // private getUserSession(userId: string): UserSession {
    //     const session: UserSession = staticSessionList.find(s => userId === s.userId)
    //     if(!session) {
    //         throw new UnauthorizedException(`No session for User ${userId}`)
    //     }

    //     return session
    // }

    // private sessionReader(userId: string, sessionId: string): UserSession {
    //     // const sessionList: UserSession[] = require('../user-sessions.json')
    //     const userSession: UserSession = staticSessionList.find(s => s.sessionId == sessionId && s.userId == userId)
    //     if(!userSession) {
            
    //         throw new UnauthorizedException(`No session with userId ${userId} and sessionId ${sessionId}.`)
    //     }

    //     return userSession        
    // }

    // private getValidatedUser(userSession: UserSession): User {
    //     // const userList: User[] = require('../user-data.json')
    //     const user: User = staticUserList.find(u => u.userId === userSession.userId)

    //     if(!user) {
    //         throw new NotFoundException(`User with userId ${userSession.userId} not found.`)
    //     }


    //     return user
    // }



}
