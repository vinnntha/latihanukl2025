import { Controller, Post, Body, Get, Param, UseGuards, Req } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import type { Request } from 'express';

@Controller('api/attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) { }

  @UseGuards(JwtAuthGuard)
  @Post('checkin')
  async checkIn(@Body() body: any, @Req() req: Request) {
    return this.attendanceService.create({
      userId: (req as any).user.id,
      status: body.status,
      date: body.date,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('summary/:user_id')
  async getSummary(@Param('user_id') user_id: string) {
    return this.attendanceService.getMonthlySummary(Number(user_id));
  }

  @UseGuards(JwtAuthGuard)
  @Post('analysis')
  async analyze(@Body() body: any) {
    return this.attendanceService.analyzeAttendance(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('history/:user_id')
  async history(@Param('user_id') user_id: string) {
    return this.attendanceService.findHistory(Number(user_id));
  }
}