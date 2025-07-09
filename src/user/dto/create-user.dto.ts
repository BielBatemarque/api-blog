import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'name precisa ser uma string' })
  @IsNotEmpty({ message: 'name não pode estar vazio' })
  name: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;

  @IsString({ message: 'senha precisa ser uma string' })
  @IsNotEmpty({ message: 'senha não pode estar vazia' })
  @MinLength(6, { message: 'Senha deve ter no minimo 6 caracteres' })
  password: string;
}
