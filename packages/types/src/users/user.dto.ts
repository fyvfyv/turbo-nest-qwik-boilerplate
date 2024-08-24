import {IsString, ValidateIf} from 'class-validator';

export class UserDto {
  @IsString()
  id!: string;

  @IsString()
  @ValidateIf((_object: unknown, value: null) => value !== null)
  username!: string | null;
}
