# Soal ini dapat teman-teman kerjakan dengan pemahaman yang solid terkait materi pertama sampai materi ketiga, tanpa pemahaman mendasar terhadap javascript soal ini tidak dapat dikerjakan dengan baik 

# Hindari Penggunaan AI! lebih baik bertanya pada discord atau membaca forum daripada bertanya ke AI yang hanya akan menumpulkan kemampuan berpikir komputasi dan berpikir kritis kalian!

# Soal 1

# Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
# Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
# yaitu nama dan peran. Variabel peran harus memiliki isi data, 
# bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
# bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
# Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
# Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
# peran serta mengeluarkan respon sesuai isi variabel tersebut.
# ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
# halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
# halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
# halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
# tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
# tips belajar penggunaan `` (backtick) pada javascript agar
# mudah dalam memasukan variabel ke dalam string
# tapi tanpa backtick juga ga masalah sih yg penting output sesuai

# algoritma
def menu(peran):
    for i in peran:
        print(i)

peran = ["1. Ksatria","2. Tabib","3. Penyihir","4. bot"]
nama = input("Masukan Nama Kamu : ")
menu(peran)
pilih = input("pilih peran : ")

if nama == "":
    print("nama wajib diisi")

pilih = int(pilih)

if 1 <= pilih <= 4:
    peran_aseli = peran[pilih -1].split('. ')[1]
    if pilih == 1:
        print(f'halo {peran_aseli} {nama}, kamu dapat menyerang dengan senjatamu!')
    elif pilih == 2:
        print(f'Halo {peran_aseli} {nama}, kamu akan membantu temanmu yang terluka')
    elif pilih == 3:
        print(f"halo {peran_aseli} {nama} ciptakan keajaiban yang membantu kemenanganmu!")
    elif pilih == 4:
        print(f"dahlah jdi {peran_aseli} aja")
    else:
        print("pilih kesatria")