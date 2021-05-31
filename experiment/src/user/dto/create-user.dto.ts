import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, Validate } from "class-validator"
import { EmailValidationPipe } from '../pipes/email-validation.pipe'

export class CreateUserDto {

    @ApiProperty({ example: "Hans Peter"})
    name: string

    @ApiProperty({example: "user@test.com"})
    @Validate(EmailValidationPipe)
    email: string

    @ApiProperty({ example: 21 })
    age: number

    verified: boolean

    @ApiProperty({ example: "5up3r_53cur3"})
    password: string
}