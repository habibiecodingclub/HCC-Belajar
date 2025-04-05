// Soal ini dapat teman-teman kerjakan dengan pemahaman yang solid terkait materi pertama sampai materi ketiga, tanpa pemahaman mendasar terhadap javascript soal ini tidak dapat dikerjakan dengan baik 

// Hindari Penggunaan AI! lebih baik bertanya pada discord atau membaca forum daripada bertanya ke AI yang hanya akan menumpulkan kemampuan berpikir komputasi dan berpikir kritis kalian!

// Soal 1

// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel dan peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila peran kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
// ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
// halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
// halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
// halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
// tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
// tips belajar penggunaan `` (backtick) pada javascript agar
// mudah dalam memasukan variabel ke dalam string
// tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

let nama = "Damar", peran = "Ksatria";

function play(nama, peran) {
    if (!nama) {
        return "nama wajib diisi";
    } else if (!peran) {
        return "Pilih Peranmu untuk memulai game";
    }

    switch (peran) {
        case "Ksatria":
            return `halo Ksatria ${nama}`
        case "Tabib":
            return `halo Tabib ${nama}`;
        case "Penyihir":
            return `halo Penyihir ${nama}`;
        default:
            return "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada";
    }
}

//code disini gunakan console.log untuk outputnya

console.log("==== Proxytia ====")
console.log(play(nama, peran));

