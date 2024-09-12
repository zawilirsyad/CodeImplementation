//! Reverse Words

function reverseWords(kalimat) {
    // Memisahkan kalimat menjadi array kata-kata
    let kataArray = kalimat.split(' ');
    
    // Membalikkan urutan kata-kata
    let kataBalik = kataArray.reverse();
    
    // Menggabungkan kembali kata menjadi kalimat
    let kalimatBalik = kataBalik.join(' ');
    
    return kalimatBalik;
}

console.log(reverseWords('Saya Belajar Javascript')); 
console.log(reverseWords('Halo Dunia')); 
