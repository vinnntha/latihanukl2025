1. Attendance Module (Presensi) Fungsi:
Modul ini digunakan untuk mencatat, melihat, menganalisis, dan merekap data kehadiran pengguna (user). Ia berhubungan langsung dengan database melalui PrismaService.

End point : 
POST /api/attendance/checkin -> untuk melakukan presensi user
GET /api/attendance/history/{id} -> untuk menampilkan history presensi user
GET /api/attendance/summary/{id} -> untuk menampilkan rekap presensi bulanan
POST /api/attendance/analysis -> untuk analisis kehadiran semua user

Semua request diarahkan ke controler kemudian memanggil service
controller (attendance.controller.ts)
bertugas menerima semua request dari route dan memanggil service
@Controller('api/attendance')
→ Menentukan base path endpoint dari semua route di dalam class ini.
@Post('checkin') → Membuat endpoint POST /api/attendance/checkin.
@UseGuards(JwtAuthGuard) → Mengamankan endpoint ini dengan JWT authentication guard, jadi hanya user dengan token valid yang bisa mengakses.
@Body() → Mengambil data dari body request (misalnya status, date).
@Req() → Mengambil objek request dari Express, yang sudah berisi user hasil verifikasi JWT (req.user).
@Get('summary/:user_id') → Endpoint untuk mengambil ringkasan kehadiran bulanan seorang user.
@Param('user_id') → Mengambil parameter user_id dari URL.
@Post('analysis') → Endpoint untuk melakukan analisis kehadiran.
getMonthlySummary() untuk menghitung rekap presensi user tersebut (biasanya jumlah hadir, izin, alpa, dsb).
analyzeAttendance() akan memproses data, misalnya menghitung pola keterlambatan, absensi beruntun, dsb.
findHistory() untuk mendapatkan daftar presensi harian user tersebut dari database.

2. Auth Module (Autentikasi) Fungsi:
   Modul ini bertanggung jawab untuk login dan menghasilkan token autentikasi (JWT) agar user bisa mengakses sistem dengan aman.

Komponen dan Cara Kerja:
Controller (auth.controller.ts)
Endpoint: POST /auth/login
Menerima email dan password, lalu meneruskan ke AuthService.
Service (auth.service.ts)
login() → membuat token JWT berisi email user.
Token berlaku 1 jam (expiresIn: '1h').
Module (auth.module.ts)
Menghubungkan controller dan service autentikasi.

3. Users Module (Manajemen Pengguna) Fungsi:
   Modul ini mengatur data user seperti membuat user baru, membaca data user tertentu, dan memperbarui data user.
Komponen dan Cara Kerja:
Controller (users.controller.ts)
Endpoint:
POST /api/users -> Menambah user baru
GET /api/users/{id} -> Ambil data user
PUT /api/users/{id} -> Ubah data user

Service (users.service.ts)
Data user disimpan sementara di array lokal (belum ke database).
Membuat pengguna baru (create)
Mengambil data pengguna (findOne)
Memperbarui data pengguna (update)

DTO:
create-user.dto.ts → validasi data saat membuat user (nama, email, password, role).
update-user.dto.ts → validasi data saat update (boleh sebagian, semua optional).
read-user.dto.ts → format data saat dibaca.

Module (users.module.ts)
Menyatukan controller dan service agar bisa berjalan di dalam sistem NestJS.
