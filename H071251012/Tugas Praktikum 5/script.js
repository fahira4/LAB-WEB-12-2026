// 1. MENGAMBIL ELEMEN HTML
const URL_ANGGOTA = "https://jsonplaceholder.typicode.com/users";
const URL_TUGAS = "https://jsonplaceholder.typicode.com/todos?userId=";

const daftarAnggota = document.getElementById("daftarAnggota");
const statusAnggota = document.getElementById("statusAnggota");
const judulTugas = document.getElementById("judulTugas");
const statusTugas = document.getElementById("statusTugas");
const progres = document.getElementById("progres");
const daftarTugas = document.getElementById("daftarTugas");
const pencarian = document.getElementById("pencarian");
const pesanPencarian = document.getElementById("pesanPencarian");
const formTugas = document.getElementById("formTugas");
const judulBaru = document.getElementById("judulBaru");
const pesanForm = document.getElementById("pesanForm");
const tombolSimpan = document.getElementById("tombolSimpan");
const notifikasi = document.getElementById("notifikasi");

//VARIABEL DATA
let anggota = [];
let tugas = [];
let anggotaDipilih = null;

//MENAMPILKAN DAFTAR ANGGOTA
async function ambilAnggota() {
    statusAnggota.textContent = "Memuat anggota...";
    try {
        const respons = await fetch(
            "https://jsonplaceholder.typicode.com/users");
        if (!respons.ok) {
            throw new Error("Status " + respons.status);
        }

        anggota = await respons.json();

        daftarAnggota.innerHTML = "";
        anggota.forEach((orang) => {
            const tombol = document.createElement("button");
            tombol.textContent = orang.name;

            tombol.classList.add(
                "block",
                "w-full",
                "text-left",
                "p-3",
                "rounded-xl",
                "bg-[#F4FAFF]",
                "text-[#3979A8]",
                "hover:bg-[#DFF3FF]"
            );
            tombol.addEventListener("click", () => {tampilkanTugas(orang, tombol); });

            daftarAnggota.appendChild(tombol);
        });

        statusAnggota.textContent = "";

    } catch (error) {
        statusAnggota.textContent =
            "Gagal memuat anggota: " + error.message;
    }
}

// MENAMPILKAN TUGAS ANGGOTA
async function tampilkanTugas(orang, tombolDipilih) {
    anggotaDipilih = orang;

    judulTugas.textContent = "Tugas " + orang.name;
    statusTugas.textContent = "Memuat tugas...";
    daftarTugas.innerHTML = "";
    progres.textContent = "";
    pesanPencarian.textContent = "";
    pencarian.value = "";

    const semuaTombol = daftarAnggota.querySelectorAll("button");

    semuaTombol.forEach((tombol) => {
        tombol.classList.remove(
            "bg-[#D9EEFF]",
            "font-bold"
        );
    });

    tombolDipilih.classList.add(
        "bg-[#D9EEFF]",
        "font-bold"
    );

    try {
        const respons = await fetch(
            "https://jsonplaceholder.typicode.com/todos?userId=" + orang.id
        );

        if (!respons.ok) {
            throw new Error("Status " + respons.status);
        }
        tugas = await respons.json();
        statusTugas.textContent = "";

        tampilkanDaftarTugas();

    } catch (error) {
        statusTugas.textContent =
            "Gagal memuat tugas: " + error.message;
    }
}

