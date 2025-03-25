import { IsEmail, IsString, Length, Matches, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterDto {
  @IsString()
  @Length(3, 100)
  @Transform(({ value }): string => value.trim())
  name: string;

  @IsEmail()
  @Transform(({ value }): string => value.toLowerCase().trim())
  email: string;

  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
    message: 'A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial',
  })
  password: string;

  @IsString()
  @Length(11, 11)
  @Transform(({ value }): string => value.replace(/\D/g, ''))
  cpf: string;

  @IsString()
  @Length(10, 15)
  @Transform(({ value }): string => value.replace(/\D/g, ''))
  phone: string;
}