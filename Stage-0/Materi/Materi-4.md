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

# For Loop
Digunakan saat jumlah iterasi diketahui. Prosesnya yang terstruktur membuat perulangan ini sering digunakan, strukturnya dapat dilihat sebagai berikut 

1. Inisialisasi : Menyiapkan variabel penghitung.
2. Kondisi : Memeriksa apakah iterasi boleh berlanjut.
3. Update : Menambah/Mengurangi nilai penghitung. 

```javascript
    //let i = 0; Inisialisai // i < 3 ; Kondisi // i++ ; Update 
for(let i = 0; i < 3; i++){
    console.log(i) // output: 0,1,2
}
```

Alur Eksekusi

```
[Start] // inisialisasi variabel i bernilai 0 
   |
   V
[apakah i lebih kecil dari 3 ?] -> [print nilai pada varibel i yaitu 0] -> [tambahkan variabel i dengan 1]
   |
   V
[apakah i lebih kecil dari 3 ?] -> [print nilai pada varibel i yaitu 1] -> [tambahkan variabel i dengan 1]
   |
   V 
[apakah i lebih kecil dari 3 ?] -> [print nilai pada varibel i yaitu 2] -> [tambahkan variabel i dengan 1]
   |
   V
[apakah i lebih kecil dari 3 ?] 
   |
   V
[Selesai]
 
```
Cukup mudah bukan ? 

# While loop
Pada perulangan ini, perulangan akan terus berjalan selama kondisi bernilai true. tidak ada jaminan berapa kali iterasi akan berjalan, selama kondisi bernilai true, kondisi akan terus berjalan. perulangan ini cocok untuk membaca data dengan nilai dinamis atau berubah-ubah

contoh visualisasi: 
```
[Mulai]
   |
   V
[Kondisi?] -> Benar -> [Eksekusi Kode]
   | Salah                    |
   V                          V
[Selesai]              [Update Variabel]
```

Contoh: 
```javascript
let sandi = ''
while(sandi != '1234'){
    sandi = prompt("Masukkan sandi") // prompt akan terus keluar sampai kata sandi benar
}
```

# Do ... While Loop
Pada perulangan ini blok kode akan dijalankan setidaknya sekali sebelum kode diperiksa

contoh visualisasi 
```javascript
[Mulai]
   |
   V
[Eksekusi Kode] -> [Update Variabel]
   |
   V
[Kondisi ?] -> Benar -> Ulangi
   | Salah
   V
[Selesai]
```

Contoh:
```javascript
let angka;
do{
    angka = prompt("Masukkan angka yang benrilai < 10 : ")
} while (angka <= 10);
```

# For ... of Loop (Iterasi nilai)
mengiterais nilai dari objek iterable (array, string, dll) bayangkan sebuah conveyor belt yang mengantar item satu persatu

contoh 
```javascript
const buah = ['🍇', '🍈', '🍉']
for (const b of buah){
    console.log(b)// "🍇", "🍈", "🍉"
}
```
alur
```
[🍇], [🍈], [🍉] -> Selesai
```
# For ... in loop (iterasi properti objek)
mengiterasi properti enumerable dari objek. Misal, membuka laci-laci dalam lemari dan melihat isinya 

Contoh 
```javascript
const mobil = {merek : "toyota", tahun: 2009}
for(const key in mobil){
    console.log(key, ":", mobil[key])
}
```

# Kontrol Loop : Break & Continue 
- `break` Menghentikan loop sepenuhnya (seperti tombol darurat)
- `continue` Melompati iterasi saat ini (seperti melewati langkah yang tidak perlu)

Contoh visualisasi dengan `break`
```javascript
for(let i = 1; i <= 5; i++){
    if (i === 3) break // berhenti di iterasi ke 3 
    console.log(i) // output: 1, 2
}
```

Alur 
```
1 -> 2 -> selesai (break saat i=3)
```

# Infinite loop
Inifinite loop adalah kondisi dimana perulangan tidak akan berhenti, kondisi ini harus dihindari. Cara menghindarinya ? pastikan perulangan kalian memiliki stop condition, atau kondisi dimana perulangan harus berhenti, yaitu KONDISI. 

Jadi, perulangan tanpa kondisi berhenti, akan menghasilkan perulangan yang tidak ada habisnya. 

Contoh
```javascript
// kode ini akan tidak akan berhenti, kenapa ? 
// karena alih-alih nilai i mendekati 5 yang merupakan kondisi berhenti atau stop condition atau kondisi yang harus dipenuhi agar kode nya berhenti nilai i malah terus berkurang dan menghasilkan perulangan yang tidak berujung 
for(let i = 0; i < 5; i--){
    console.log(i)
}
```

sudah mulai tergambar bagaimana cara kerja infinite loop ? 

# Kapan menggunakan setiap loop ? 

