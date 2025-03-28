bulan = ["Januari",
         "Februari",
         "Maret",
         "April",
         "Mei",
         "Juni",
         "Juli",
         "Austus",
         "September",
         "Oktober",
         "November",
         "Desember"]

try:
    tes = input("Masukan Tanggal Bulan Dan Tahun (1-1-2001) : ")
    outs = tes.split("-")
    tgl = int(outs[0])
    bl = int(outs[1])
    thn = int(outs[2])
    if 1 <= bl <= 12:
        print(f"Sekarang adalah tanggal {tgl}, Bulan {bulan[bl - 1]} Tahun {thn}")
except ValueError:
    print("masukan angka (1-1-2001) tanpa dalam kurung")