import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, Validate } from "class-validator"
import { EmailValidationPipe } from '../pipes/email-validation.pipe'

export class CreateUserDto {

    @ApiProperty()
    name: string

    @ApiProperty({example: "user@test.com"})
    @Validate(EmailValidationPipe, {

    })
    email: string

    @ApiProperty()
    age: number

    verified: boolean

    @ApiProperty()
    password: string
}