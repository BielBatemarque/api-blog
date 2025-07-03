import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthControler {
    constructor(private readonly authService: AuthService){}

    @Post('login')
    login() {
        return this.authService.doLogin();
    }
}