import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdatePasswordDto {
  @IsString({ message: 'Senha precisa ser uma string' })
  @IsNotEmpty({ message: 'Senha não pode estar vazia' })
  currentPassword: string;

  @IsString({ message: 'nova senha precisa ser uma string' })
  @IsNotEmpty({ message: 'nova senha não pode estar vazia' })
  @MinLength(6, { message: 'nova Senha deve ter no minimo 6 caracteres' })
  newPassword: string;
}
