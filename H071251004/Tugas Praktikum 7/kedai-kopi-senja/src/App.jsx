import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MenuList from "./components/MenuList.jsx";
import RingkasanPesanan from "./components/RingkasanPesanan.jsx";
import FormPesan from "./components/FormPesan.jsx";
import Footer from "./components/Footer.jsx";

const dataMenu = [
  { id: 1, nama: "Kopi Susu", kategori: "Kopi", harga: 18000, tersedia: true, deskripsi: "Espresso dengan susu segar dan gula aren." },
  { id: 2, nama: "Americano", kategori: "Kopi", harga: 15000, tersedia: true, deskripsi: "Espresso dengan air panas, rasa kuat dan bersih." },
  { id: 3, nama: "Cappuccino", kategori: "Kopi", harga: 22000, tersedia: true, deskripsi: "Espresso, susu panas, dan busa susu tebal." },
  { id: 4, nama: "Matcha Latte", kategori: "Non-Kopi", harga: 24000, tersedia: true, deskripsi: "Teh hijau matcha dengan susu." },
  { id: 5, nama: "Teh Tarik", kategori: "Non-Kopi", harga: 14000, tersedia: false, deskripsi: "Teh susu yang ditarik hingga berbusa." },
  { id: 6, nama: "Cokelat Panas", kategori: "Non-Kopi", harga: 20000, tersedia: true, deskripsi: "Cokelat pekat dengan susu hangat." },
  { id: 7, nama: "Roti Bakar", kategori: "Makanan", harga: 16000, tersedia: true, deskripsi: "Roti tebal dengan selai cokelat dan keju." },
  { id: 8, nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, tersedia: false, deskripsi: "Pisang goreng renyah dengan taburan keju." },
  { id: 9, nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, tersedia: true, deskripsi: "Nasi goreng kampung dengan telur mata sapi." },
];

const daftarKategori = ["Semua", "Kopi", "Non-Kopi", "Makanan"];

function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [pesanan, setPesanan] = useState([]);

  const menuTampil =
    kategoriAktif === "Semua"
      ? dataMenu
      : dataMenu.filter((m) => m.kategori === kategoriAktif);

  const itemPesanan = pesanan.map((p) => {
    const menu = dataMenu.find((m) => m.id === p.id);
    return { ...menu, jumlah: p.jumlah };
  });
  const jumlahItem = itemPesanan.reduce((sum, i) => sum + i.jumlah, 0);
  const totalHarga = itemPesanan.reduce((sum, i) => sum + i.jumlah * i.harga, 0);

  function tambahMenu(id) {
    const ada = pesanan.some((p) => p.id === id);
    if (ada) {
      setPesanan(pesanan.map((p) => (p.id === id ? { ...p, jumlah: p.jumlah + 1 } : p)));
    } else {
      setPesanan([...pesanan, { id, jumlah: 1 }]);
    }
  }

  function kurangMenu(id) {
    setPesanan(
      pesanan
        .map((p) => (p.id === id ? { ...p, jumlah: p.jumlah - 1 } : p))
        .filter((p) => p.jumlah > 0)
    );
  }

  function kosongkanPesanan() {
    setPesanan([]);
  }

  return (
    <div className="min-h-screen bg-maroon-50 text-maroon-900">
      <Navbar
        daftarKategori={daftarKategori}
        kategoriAktif={kategoriAktif}
        onKategoriClick={setKategoriAktif}
        jumlahItem={jumlahItem}
        totalHarga={totalHarga}
      />

      <section className="bg-gradient-to-br from-maroon-700 to-maroon-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
          <p className="text-sm uppercase tracking-widest text-maroon-200">Selamat datang</p>
          <h2 className="mt-1 text-3xl font-extrabold md:text-4xl">Pesan sendiri, tanpa antre.</h2>
          <p className="mt-2 max-w-xl text-maroon-100">
            Pilih menu favoritmu. Pesananmu langsung kami siapkan.
          </p>
        </div>
      </section>

      <main className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MenuList menuList={menuTampil} kategoriAktif={kategoriAktif} onTambah={tambahMenu} />
        </div>
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <RingkasanPesanan
            itemPesanan={itemPesanan}
            jumlahItem={jumlahItem}
            totalHarga={totalHarga}
            onTambah={tambahMenu}
            onKurang={kurangMenu}
          />
          <FormPesan jumlahItem={jumlahItem} onKirim={kosongkanPesanan} />
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default App;