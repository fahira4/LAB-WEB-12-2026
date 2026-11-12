const dataPraktikan = [
  { nama: "Budi", nilaiTugas: [80, 85, 90] },
  { nama: "Siti", nilaiTugas: [60, 60, 60] },
  { nama: "Andi", nilaiTugas: [90, 90, 90] },
  { nama: "Dewi", nilaiTugas: [75, 75, 75] },
  { nama: "Eko", nilaiTugas: [45, 45, 45] }
];

const BATAS_LULUS = 75;

function hitungRataRata(nilai) {
  let total = 0;
  for (let i = 0; i < nilai.length; i++) {
    total += nilai[i];
  }
  return total / nilai.length;
}

function tentukanStatus(rataRata) {
  return rataRata >= BATAS_LULUS ? "Lulus" : "Tidak Lulus";
}

function prosesData(data) {
  return data.map(function (praktikan) {
    const rataRata = hitungRataRata(praktikan.nilaiTugas);
    return {
      nama: praktikan.nama,
      nilaiTugas: praktikan.nilaiTugas,
      rataRata: rataRata,
      status: tentukanStatus(rataRata)
    };
  });
}

const namaAsisten = prompt("Masukkan nama Anda (Asisten Lab):");

document.write('<div class="dashboard-card">');
document.write(
  '<div class="header">' +
    '<span class="badge-header">Dashboard Asisten Lab</span>' +
    '<h1>Sistem Laporan Praktikum</h1>' +
  '</div>'
);

if (namaAsisten === null || namaAsisten.trim() === "") {
  document.write(
    '<div class="denied-box">' +
      '<div class="denied-icon">!</div>' +
      '<h2>Akses Ditolak</h2>' +
      '<p>Anda tidak memasukkan identitas asisten. Muat ulang halaman untuk mencoba kembali.</p>' +
    '</div>'
  );
} else {
  const hasilAkhir = prosesData(dataPraktikan);
  const totalLulus = hasilAkhir.filter(p => p.status === "Lulus").length;
  const totalGagal = hasilAkhir.length - totalLulus;

  document.write('<div class="content">');

  document.write(
    '<div class="greeting-box">' +
      '<div>' +
        '<p class="greeting-label">Selamat Datang</p>' +
        '<h3 class="greeting-name">Asisten ' + namaAsisten.trim() + '</h3>' +
      '</div>' +
    '</div>'
  );

  document.write(
    '<div class="stats-grid">' +
      '<div class="stat-card total">' +
        '<p class="stat-label">Total Praktikan</p>' +
        '<p class="stat-value">' + hasilAkhir.length + '</p>' +
      '</div>' +
      '<div class="stat-card lulus">' +
        '<p class="stat-label">Lulus</p>' +
        '<p class="stat-value">' + totalLulus + '</p>' +
      '</div>' +
      '<div class="stat-card gagal">' +
        '<p class="stat-label">Gagal</p>' +
        '<p class="stat-value">' + totalGagal + '</p>' +
      '</div>' +
    '</div>'
  );

  document.write(
    '<div class="table-wrapper">' +
      '<table>' +
        '<thead>' +
          '<tr>' +
            '<th>Nama Praktikan</th>' +
            '<th style="text-align:center;">Rata-rata</th>' +
            '<th style="text-align:right;">Status</th>' +
          '</tr>' +
        '</thead>' +
        '<tbody>'
  );

  hasilAkhir.forEach(function (p) {
    const isLulus = p.status === "Lulus";
    const statusClass = isLulus ? 'lulus' : 'gagal';

    document.write(
      '<tr>' +
        '<td class="td-nama">' + p.nama + '</td>' +
        '<td class="td-rata">' + p.rataRata + '</td>' +
        '<td class="td-status">' +
          '<span class="status-badge ' + statusClass + '">' + p.status + '</span>' +
        '</td>' +
      '</tr>'
    );
  });

  document.write('</tbody></table></div>');
  document.write('</div>'); 

  document.write(
    '<div class="footer">' +
      '<div class="legend">' +
        '<span class="legend-item"><span class="dot lulus"></span>Lulus</span>' +
        '<span class="legend-item"><span class="dot gagal"></span>Tidak Lulus</span>' +
      '</div>' +
      '<span>Batas kelulusan: &#8805; ' + BATAS_LULUS + '</span>' +
    '</div>'
  );

  console.log(hasilAkhir);
}

document.write('</div>');