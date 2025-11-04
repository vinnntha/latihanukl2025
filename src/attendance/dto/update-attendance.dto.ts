import { PartialType } from '@nestjs/mapped-types';
import { CreateAttendanceDto } from './create-attendance.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAttendanceDto extends PartialType(CreateAttendanceDto) {

    @IsNumber()
    userId: number;

    @IsString()
    @IsOptional()
    status: string;
}
