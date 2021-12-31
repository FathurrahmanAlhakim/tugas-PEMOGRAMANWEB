function hitung_dolar(){
    
    if (matauang.value == "dollar"){

        let nilai = Number(document.getElementById("nilai").value);
        let nilaiDollar = 9915
        let jumlah = nilai * nilaiDollar
        document.getElementById("hasil").value=jumlah

    }else if (matauang.value == "d_Singapore"){

        let nilai = Number(document.getElementById("nilai").value);
        let nilaiDollarSingapore = 13472
        let jumlah = nilai * nilaiDollarSingapore
        document.getElementById("hasil").value=jumlah

    }else if (matauang.value == "ringgit"){

        let nilai = Number(document.getElementById("nilai").value);
        let nilaiRinggit = 874
        let jumlah = nilai * nilaiRinggit
        document.getElementById("hasil").value=jumlah

    }else if (matauang.value == "yen_jepang"){

        let nilai = Number(document.getElementById("nilai").value);
        let nilaiYen = 120
        let jumlah = nilai * nilaiYen
        document.getElementById("hasil").value=jumlah

    }else if (matauang.value == "euro"){

        let nilai = Number(document.getElementById("nilai").value);
        let nilaiEuro = 15888
        let jumlah = nilai * nilaiEuro
        document.getElementById("hasil").value=jumlah

    }else if (matauang.value == "riyal_arab"){

        let nilai = Number(document.getElementById("nilai").value);
        let nilaiRiyal= 3592
        let jumlah = nilai * nilaiRiyal
        document.getElementById("hasil").value=jumlah

    }else{
        console.log("goblok")
    }
}
