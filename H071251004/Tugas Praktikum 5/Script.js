const daftarAnggota = document.getElementById("daftar-anggota");
const statusAnggota = document.getElementById("status-anggota");
const errorAnggota = document.getElementById("error-anggota");

const judulTugas = document.getElementById("judul-tugas");
const info = document.getElementById("info");
const blokBar = document.getElementById("blok-bar");
const barProgres = document.getElementById("bar-progres");

const statusTugas = document.getElementById("status-tugas");
const errorTugas = document.getElementById("error-tugas");
const pesanKosong = document.getElementById("pesan-kosong");
const daftarTugas = document.getElementById("daftar-tugas");

const inputCari = document.getElementById("input-cari");
const tombolCari = document.getElementById("tombol-cari");
const formTugas = document.getElementById("form-tugas");
const inputJudul = document.getElementById("input-judul");
const tombolSimpan = document.getElementById("tombol-simpan");
const errorForm = document.getElementById("error-form");
const notifikasi = document.getElementById("notifikasi");
const tombolCobaLagi = document.getElementById("tombol-coba-lagi");

let anggotaAktifId = null;
let nomorPermintaan = 0;
let timerNotifikasi = null;
let userTerakhir = null;
let tombolTerakhir = null;
let kataKunciAktif = "";

const VISUAL_ANGGOTA_DIPILIH = ["!bg-violet-950", "!text-violet-200"];
const VISUAL_BADGE_DIPILIH = ["!bg-violet-500", "!text-white"];
const VISUAL_TUGAS_SELESAI = ["line-through", "text-gray-400"];
const VISUAL_IKON_SELESAI = ["!bg-violet-500", "!border-violet-500", "text-white"];

async function muatAnggota() {
  statusAnggota.textContent = "Memuat anggota...";
  errorAnggota.classList.add("hidden");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`Server mengembalikan status ${response.status}.`);
    }
    const users = await response.json();

    users.forEach(function (user, index) {
      const tombol = document.createElement("button");
      tombol.type = "button";
      tombol.className =
        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-slate-200 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50";

      const badge = document.createElement("span");
      badge.className =
        "flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-zinc-800 text-xs font-bold text-slate-300";
      badge.textContent = String(index + 1).padStart(2, "0");

      const nama = document.createElement("span");
      nama.textContent = user.name;

      tombol.appendChild(badge);
      tombol.appendChild(nama);

      tombol.addEventListener("click", function () {
        pilihAnggota(user, tombol);
      });
      daftarAnggota.appendChild(tombol);
    });
  } catch (error) {
    errorAnggota.textContent = "Gagal memuat anggota. Koneksi ke server terputus.";
    errorAnggota.classList.remove("hidden");
  } finally {
    statusAnggota.textContent = "";
  }
}

