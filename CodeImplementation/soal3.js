//! Menghitung total harga FazzFood

function FazzFood(harga, voucher, jarak, pajak) {
    let diskon = 0;
    let biayaPengiriman = 5000; // Biaya pengiriman untuk 2 km pertama

    // Pengecekan voucher
    if (voucher === 'FAZZFOOD' && harga >= 50000) {
        diskon = Math.min(harga * 0.5, 50000); // Diskon 50% maksimal 50rb
    } else if (voucher === 'DITRAKTIR60' && harga >= 25000) {
        diskon = Math.min(harga * 0.6, 30000); // Diskon 60% maksimal 30rb
    }

    // Perhitungan biaya pengiriman
    if (jarak > 2) {
        biayaPengiriman += (jarak - 2) * 3000; // Tambahan 3rb per km setelah 2 km pertama
    }

    // Perhitungan pajak
    let biayaPajak = pajak ? harga * 0.05 : 0;

    // Perhitungan total biaya
    let totalBiaya = harga - diskon + biayaPengiriman + biayaPajak;

    return totalBiaya;
}

// Contoh penggunaan
console.log(FazzFood(75000, 'FAZZFOOD', 5, true));  
console.log(FazzFood(30000, 'DITRAKTIR60', 3, false)); 
