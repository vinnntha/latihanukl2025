import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttendanceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { userId: number; status: string; date?: string }) {
    try {
      const attendance = await this.prisma.attendance.create({
        data: {
          userId: data.userId,
          status: data.status,
          createdAt: data.date ? new Date(data.date) : new Date(),
        },
      });
      return { success: true, message: 'Presensi berhasil', data: attendance };
    } catch (error) {
      throw new InternalServerErrorException(`Gagal presensi: ${error.message}`);
    }
  }

  async getMonthlySummary(userId: number) {
    try {
      const records = await this.prisma.attendance.findMany({
        where: { userId },
      });

      const summary = records.reduce((acc, curr) => {
        const month = curr.createdAt.getMonth() + 1; // Januari = 1
        acc[month] = (acc[month] || 0) + 1;
        return acc;
      }, {} as Record<number, number>);

      return {
        success: true,
        message: 'Rekap kehadiran bulanan',
        data: summary,
      };
    } catch (error) {
      throw new InternalServerErrorException(`Gagal membuat rekap: ${error.message}`);
    }
  }

  async analyzeAttendance(body: { startDate: string; endDate: string }) {
    try {
      const { startDate, endDate } = body;
      const records = await this.prisma.attendance.findMany({
        where: {
          createdAt: {
            gte: new Date(startDate),
            lte: new Date(endDate),
          },
        },
        include: { user: true },
      });

      const stats = records.reduce((acc, curr) => {
        const name = curr.user.name;
        acc[name] = (acc[name] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      return {
        success: true,
        message: 'Analisis kehadiran periode tertentu',
        data: stats,
      };
    } catch (error) {
      throw new InternalServerErrorException(`Gagal analisis kehadiran: ${error.message}`);
    }
  }

  async findHistory(userId: number) {
  const records = await this.prisma.attendance.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });

  if (records.length === 0) {
    return {
      success: false,
      message: 'Belum ada riwayat presensi untuk user ini',
      data: [],
    };
  }

  return {
    success: true,
    message: 'Riwayat presensi berhasil diambil',
    data: records,
  };
}

}
