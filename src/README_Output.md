1. Autentikasi dan Otorisasi Endpoint: /api/auth/login dengan Method: POST Untuk login pengguna dan menghasilkan token autentikasi.
<img width="1920" height="1080" alt="Screenshot (86)" src="https://github.com/user-attachments/assets/bc548024-c2c4-454e-892c-ded27a8f6b69" />

2. Penggelolaan data pengguna
- Menambah Pengguna
  Endpoint: /api/users dengan Method: POST Untuk menambahkan data pengguna baru.
<img width="1920" height="1080" alt="Screenshot (93)" src="https://github.com/user-attachments/assets/a1830cb5-1657-4293-8283-fe80e3132d4a" />

- Mengubah data pengguna
  Endpoint: /api/users/{id} dengan Method: PUT Untuk mengubah data pengguna.
<img width="1920" height="1080" alt="Screenshot (88)" src="https://github.com/user-attachments/assets/7cccad41-38cb-48ea-8edb-1c43a482c09f" />

- mengambil data pengguna
Endpoint: /api/users/{id} dengan Method: GET Untuk Mengambil data pengguna berdasarkan ID.
<img width="1920" height="1080" alt="Screenshot (87)" src="https://github.com/user-attachments/assets/62ba1d78-760c-4d18-8ba1-c00565a120e5" />

3. Pencatatan Presensi
- Melakukan Presensi
Endpoint: /api/attendance dengan Method: POST Untuk mencatat kehadiran pengguna pada hari tersebut.
<img width="1920" height="1080" alt="Screenshot (89)" src="https://github.com/user-attachments/assets/31ad883a-e8c6-4e17-b54a-0fec770f6c1b" />

- Melihat Riwayat Presensi Pengguna
Endpoint: /api/attendance/history/{user_id} dengan Method: GET untuk Mengambil riwayat presensi pengguna berdasarkan ID pengguna.
<img width="1920" height="1080" alt="Screenshot (90)" src="https://github.com/user-attachments/assets/f679330c-0eaa-444c-82eb-4daf97c09618" />

4. Analisis Kehadiran
- Melihat Rekap Kehadiran Bulanan
Endpoint: /api/attendance/summary/{user_id} dengan Method: GET untuk Menampilkan rekap kehadiran bulanan pengguna.
<img width="1920" height="1080" alt="Screenshot (91)" src="https://github.com/user-attachments/assets/d859110c-e100-4a6a-bb0e-681927c2b9bd" />

- Analisis Tingkat Kehadiran Berdasarkan Parameter Tertentu
Manajemen ingin mengetahui persentase kehadiran setiap pengguna berdasarkan parameter yang lebih spesifik, misalnya per periode tertentu. Manajemen juga ingin membandingkan tingkat kehadiran antar-kelompok, misalnya berdasarkan kelas atau jabatan, guna mengidentifikasi tren yang mungkin menunjukkan potensi masalah kedisiplinan. menggunakan Endpoint /api/attendance/analysis dengan Method POST untukMelakukan analisis tingkat kehadiran pengguna berdasarkan periode waktu dan kategori tertentu.
<img width="1920" height="1080" alt="Screenshot (92)" src="https://github.com/user-attachments/assets/69ec392e-ca4c-4e4c-bc67-4cdbd7a09e9e" />
