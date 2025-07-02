import { Controller, Post } from "@nestjs/common";

@Controller('auth')
export class AuthControler {
    @Post('login')
    login() {}
}