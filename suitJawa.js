var tanya = true
while ( tanya ) {
// menangkap pilihan nplayers
    var p = prompt('pilih :gajah, semut, orang')
    // mmenangkap pilihan computer


// membangkitkan pilihan random
    var comp = Math.random()

    if( comp < 0.34) {
        comp = 'gajah'
    }
    else if( comp >= 0.34 && comp < 0.64) {
        comp = 'orang'
    }
    else {
        comp = 'semut'
    }

    // menentukan rules
    var hasil = ''
    if( p == comp) {
        hasil = 'SERI!'
    }
    else if( p == 'gajah') {
        // if( comp == 'semut') {
        //     hasil = 'MENANG'
        // }
        // else {
        //     hasil = 'KALAH'
        // }
        hasil = ( comp == 'orang') ? 'MENANG!' : 'KALAH!'
    }
    else if( p == 'orang') {
        hasil = ( comp == 'semut') ? 'MENANG!' : 'KALAH!'
    }
    else if( p == 'semut') {
        hasil = ( comp == 'gajah') ? 'KALAH!' : 'MENANG!'
    }
    else{
        hasil = 'memasukan pilihan yang salah!!'
    }

// tampilkan hasilnya
    alert('Kamu memilih :'+ p + ' dan komputer memilih :'+ comp + '\nmaka hasilnya kamu'+ hasil)

    tanya = confirm('lagi?')
}
    alert('terimakasih sudah bermain')