| Tipe Loop | Use Case |
| --- | --- |
| `for` | iterasi terprediksi (array, angka) | 
| `while` | Kondisi kompleks/tidak pasti | 
| `do...while` | validasi input (min 1x eksekusi) | 
| `for...of` | nilai array/string | 
| `for...in` | properti objek | 

## Tips Visualisasi
1. Gunakan console.log : Jalankan kode langkah demi langkah di terminal, untuk melihat perubaha variabel 
2. Gambar flowchart atau diagram alur : untuk memahami perulangan seperti apa yang akan dibuat dan bagaimana alur kerjanya


# Latihan soal looping 
Soal : 
buatlah perulangan 1 - 1000 dengan pertambahan counter 1, pada perulangan pastikan : 
- Jika angka merupakan kelipatan 4 tampilkan "Empat"
- Jika angka merupakan kelipatan 7 tampilkan "Tujuh"
- Jika angka merupakan kelipatan 4 dan tujuh tampilkan "Empat Tujuh"
- Jika tidak memenuhi kondisi, tampilkan angka saja 

ekspektasi output
```
1  
2  
3  
Empat (Kelipatan 4)
5  
6  
Tujuh (Kelipatan 7)
Empat (Kelipatan 4)
...  
28 (Empat Tujuh) (Kelipatan Empat dan Tujuh) 
```

silahkan kerjakan soal ini terlebih dahulu sebelum melihat solusi yang akan saya tulis.

```javascript
for(let i = 0; i <= 1000; i++){
    if(i % 28 == 0){ // KPK dari 4 dan 7 = 28
        console.log("Empat Tujuh")
    } else if (i % 4 == 0){
        console.log("Empat")
    } else if (i % 7 == 0){
        console.log("Tujuh")
    } else{
        console.log(i)
    }
}
```

# Nested loop
Nested loop adalah perulangan terstruktur didalam suatu perulangan. Setiap iterasi dari loop luar (outer loop) akan menjalankan loop dalam (inner loop) secara penuh 

visualisasi 
```
Loop Luar (i = 0 -> i < 3)
 | 
 |--- Iterasi i = 0:
 |      Loop Dalam (j = 0 -> j < 2) -> j=0, j=1
 |
 |--- Iterasi i = 1:
 |      Loop Dalam (j = 0 -> j < 2) -> j=0, j=1
 |--- Iterasi i = 2:
 |      Loop Dalam (j = 0 -> j < 2) -> j=0, j=1
```

### Contoh Sederhana
#### 1. penerapan sederhana 
```javascript
for(let i = 0; i < 3; i++){
    console.log(`Outer: ${i}`)
    for(let j = 0; j < 2; j++){
        console.log(`  Inner: ${j}`)
    }
}
```
```
Outer: 0  
  Inner: 0  
  Inner: 1  
Outer: 1  
  Inner: 0  
  Inner: 1  
Outer: 2  
  Inner: 0  
  Inner: 1  
```
Penjelasan: 
 1. Loop luar berjalan sebanyak 3 kali (i = 0,1,2)
 2. Setiap iterasi luar berjalan, loop dalam berjalan sebayak 2 kali (j = 0,1)
 3. Total iterasi = 3 (outer) x 2 (inner) = 6 iterasi


#### 2. Use Case dari nested loop
a. Matriks/grid
mengakses elemen dengan array multidimensi (contoh :ordo 3x3 matriks)
``` javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let row = 0; row < 3; row++) {         // Loop baris
  for (let col = 0; col < 3; col++) {       // Loop kolom
    console.log(matrix[row][col]); 
  }
}
```
output 
`1, 2, 3, 4, 5, 6, 7, 8, 9`

b. pola bintang
```javascript
let pattern = "";
for (let i = 1; i <= 5; i++) {           // Loop baris
  for (let j = 1; j <= i; j++) {         // Loop kolom (bintang per baris)
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
```
output 
```
*  
**  
***  
****  
*****  
```

c. bubble sort

contoh algoritma pengurutan sederhana
```javascript
const arr = [5, 3, 8, 2];
for (let i = 0; i < arr.length; i++) {         // Loop utama
  for (let j = 0; j < arr.length - 1; j++) {   // Loop perbandingan
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Tukar nilai
    }
  }
}
console.log(arr); // Output: [2, 3, 5, 8]
```

## Visualisasi Kompleksitas
nested loop memiliki kompleksitas waktu O(n^2) jika kedua loop bergantung pada input yang sama  
```javascript
for (let i = 0; i < n; i++) {       // O(n)
  for (let j = 0; j < n; j++) {     // O(n)
    // Operasi O(1)
  }
}
// Total: O(n × n) = O(n²)
```

## Tips n Best Practice

1. Hindari nested loop dalam (>2 Level) untuk mencegah kompleksitas yang tinggi
2. Gunakan fungsi terpisah untuk inner loop jika logika terlalu rumit
3. Break/Continue bisa digunakan untuk mengontrol aliran, tetapi tetap hati hati dengan scope 
4. Optimasi dengan cache nilai yang sering diakses (misal: array.length)

