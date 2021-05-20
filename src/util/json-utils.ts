import { NotFoundException, UnauthorizedException } from '@nestjs/common'
import * as fs from 'fs'
import { UserSession } from 'src/user/dto/user-session.model'
import { User } from 'src/user/dto/user.model'
import { staticSessionList, staticUserList } from './config/config'

export function appendToJsonArray<T>(value: T, file: string): void {
    let fileContent: T[] = JSON.parse(fs.readFileSync(`./src/${file}`).toString()).map(o => Object.assign({} as T, o))
    console.log("fileContent: ", fileContent)
    fileContent.push(value)
    console.log("fileContent: ", fileContent)
    fs.writeFileSync(`./src/${file}`, JSON.stringify(fileContent))
}

export function appendToUserArray(value: User) {
    staticUserList.push(value)
}

export function appendToSessionArray(value: UserSession) {
    staticSessionList.push(value)
}


export function getUserEntryByEmail(email: string): User {
    const user: User = staticUserList.find((u: User) => u.email === email)

    if(!user) throw new NotFoundException(`No user with email ${email}.`)

    return user
}

export function getUserEntryByEmailPassword(email: string, password: string): User {
    const user: User = staticUserList.find((u:User) => u.email === email && u.password === password)

    if(!user) throw new UnauthorizedException(`Wrong username or password.`)

    return user
}