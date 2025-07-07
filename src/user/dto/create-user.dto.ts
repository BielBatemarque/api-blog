import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString({message: "name precisa ser uma string"})
    @IsNotEmpty({message: "name não pode estar vazio"})
    name: string;

    @IsEmail({}, {message: "E-mail inválido"})
    email: string;

    @IsString({message: "senha precisa ser uma string"})
    @IsNotEmpty({message: "senha não pode estar vazia"})
    password: string;
}