## Kesalahan yang biasa terjadi 

- Menimpa variabel perulangan 
```javascript
for (let i = 0; i < 3; i++) {
  for (let i = 0; i < 2; i++) { // ❌ Variabel i ter-timpa
    console.log(i);
  }
}
```
- Infinite loop
```javascript
for (let i = 0; i < 5; i++) {
  while (true) { // ❌ Tidak ada kondisi berhenti
    console.log(i);
  }
}
```

# Latihan Soal Nested Loop
Disini kita akan belajar menggunakan nested loop dalam coding problems, mungkin keliatan susah banget untuk mempelajarinya.

Tapi, kalau kalian fokus ikutin step by step dan mencobanya langsung di terminal kalian, Nested Loop ini tidak terlalu rumit.

Kuncinnya adalah latihan menggunakan indexing dan fokus pada perubahan variable dari inner loop sama outer loop.

SOAL :
Buat program untuk menampilkan semua bilangan prima dari 1 hingga 100.
Bilangan prima adalah bilangan yang hanya bisa dibagi oleh 1 dan dirinya sendiri (contoh: 2, 3, 5, 7, 11, dst.).

```javascript
for (let i = 2; i <= 100; i++) {       // Loop utama (angka yang dicek)
  let isPrime = true;                  // Flag untuk menKaliani bilangan prima

  for (let j = 2; j < i; j++) {        // Loop pembagi (2 hingga i-1)
    if (i % j === 0) {                 // Jika i habis dibagi j
      isPrime = false;                 // Bukan bilangan prima
      break;                           // Keluar dari loop dalam
    }
  }

  if (isPrime) {                       // Jika isPrime tetap true
    console.log(i);                    // Tampilkan bilangan prima
  }
}
```


Penjelasan: 

Loop Utama `(i)`:
Loop ini mengiterasi angka dari 2 hingga 100 (i = 2 → i <= 100).
Angka 1 bukan bilangan prima, jadi kita mulai dari 2.

Flag `isPrime`:
Variabel ini digunakan untuk menKaliani apakah angka i adalah bilangan prima.
Awalnya di-set true (asumsi i adalah prima).

Loop Dalam `(j)`:
Loop ini mengiterasi pembagi dari 2 hingga i-1 (j = 2 → j < i).
Jika i habis dibagi j (i % j === 0), maka i bukan bilangan prima.
Set isPrime = false dan hentikan loop dalam dengan break.

Cek `isPrime`:
Jika isPrime tetap true setelah loop dalam selesai, berarti i adalah bilangan prima.
Tampilkan i menggunakan console.log.

## Visualisasi Proses
mengecek apakah angka 5 adalah bilangan prima
```
Loop Utama (i = 5):  
   │  
   ├── Loop Dalam (j = 2):  
   │     5 % 2 = 1 → Tidak habis dibagi  
   │  
   ├── Loop Dalam (j = 3):  
   │     5 % 3 = 2 → Tidak habis dibagi  
   │  
   └── Loop Dalam (j = 4):  
         5 % 4 = 1 → Tidak habis dibagi  

   Setelah loop dalam selesai:  
   isPrime = true → 5 adalah bilangan prima  
```
mengecek apakah bilangan 6 adalah bilangan prima 
```
Loop Utama (i = 6):  
   │  
   ├── Loop Dalam (j = 2):  
   │     6 % 2 = 0 → Habis dibagi  
   │     isPrime = false  
   │     break (hentikan loop dalam)  

   Setelah loop dalam selesai:  
   isPrime = false → 6 bukan bilangan prima  
```

output program
```
2  
3  
5  
7  
11  
13  
17  
19  
23  
29  
31  
37  
41  
43  
47  
53  
59  
61  
67  
71  
73  
79  
83  
89  
97  
```

## Optimasi kode 
untuk meningkatkan efisiensi, kita bisa membatasi loop dalam hingga akar kuadrat dari i, karena jika i tidak habis dibagi oleh bilangan hingga akar kuadrat i, maka pasti i adalah bilangan prima 

kode optimasi 
```javascript
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) { // Hanya cek hingga √i
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
```

#### Latihan tambahan (Opsional)
1. Memodifikasi program untuk menampilkan bilangan BUKAN BILANGAN PRIMA dari 1 hingga 100
2. Hitung jumlah bilangan prima dari 1 sampai 100
3. buat program untuk mengecek apakah sebuah angka yang diinput pengguna adalah bilangan prima 


Dengan memahami loop dan nested loop, kalian bisa menangani kasus kompleks seperti pengolahan data multidimensi, algoritma sorting, dan generasi pola. Latih kemampuan dengan mencoba variasi pola dan algoritma. 

Materi Video : SOON