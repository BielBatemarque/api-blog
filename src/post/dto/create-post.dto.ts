import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'Titulo precisa ser uma string' })
  @Length(10, 150, { message: 'Titulo precisa ter entre 10 e 150 caracteres' })
  title: string;

  @IsString({ message: 'Titulo precisa ser uma string' })
  @Length(10, 200, { message: 'Exerto precisa ter entre 10 e 200 caracteres' })
  excerpt: string;

  @IsString({ message: 'Conteudo precisa ser uma string' })
  @IsNotEmpty({ message: 'Este conteudo não pode ficar vazio' })
  content: string;

  @IsOptional()
  @IsUrl(
    { require_tld: false },
    { message: 'URL da imagem precisa ser uma url válida' },
  ) // Top level domain proíbe localhost e IP
  coverImageUrl?: string;
}