async function pilihAnggota(user, tombolDipilih) {
  daftarAnggota.querySelectorAll("button").forEach(function (tombol) {
    tombol.classList.remove(...VISUAL_ANGGOTA_DIPILIH);
    tombol.firstElementChild.classList.remove(...VISUAL_BADGE_DIPILIH);
  });
  tombolDipilih.classList.add(...VISUAL_ANGGOTA_DIPILIH);
  tombolDipilih.firstElementChild.classList.add(...VISUAL_BADGE_DIPILIH);

  anggotaAktifId = user.id;
  userTerakhir = user;
  tombolTerakhir = tombolDipilih;
  tombolCobaLagi.classList.add("hidden");
  const nomorAntrean = ++nomorPermintaan;

  judulTugas.textContent = "Tugas " + user.name;
  daftarTugas.innerHTML = "";
  inputCari.value = "";
  kataKunciAktif = ""; 
  info.textContent = "";
  blokBar.classList.add("hidden");
  errorTugas.classList.add("hidden");
  errorForm.classList.add("hidden");
  pesanKosong.classList.add("hidden");
  statusTugas.textContent = "Memuat tugas...";
  aturFormAktif(false);

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?userId=${user.id}`
    );
    if (!response.ok) {
      throw new Error(`Server mengembalikan status ${response.status}.`);
    }
    const todos = await response.json();

    if (nomorAntrean !== nomorPermintaan) return;

    todos.forEach(function (todo) {
      daftarTugas.appendChild(buatItemTugas(todo.title, todo.completed));
    });

    aturFormAktif(true);
    segarkanTampilan();

  } catch (error) {
    if (nomorAntrean !== nomorPermintaan) return;
    errorTugas.textContent = "Gagal memuat tugas. Koneksi ke server terputus.";
    errorTugas.classList.remove("hidden");
    tombolCobaLagi.classList.remove("hidden");
  } finally {
    if (nomorAntrean === nomorPermintaan) {
      statusTugas.textContent = "";
    }
  }
}

function buatItemTugas(judul, selesai) {
  const li = document.createElement("li");
  li.dataset.judul = judul;
  li.dataset.selesai = selesai ? "true" : "false";
  li.className = "border-b border-zinc-800 py-3 last:border-b-0";

  const baris = document.createElement("div");
  baris.className = "flex items-center gap-3";

  const lingkaran = document.createElement("span");
  lingkaran.className =
    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-zinc-600 text-xs font-bold";

  const teks = document.createElement("span");
  teks.className = "flex-1 text-sm";
  teks.textContent = judul;

  if (selesai) {
    teks.classList.add(...VISUAL_TUGAS_SELESAI);
    lingkaran.classList.add(...VISUAL_IKON_SELESAI);
    lingkaran.textContent = "✓";
  }

  const wadahTombol = document.createElement("div");
  wadahTombol.className = "flex shrink-0 gap-2";

  if (!selesai) {
    const tombolSelesai = document.createElement("button");
    tombolSelesai.type = "button";
    tombolSelesai.textContent = "Tandai selesai";
    tombolSelesai.className =
      "rounded-md border border-blue-500/60 px-3 py-1 text-xs font-medium text-blue-300 hover:bg-blue-950";
    tombolSelesai.addEventListener("click", function () {
      teks.classList.add(...VISUAL_TUGAS_SELESAI);
      lingkaran.classList.add(...VISUAL_IKON_SELESAI);
      lingkaran.textContent = "✓";
      li.dataset.selesai = "true";
      tombolSelesai.remove();
      segarkanTampilan();
    });
    wadahTombol.appendChild(tombolSelesai);
  }

  const tombolHapus = document.createElement("button");
  tombolHapus.type = "button";
  tombolHapus.textContent = "Hapus";
  tombolHapus.className =
    "rounded-md border border-red-500/60 px-3 py-1 text-xs font-medium text-red-300 hover:bg-red-950";
  tombolHapus.addEventListener("click", function () {
    li.remove();
    segarkanTampilan();
  });
  wadahTombol.appendChild(tombolHapus);

  baris.appendChild(lingkaran);
  baris.appendChild(teks);
  baris.appendChild(wadahTombol);
  li.appendChild(baris);
  return li;
}

function aturFormAktif(aktif) {
  inputJudul.disabled = !aktif;
  tombolCari.disabled = !aktif;
  tombolSimpan.disabled = !aktif;
  inputCari.disabled = !aktif;
}

function segarkanTampilan() {
  pencarianTugas();
  perbaruiInfo();
}

function perbaruiInfo() {
  const semua = daftarTugas.querySelectorAll("li");
  let selesai = 0;
  semua.forEach(function (li) {
    if (li.dataset.selesai === "true") selesai++;
  });

  const total = semua.length;
  info.textContent = `${selesai} dari ${total} tugas selesai`;
  barProgres.style.width = total === 0 ? "0%" : (selesai / total) * 100 + "%";
  blokBar.classList.remove("hidden");
}

function pencarianTugas() {
  const kataKunci = kataKunciAktif;
  const semua = daftarTugas.querySelectorAll("li");
  let jumlahTampil = 0;

  semua.forEach(function (li) {
    const cocok = li.dataset.judul.toLowerCase().includes(kataKunci);
    if (cocok) {
      li.classList.remove("hidden");
      jumlahTampil++;
    } else {
      li.classList.add("hidden");
    }
  });

  if (semua.length === 0) {
    pesanKosong.textContent = "Belum ada tugas.";
    pesanKosong.classList.remove("hidden");
  } else if (jumlahTampil === 0) {
    pesanKosong.textContent = "Tidak ada tugas yang cocok.";
    pesanKosong.classList.remove("hidden");
  } else {
    pesanKosong.classList.add("hidden");
  }
}

function jalankanPencarian() {
  kataKunciAktif = inputCari.value.trim().toLowerCase();
  pencarianTugas();
}

tombolCari.addEventListener("click", jalankanPencarian);
inputCari.addEventListener("keydown", function (event) {
  if (event.key === "Enter") jalankanPencarian();
});

inputCari.addEventListener("input", function () {   
  if (inputCari.value.trim() === "") {
    jalankanPencarian();
  }
});

tombolCobaLagi.addEventListener("click", function () {
  pilihAnggota(userTerakhir, tombolTerakhir);
});

function simpanTugas(judul) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const sudahAda = Array.from(daftarTugas.querySelectorAll("li")).some(function (li) {
        return li.dataset.judul.toLowerCase() === judul.toLowerCase();
      });

      if (sudahAda) {
        reject(new Error(`Tugas "${judul}" sudah ada di daftar.`));
      } else {
        resolve({ title: judul, completed: false });
      }
    }, 1000);
  });
}

function tampilkanErrorForm(pesan) {
  errorForm.textContent = pesan;
  errorForm.classList.remove("hidden");
}

function tampilkanNotifikasi(pesan) {
  notifikasi.textContent = pesan;
  notifikasi.classList.remove("hidden");
  clearTimeout(timerNotifikasi);
  timerNotifikasi = setTimeout(function () {
    notifikasi.classList.add("hidden");
  }, 3000);
}

formTugas.addEventListener("submit", async function (event) {
  event.preventDefault();
  errorForm.classList.add("hidden");

  const judul = inputJudul.value.trim();

  if (judul === "") {
    tampilkanErrorForm("Judul tugas belum diisi.");
    return;
  }

  if (judul.length < 5) {
    tampilkanErrorForm("Judul tugas minimal 5 karakter.");
    return;
  }

  const anggotaSaatSimpan = anggotaAktifId;
  tombolSimpan.disabled = true;
  tombolSimpan.textContent = "Menyimpan...";

  try {
    const tugasBaru = await simpanTugas(judul);
    if (anggotaSaatSimpan === anggotaAktifId) {
      daftarTugas.appendChild(buatItemTugas(tugasBaru.title, tugasBaru.completed));
      inputJudul.value = "";
      segarkanTampilan();
      tampilkanNotifikasi("Tugas berhasil ditambahkan.");
    }
  } catch (error) {
    tampilkanErrorForm(error.message);
  } finally {
    tombolSimpan.textContent = "Simpan";
    tombolSimpan.disabled = false;
  }
});

muatAnggota();