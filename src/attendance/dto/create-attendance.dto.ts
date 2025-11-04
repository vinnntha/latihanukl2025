import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateAttendanceDto {
  @IsNumber()
  userId: number;

  @IsString()
  @IsNotEmpty()
  status: string;
}
