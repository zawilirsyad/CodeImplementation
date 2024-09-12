//! Deteksi palindrom

function cekPalindrom(kata) {
    // Mengubah kata menjadi huruf kecil
    let kataAsli = kata.toLowerCase();
    // Membalikkan urutan huruf pada kata
    let kataBalik = kataAsli.split('').reverse().join('');
    
    // Memeriksa apakah kata asli sama dengan kata yang dibalik
    if (kataAsli === kataBalik) {
        return "Palindrom";
    } else {
        return "Bukan Palindrom";
    }
}

console.log(cekPalindrom('katak')); 
console.log(cekPalindrom('buku'));  
