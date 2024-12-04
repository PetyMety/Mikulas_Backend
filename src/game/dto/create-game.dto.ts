import { IsIn, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreateGameDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsIn(['wood', 'metal', 'plastic', 'other'])
  material: string;

  @IsPositive()
  weight: number;

  
}
