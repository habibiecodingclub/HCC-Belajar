// Soal 2 
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let tanggal = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 21; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 7; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2002; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
// output yang diharapkan: 
// console.log("Sekarang adalah tanggal 12 Bulan Februari tahun 2001")

//code switch case kamu disini
if(tanggal < 1 || tanggal > 32){
    console.log("error tanggal");
}
if(bulan < 1 || bulan > 12){
    console.log("error bulan");
}
if(tahun < 1900 || tahun > 2200){
    console.log("error tahun");
}

switch (bulan){
    case 1:
        console.log(`Sekarang adalah tanggal ${tanggal} Bulan Januari Tahun ${tahun}`)
        break;
    case 2:
        console.log(`Sekarang adalah tanggal ${tanggal} Bulan Februari Tahun ${tahun}`)
        break;
	case 3:
        console.log(`Sekarang adalah tanggal ${tanggal} Bulan Maret Tahun ${tahun}`)
        break;
	case 4:
        console.log(`Sekarang adalah tanggal ${tanggal} Bulan April Tahun ${tahun}`)
        break;
	case 5:
        console.log(`Sekarang adalah tanggal ${tanggal} Bulan Mei Tahun ${tahun}`)
        break;
	case 6:
        console.log(`Sekarang adalah tanggal ${tanggal} Bulan Juni Tahun ${tahun}`)
        break;
	case 7:
        console.log(`Sekarang adalah tanggal ${tanggal} Bulan Juli Tahun ${tahun}`)
        break;
	case 8:
        console.log(`Sekarang adalah tanggal ${tanggal} Bulan Agustus Tahun ${tahun}`)
        break;
	case 9:
        console.log(`Sekarang adalah tanggal ${tanggal} Bulan September Tahun ${tahun}`)
        break;
	case 10:
        console.log(`Sekarang adalah tanggal ${tanggal} Bulan Oktober Tahun ${tahun}`)
        break;
	case 11:
        console.log(`Sekarang adalah tanggal ${tanggal} Bulan November Tahun ${tahun}`)
        break;
	case 12:
        console.log(`Sekarang adalah tanggal ${tanggal} Bulan Desember Tahun ${tahun}`)
  		break;
}
//cupu bg