//! Mengurutkan Bilangan

function urutkanBilangan(deretAngka) {
    // Pisahkan deret angka berdasarkan angka 0
    let bilanganArray = deretAngka.split('0');
    
    // Urutkan angka dalam setiap bilangan
    let urutkanBilanganArray = bilanganArray.map(bilangan => {
        return bilangan.split('').sort().join('');
    });
    
    // Gabungkan kembali bilangan yang telah diurutkan
    let hasilGabungan = urutkanBilanganArray.join('');
    
    // Mengembalikan hasil dalam bentuk integer
    return parseInt(hasilGabungan, 10);
}

console.log(urutkanBilangan('5956560159466056'));
