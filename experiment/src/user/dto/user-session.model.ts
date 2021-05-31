import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class UserSession {
    @ApiProperty({ example: "userId:1234" })
    @IsString()
    userId: string

    @ApiProperty({ example: "sessionId:1234" })
    sessionId: string
}