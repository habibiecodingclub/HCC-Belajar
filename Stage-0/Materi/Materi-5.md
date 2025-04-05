# Function/Fungsi

Pada bagian ini, kita akan belajar apa itu fungsi pada javascript.

Javascript itu seperti <b>kotak ajaib</b> yang bisa menerima input (parameter) kemudian mengolahnya, lalu melemparkan atau memberi output (return) hasil olahan-atau tidak sama sekali!

fungsi bisa dibilang sebagai semacam block of code yang isinya proses tertentu, misal ada fungsi balikKata yang merupakan fungsi untuk membalik sebuah kata. 

Perlu di ingat, bahwa fungsi itu bisa mengembalikan nilai dan bisa tidak mengembalikan nilai sama sekali. 

## 1. Parameter
Parameters adalah variabel lokal yang kita definisikan di dalam tanda kurung `()`

pada fungsi berikut, parameter akan dianalogikan sebagai  bahan-bahan untuk membuat jus apel

```javascript
function buatJus(jumlahApel, gula){
    return `Jus ${apel} apel + ${gula} sendok gula!`
}
console.log(buatJus(3,5)) // Output : "Jus 3 Apel + 5 Sendok Gula!"
```

Catatan: 
- Parameter bisa merupakan `berbagai tipe data` (number, string, array, bahkan fungsi lainnya!)
- Jika argumen kurang atau lebih, javascript tidak error. Contoh:

```javascript
console.log(buatJus(3)) // Output : Jus 3 Apel + undefined sendok Gula!
```

## 2. Return: Fungsi yang "Mengembalikan" nilai
Keyword `return` berfungsi untuk mengembalikan nilai dan menghentikan eksekusi fungsi. Kalau tidak ada `return`, fungsi akan mengembalikan `undefined`:

```javascript
// Fungsi dengan return
function tambah(a, b) {
    return a + b;
}

let hasil = tambah(5, 3);
console.log("Hasil penjumlahan:", hasil); // Output: Hasil penjumlahan: 8

// Fungsi tanpa return
function cetakPesan(nama) {
    console.log("Halo, " + nama + "! Selamat datang.");
}

let pesan = cetakPesan("Andi"); // Output: Halo, Andi! Selamat datang.
console.log("Nilai yang dikembalikan:", pesan); // Output: Nilai yang dikembalikan: undefined
```

## 3. Sifat unik fungsi lainnya 
a. First-Class Citizens 

Fungsi bisa diperlakukan seperti variabel biasa: dengan cara disimpan di variabel, jadi parameter, atau bahkan jadi nilai return

```javascript
// Fungsi sebagai variabel
const potongApel = function(jumlah){
    return jumlah * 4 // 1 apel dipotong jadi 4
}
function prosesApel(apel, aksi){
    return aksi(apel)
}

console.log(prosesApel(3, potongApel)) // 12
```

b. Default parameters 
memberikan nilai default jika jika argumen (nilai parameter) yang diberikan.

```javascript
function buatPieApel(apel = 5){
    return `Pie dengan ${apel} apel`;
}
console.log(buatPieApel) // "Pie dengan 5 apel"
```

c. Arrow function 
Syntax lebih singkat untuk fungsi yang sederhana

```javascript
//Bentuk biasa
const hitungApel = function(n) {
    return n + 1
}

// Arrow function
const hitungApel = n => n+1

console.log(hitungApel(2)) // 3
```

d. Scope: Aturan "Zona" Variabel

variabel di dalam fungsi (local scope) tidak bisa di akses dari luar. Tapi variabel di global scope bisa diakses dari dalam fungsi: 

```javascript
let totalApel = 10;
function kurangiApel(){
    let apelDikurangi = 2;
    totalApel -= apelDikurangi
    console.log(totalApel) // 8
}
console.log(apelDikurangi) // Error! variabel hanya ada didalam fungsi
```


# Tips penting!
- Nama fungsi dan parameter harus jelas !
```javascript
// Buruk 
function x(a,b){...}

// Baik
function hitungTotalApel(jumlahAwal, tambahan){...}
```
- Gunakan `return` untuk fungsi yang perlu menghasilkan nilai 
` hindari side effects (mengubah data global) di dalam fungsi, kecuali memang diperlukan
- teliti dalam penentuan parameter mau pakai tipe data apa saja
- jangan lupa kasih `()` untuk menjalankan fungsinya 


Dengan memahami fungsi, kamu bisa menulis kode yang modular (terpisah), reusable, dan mudah didebug!

Link video materi : Soon