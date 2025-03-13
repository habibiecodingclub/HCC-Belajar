function genapGanjil(angka){
    if(angka % 2 == 0){
        return "Genap"
    } else{
        return "Ganjil"
    }
}

console.log(genapGanjil(2)) // Output :: "Genap"
console.log(genapGanjil(1)) // Output :: "Ganjil"