//MENAMPILKAN DAFTAR TUGAS
function tampilkanDaftarTugas() {
    daftarTugas.innerHTML = "";
    const kataKunci = pencarian.value.toLowerCase();
    tugas.forEach((item) => {
        const kotak = document.createElement("div");

        kotak.classList.add(
            "bg-[#F7FBFF]",
            "border",
            "border-[#E0ECF5]",
            "rounded-xl",
            "p-3",
            "flex",
            "flex-col",
            "sm:flex-row",
            "sm:items-center",
            "sm:justify-between",
            "gap-3"
        );

        const judul = document.createElement("span");

        judul.textContent = item.title;

        if (item.completed) {
            judul.classList.add(
                "line-through",
                "text-gray-400"
            );
        }

        kotak.appendChild(judul);
        const tombolAksi = document.createElement("div");

        tombolAksi.classList.add(
            "flex",
            "gap-2",
            "flex-wrap"
        );

        // TOMBOL SELESAI
        if (!item.completed) {
            const tombolSelesai = document.createElement("button");

            tombolSelesai.textContent = "Tandai selesai";

            tombolSelesai.classList.add(
                "bg-[#D9EEFF]",
                "text-[#3979A8]",
                "px-3",
                "py-2",
                "rounded-lg",
                "text-sm"
            );

            tombolSelesai.addEventListener("click", () => {
                item.completed = true;
                tampilkanDaftarTugas();
            });
            tombolAksi.appendChild(tombolSelesai);
        }

        // TOMBOL HAPUS
        const tombolHapus = document.createElement("button");
        tombolHapus.textContent = "Hapus";
        tombolHapus.classList.add(
            "bg-[#FFE6E6]",
            "text-red-500",
            "px-3",
            "py-2",
            "rounded-lg",
            "text-sm"
        );

        tombolHapus.addEventListener("click", () => {
            tugas = tugas.filter((data) => data !== item);

            tampilkanDaftarTugas();
        });

        tombolAksi.appendChild(tombolHapus);
        kotak.appendChild(tombolAksi);

        // PENCARIAN TUGAS
        if (!item.title.toLowerCase().includes(kataKunci)) {
            kotak.classList.add("hidden");
        }
        daftarTugas.appendChild(kotak);
    });

    // MENGHITUNG PROGRES
    const selesai = tugas.filter((item) => item.completed).length;
    progres.textContent =
        selesai + " dari " + tugas.length + " tugas selesai";

    // PESAN PENCARIAN
    const tugasTerlihat = tugas.filter((item) => {
        return item.title.toLowerCase().includes(kataKunci);
    });

    if (tugasTerlihat.length === 0) {
        pesanPencarian.textContent = "Tidak ada tugas yang cocok.";
    } else {
        pesanPencarian.textContent = "";
    }
}

// PENCARIAN TUGAS
pencarian.addEventListener("input", () => {
    if (anggotaDipilih !== null) {
        tampilkanDaftarTugas();
    }
});

// SIMULASI MENYIMPAN TUGAS DENGAN PROMISE
function simpanTugas(judul) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const judulKecil = judul.toLowerCase();

            const sudahAda = tugas.some((item) => {
                return item.title.toLowerCase() === judulKecil;
            });

            if (sudahAda) {
                reject(new Error("Judul tugas sudah ada!"));
            } else {
                resolve({
                    userId: anggotaDipilih.id,
                    id: Date.now(),
                    title: judul,
                    completed: false
                });
            }
        }, 1000);
    });
}

// FORM TAMBAH TUGAS
formTugas.addEventListener("submit", async (event) => {
    event.preventDefault();

    pesanForm.textContent = "";
    notifikasi.textContent = "";

    if (anggotaDipilih === null) {
        pesanForm.textContent =
            "Pilih anggota terlebih dahulu!";
        return;
    }

    const judul = judulBaru.value.trim();

    if (judul.length < 5) {
        pesanForm.textContent =
            "Judul tugas minimal 5 karakter!";
        return;
    }

    tombolSimpan.disabled = true;
    tombolSimpan.textContent = "Menyimpan...";

    try {
        const tugasBaru = await simpanTugas(judul);
        tugas.push(tugasBaru);
        tampilkanDaftarTugas();
        judulBaru.value = "";
        notifikasi.textContent =
            "Tugas berhasil ditambahkan!";

        setTimeout(() => {
            notifikasi.textContent = "";
        }, 3000);

    } catch (error) {
        pesanForm.textContent = error.message;

    } finally {
        tombolSimpan.textContent = "Simpan";
        tombolSimpan.disabled = false;
    }
});
ambilAnggota();