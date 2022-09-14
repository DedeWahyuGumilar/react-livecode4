# Livecode 3 - Rental Sepatu

Seorang klien, yang berprofesi sebagai pengusaha sepatu, ingin mengembangkan bisnis jual beli sepatu dengan berinovasi meminjamkan sepatu kepada orang yang membutuhkan. Kebutuhan dari klien adalah sbb.

1. Manajemen transaksi data peminjaman sepatu.
2. Biaya pinjaman sepatu per hari Rp. 10.000. 
3. Maksimal lama durasi peminjaman hanya 3 hari.
4. Jika lebih dari 3 hari, ada denda Rp. 5000 per hari. 
 Biaya = 10000
 durasi =  3 hari
 denda = 5000 / hari
 hari = 28 hari
 if (durasi.length > 3){
   Biaya = -+ 5000
 }
5. Jika sepatu hilang, maka ada denda sebesar lama waktu peminjaman dikalikan 2.
 sepatuAda = false;
 if (sepatu === true){
   let dendaHilang = (durasi * 2) * 5000
 }
6. Jika sepatu kembali dalam keadaan rusak, maka akan dikenakan denda sebesar Rp. 10.000.
sepatuRusak = false;
if (sepatuRusak === true){
   denda = 10000
}

7. Ada page laporan berbentuk tabel berisikan transaksi peminjaman sepatu.

8. Ada page form untuk input data pinjaman sepatu.


9. Ada page form untuk input data pengembalian pinjaman sepatu.

## Petunjuk Teknis

Berdasarkan kebutuhan di atas, maka spesifikasi yang harus dipenuhi oleh developer adalah sebagai berikut.

### Aturan

1. Kerjakan sendiri dengan kemampuan sendiri untuk mengetahui sejauh mana penguasaan kalian di materi React JS fundamental ini.
2. Lama waktu pengerjaan 2 jam.
3. Buatlah `project react` baru sebelum memulai livecode.
4. Buatlah repository gitlab enigmacamp baru, di dalam group `Livecode`, dengan nama `react-livecode-3`.
5. Push kembali file soal ini ke repository project react kalian, baru setelah itu bisa mulai mengerjakan.

### Objek

```tsx
class Shoe {
  id: string;
  name: string;
  color: string;
  size: number;
  condition: string;
}

class Transaction {
  id: string;
  shoe: Shoe;
  wearer: string;
  duration: number;
  borrowedAt: number;
  returnedAt: number;
  payment: number;
  fine: number;
  status: string;
}
```

### Kriteria Penilaian

1. Gunakan context untuk manajemen data antar komponen.
2. Harus ada minimal 4 komponen utama, yaitu `ShoeRental`, `ShoeRentalReport`, `ShoeRentalForm`, dan `ShoeReturnForm`.
3. Komponen `ShoeRental` menjadi state manager dari **tiga** komponen lain.
4. Komponen `ShoeRentalReport` berupa tabel yang menampilkan data dengan judul seperti berikut:
   1. #(nomor baris)
   2. Nama Sepatu
   3. Ukuran Sepatu
   4. Warna Sepatu
   5. Nama Peminjam
   6. Tgl. Pinjam
   7. Tgl. Kembali
   8. Total Bayar
   9. Total Denda
   10. Kondisi Sepatu (Rusak, Baik)
   11. Status (Dipinjam, Kembali, Telat, Hilang)
5. Komponen `ShoeRentalForm` berupa form yang menampilkan field sebagai berikut:
   1. Sepatu (berupa dropdown isian pilihan sepatu yang tersedia dan belum dipinjam)
   2. Nama Peminjam
   3. Tgl. Pinjam (input type number)
   4. Durasi Pinjam (min 1 hari, maks 3 hari, boleh dibuat dropdown)
6. Komponen `ShoeReturnForm` berupa form yang menampilkan field sebagai berikut:

   1. Sepatu (berupa dropdown isian pilihan sepatu yang tersedia dan belum dipinjam)
   2. Nama Peminjam
   3. Tgl. Pinjam (form readonly menampilkan tgl pinjam)
   4. Tgl. Kembali (input type number)
   5. Kondisi sepatu (Rusak, Baik)
   6. Status (Kembali, Telat, Hilang)
   7. Total Bayar (form readonly, dihitung berdasarkan durasi)
   8. Total Denda (form readonly, dihitung otomatis sesuai kondisi sepatu rusak/hilang)

   > Field **Status** akan terisi otomatis **Kembali** jika tanggal kembali tepat waktu atau lebih awal, dan akan terisi **Telat** jika tanggal kembali melewati durasi pinjam.

7. Aplikasi yang berjalan sesuai persyaratan akan menjadi nilai utama yang mendapatkan porsi nilai **paling besar**.
8. Code sudah ditulis sesuai persyaratan kriteria penilaian akan mendapatkan nilai **kedua tertinggi**.
9. Tampilan aplikasi yang rapih akan mendapat **nilai tambah**.
10. Form dengan validasi akan mendapatkan **nilai tambah**.
