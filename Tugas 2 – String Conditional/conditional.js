// Soal 1
{
    var nama = "John";
    var peran = "";

    if(nama == "" && peran == ""){
        console.log("Nama harus diisi!");
    }
    else if(nama == "John" && peran == ""){
        console.log("Halo John, Pilih peranmu untuk memulai game!");
    }
    else if(nama == "Jane" && peran == "Penyihir"){
        console.log("Selamat datang di Dunia Werewolf, Jane");
        console.log("Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!");
    }
    else if(nama == "Jenita" && peran == "Guard"){
        console.log("Selamat datang di Dunia Werewolf, Jenita");
        console.log("Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.");
    }
    else if(nama == "Junaedi" && peran == "Werewolf"){
        console.log("Selamat datang di Dunia Werewolf, Junaedi");
        console.log("Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!" );
    }
}

// Soal 2
{
    var hari = 31; 
    var bulan = 1; 
    var tahun = 1900;

    var bulancp = bulan;

    switch(bulan){
        case 1: {
            bulan = "Januari";
            break;
        }
        case 2: {
            bulan = "Februari";
            break;
        }
        case 3: {
            bulan = "Maret";
            break;
        }
        case 4: {
            bulan = "April";
            break;
        }
        case 5: {
            bulan = "Mei";
            break;
        }
        case 6: {
            bulan = "Juni";
            break;
        }
        case 7: {
            bulan = "Juli";
            break;
        }
        case 8: {
            bulan = "Agustus";
            break;
        }
        case 9: {
            bulan = "September";
            break;
        }
        case 10: {
            bulan = "Oktober";
            break;
        }
        case 11: {
            bulan = "Nopember";
            break;
        }
        case 12: {
            bulan = "Desember";
            break;
        }
    }

    if(hari>=1 && hari<=31 && 1<=bulancp && bulancp<=12 && 1900<=tahun && tahun<=2200){
        console.log(hari + " " + bulan + " " + tahun);
    }
}