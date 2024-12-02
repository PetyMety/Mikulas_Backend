import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateChildDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsBoolean()
  isGood: boolean;
}
