const dataPraktikan = [
    { nama: "⤷ ゛Ohyul", nilaiTugas: [80, 85, 90] },
    { nama: "⤷ ゛Jay", nilaiTugas: [60, 60, 60] },
    { nama: "⤷ ゛Jungwon", nilaiTugas: [90, 90, 90] },
    { nama: "⤷ ゛Jake", nilaiTugas: [75, 75, 75] },
    { nama: "⤷ ゛ni-ki", nilaiTugas: [45, 45, 45] }
];

console.log(dataPraktikan);

let namaAsisten = prompt("Masukkan nama Asisten Lab:");
while (namaAsisten.toLowerCase() !== "fahira") {
    namaAsisten = prompt("Nama Asisten Lab tidak valid... Masukkan nama Asisten Lab:");
}
console.log("Asisten Lab:", namaAsisten);

function hitungRataRata(nilai) {
    let total = 0; 
    for (let i = 0; i < nilai.length; i++) {
        total = total + nilai[i];
    }
    return total / nilai.length;
}

const hasilAkhir = [];
for (let i = 0; i < dataPraktikan.length; i++) { 
    let rataRata = hitungRataRata(dataPraktikan[i].nilaiTugas);
    let status;
    if (rataRata >= 75) {
        status = "Lulus";
    } else {
        status = "Tidak Lulus";
    }
    hasilAkhir.push({
        nama: dataPraktikan[i].nama,
        rataRata: rataRata,
        status: status
    });
}
document.write(
    "<h1 class='judul'>Sistem Evaluasi Praktikum 𑄝੭ </h1>"
);
document.write(
    "<h2 class='subjudul'>✦ cek hasil belajar praktikan ✦</h2>"
);

document.write(
    "<p class='asisten'>Asisten Lab: <strong>" + namaAsisten.toLowerCase() + "</strong></p>"
);  
for (let i = 0; i < hasilAkhir.length; i++) {
    document.write("<div class='card'>");
    document.write("<h3 class='nama'>" + hasilAkhir[i].nama + "</h3>"); 

    document.write("<p class='nilai'>Rata-rata: " + hasilAkhir[i].rataRata + "</p>"); 
    if (hasilAkhir[i].status === "Lulus") {
        document.write(
            "<p class='lulus'>Status: Lulus ૮ ˶ᵔ ᵕ ᔔ˶ ა</p>"
        );
    } else {
        document.write("<p class='tidak-lulus'>Status: Tidak Lulus ˙𐃷˙</p>");
    }
    document.write("</div>");
}   

document.write(`
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>

        body {
            font-family: 'Quicksand', sans-serif;
            background: #fff7fb;
        }


        .judul {
            text-align: center;
            color: #b66f9f;
            font-size: 34px;
            margin: 0 0 8px;
        }


        .subjudul {
            text-align: center;
            color: #9c7d9f;
            font-size: 14px;
            margin-bottom: 15px;
        }
        .asisten {
            text-align: center;
            color: #79538b;
            font-size: 17px;
            margin: 0 0 35px;
        }

        .asisten strong {
            color: #b66f9f;
        }

        .card {
            background: #ffffff;
            max-width: 500px;
            margin: 22px auto;
            padding: 28px;
            border-radius: 28px;
            border: 2px solid #f3d9e8;
            position: relative;
            overflow: hidden;   
            transition: 0.3s;
        }
        .card::before {
            content: "♡";
            position: absolute;
            top: 15px;
            right: 22px;
            font-size: 28px;
            color: #e4b3ce;
        }
        .card::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: #e9b6d0;
        }
        .card:hover {
            box-shadow: 0 15px 30px rgba(108, 46, 88, 0.25);
        }
        .nama {
            color: #79538b;
            font-size: 23px;
            margin: 0 0 20px;
        }
        .nilai {
            background: #fbf3fa;
            border-radius: 18px;
            padding: 18px;
            margin: 0 0 18px;
            color: #765184;
            font-size: 22px;
            font-weight: 700;
            text-align: center;
            border: 1px solid #f3e2f1;
        }
        .lulus {
            display: inline-block;
            color: #638a6e;
            background-color: #edf8f0;
            padding: 9px 16px;
            border-radius: 20px;
            font-weight: bold;
            margin: 0;
        }
        .tidak-lulus {
            display: inline-block;
            color: #c56d79;
            background-color: #fff0f3;
            padding: 9px 16px;
            border-radius: 20px;
            font-weight: bold;
            margin: 0;
        }

        @media (max-width: 600px) {
            body {
                padding: 30px 15px;
            }
            .judul {
                font-size: 27px;
            }
            .card {
                width: 100%;
                box-sizing: border-box;
            }
        }
    </style>
`);