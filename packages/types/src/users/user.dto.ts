import { IsString, ValidateIf } from 'class-validator';

export class UserDto {
  @IsString()
  id!: string;

  @IsString()
  @ValidateIf((object: any, value: null) => value !== null)
  username!: string | null;
}
