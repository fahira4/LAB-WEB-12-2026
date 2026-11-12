import { useState } from "react";
import Navbar from "./components/Navbar";
import MenuList from "./components/MenuList";
import RingkasanPesanan from "./components/RingkasanPesanan";
import FormPesan from "./components/FormPesan";
import Footer from "./components/Footer";

// Data menu Kedai Kopi Senja
const dataMenu = [
  {
    id: 1,
    nama: "Kopi Susu",
    kategori: "Kopi",
    harga: 18000,
    tersedia: true,
    deskripsi: "Espresso dengan susu segar dan gula aren."
  },
  {
    id: 2,
    nama: "Americano",
    kategori: "Kopi",
    harga: 15000,
    tersedia: true,
    deskripsi: "Espresso dengan air panas, rasa kuat dan bersih."
  },
  {
    id: 3,
    nama: "Cappuccino",
    kategori: "Kopi",
    harga: 22000,
    tersedia: true,
    deskripsi: "Espresso, susu panas, dan busa susu tebal."
  },
  {
    id: 4,
    nama: "Matcha Latte",
    kategori: "Non-Kopi",
    harga: 24000,
    tersedia: true,
    deskripsi: "Teh hijau matcha dengan susu."
  },
  {
    id: 5,
    nama: "Teh Tarik",
    kategori: "Non-Kopi",
    harga: 14000,
    tersedia: false,
    deskripsi: "Teh susu yang ditarik hingga berbusa."
  },
  {
    id: 6,
    nama: "Cokelat Panas",
    kategori: "Non-Kopi",
    harga: 20000,
    tersedia: true,
    deskripsi: "Cokelat pekat dengan susu hangat."
  },
  {
    id: 7,
    nama: "Roti Bakar",
    kategori: "Makanan",
    harga: 16000,
    tersedia: true,
    deskripsi: "Roti tebal dengan selai cokelat dan keju."
  },
  {
    id: 8,
    nama: "Pisang Goreng",
    kategori: "Makanan",
    harga: 12000,
    tersedia: false,
    deskripsi: "Pisang goreng renyah dengan taburan keju."
  },
  {
    id: 9,
    nama: "Nasi Goreng",
    kategori: "Makanan",
    harga: 25000,
    tersedia: true,
    deskripsi: "Nasi goreng kampung dengan telur mata sapi."
  }
];

function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [pesanan, setPesanan] = useState([]);
  const [terkirim, setTerkirim] = useState(false);

  // Menambahkan menu ke pesanan
  function handleTambah(menu) {
    setPesanan((pesananLama) => {
      const sudahAda = pesananLama.find(
        (item) => item.id === menu.id
      );

      if (sudahAda) {
        return pesananLama.map((item) =>
          item.id === menu.id
            ? { ...item, jumlah: item.jumlah + 1 }
            : item
        );
      }

      return [
        ...pesananLama,
        { ...menu, jumlah: 1 }
      ];
    });

    setTerkirim(false);
  }

  // Mengurangi jumlah pesanan
  function handleKurangi(id) {
    setPesanan((pesananLama) =>
      pesananLama
        .map((item) =>
          item.id === id
            ? { ...item, jumlah: item.jumlah - 1 }
            : item
        )
        .filter((item) => item.jumlah > 0)
    );

    setTerkirim(false);
  }

  // Menghapus menu dari pesanan
  function handleHapus(id) {
    setPesanan((pesananLama) =>
      pesananLama.filter((item) => item.id !== id)
    );

    setTerkirim(false);
  }

  // Menghitung jumlah seluruh item
  const jumlahPesanan = pesanan.reduce(
    (total, item) => total + item.jumlah,
    0
  );

  // Menghitung total harga
  const totalHarga = pesanan.reduce(
    (total, item) => total + item.harga * item.jumlah,
    0
  );

  // Menampilkan menu berdasarkan kategori
  const menuTampil = kategoriAktif === "Semua"
    ? dataMenu
    : dataMenu.filter(
        (menu) => menu.kategori === kategoriAktif
      );

  // Mengirim pesanan
  function handleKirim() {
    setPesanan([]);
    setTerkirim(true);
  }

  return (
    <div className="min-h-screen bg-[#FAF5F2]">

      <Navbar
        kategoriAktif={kategoriAktif}
        onPilihKategori={setKategoriAktif}
      />

      <div className="bg-[#E8C8C8] px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between">

          <p className="text-[#493942]">
            Jumlah pesanan: {jumlahPesanan}
          </p>

          <p className="font-bold text-[#493942]">
            Rp {totalHarga.toLocaleString("id-ID")}
          </p>

        </div>
      </div>

      {terkirim && (
        <div className="max-w-6xl mx-auto px-6 pt-6">
          <div className="bg-white border border-[#E8C8C8] rounded-xl p-5 text-center">

            <h2 className="text-xl font-bold text-[#765866]">
              Terima kasih sudah memesan!
            </h2>

            <p className="text-[#493942] mt-2">
              Pesanan kamu berhasil dikirim.
            </p>

          </div>
        </div>
      )}

      <MenuList
        daftarMenu={menuTampil}
        onTambah={handleTambah}
      />

      <RingkasanPesanan
        pesanan={pesanan}
        jumlahPesanan={jumlahPesanan}
        totalHarga={totalHarga}
        onKurangi={handleKurangi}
        onHapus={handleHapus}
      />

      <FormPesan
        pesanan={pesanan}
        onKirim={handleKirim}
      />

      <Footer />

    </div>
  );
}

export default App;