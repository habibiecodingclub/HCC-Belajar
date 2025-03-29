# Belajar Looping
Looping pada javascript (atau bahasa pemrograman lainnya) memungkinkan eksekusi kode blok berulang kali tanpa menulis kode yang sama secara manual. Looping yang digunakan secara benar akan menghemat waktu, mengurangi kesalahan, dan menangani struktur data seperti array atau objek. Di javascript, terdapat beberapa jenis loop yang bisa dipilih berdasarkan kebutuhan.

## Point penting yang harus kalian pahami pada perulangan
- Pelajari Indexing pada String dan Array
- Flow Looping
- Arah Looping
- Harus ada yang membuat looping berhenti (kecuali kebutuhan infinite loop khusus)
- Jauhi Infinite Loop kalau tidak perlu
- Permainan Kondisi pada looping
- Memahami Flow Nested Loop (KUNCI UTAMA)

Looping biasanya dilakukan pada tipe data array, string, dan angka. yang paling umum digunakan ialah perulangan pada array, lalu sering bertemu dengan yang namanya method <b> length </b> pada tipe data string dan array di javascript disambung dengan indexing pada tipe data tersebut.

kata kunci pada indexing adalah 
- Index selalu dimulai dari angka 0 
- Kalau mau menyentuh atau memulai item/element/huruf paling kanan atau awal gunakan length - 1 pada index

Fundamental menulis dan pemahaman looping itu butuh waktu kisaran berminggu-minggu untuk terbentuk melalui challenge/quiz/tantangan berupa quiz/soal pemrograman yang mewajibkan penggunaan perulangan. 

# Konsep Dasar Looping 
Looping adalah proses mengulang sebuah kode blok selama suatu kondisi terpenuhi. Bayangkan sebuah robot yang mengangkat kotak dari truk sampai tidak ada kotak yang tersisa. Setiap iterasi (perulangan) adalah "satu kali angkat kotak", dan kondisi berhenti adalah "truk kosong"

contoh visualisasi: 
```
[Start] 
   |
   V
[Kondisi ?] -> Benar -> [Eksekusi Kode] -> [Update Variabel]
   | Salah
   V
[Selesai]
```