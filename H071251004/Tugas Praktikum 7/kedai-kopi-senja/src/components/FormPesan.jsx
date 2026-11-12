import { useState } from "react";

function FormPesan({ jumlahItem, onKirim }) {
  const [nama, setNama] = useState("");
  const [meja, setMeja] = useState("");
  const [errors, setErrors] = useState({ nama: "", meja: "", pesanan: "" });
  const [terkirim, setTerkirim] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setTerkirim(false);

    const error = { nama: "", meja: "", pesanan: "" };

    if (nama.trim().length < 2) {
      error.nama = "Nama minimal 2 karakter.";
    }
    if (!/^\d+$/.test(meja.trim()) || Number(meja) < 1 || Number(meja) > 50) {
      error.meja = "Nomor meja harus berupa angka 1 sampai 50.";
    }
    if (jumlahItem === 0) {
      error.pesanan = "Pesanan masih kosong. Pilih minimal satu menu.";
    }

    setErrors(error);

    if (error.nama || error.meja || error.pesanan) {
      return;
    }

    setTerkirim(true);
    setNama("");
    setMeja("");
    onKirim();
  }

  const kelasInput =
    "w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-maroon-900 placeholder:text-maroon-300 focus:outline-none focus:ring-2 ";
  const kelasNormal = "border-maroon-200 focus:border-maroon-600 focus:ring-maroon-200";
  const kelasSalah = "border-red-400 focus:border-red-500 focus:ring-red-200";

  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-card">
      <div className="bg-maroon-700 px-5 py-3 text-white">
        <h2 className="text-lg font-bold">Kirim Pesanan</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 p-5" noValidate>
        <div>
          <label htmlFor="nama" className="mb-1 block text-sm font-medium text-maroon-800">
            Nama
          </label>
          <input
            id="nama"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama pelanggan"
            className={kelasInput + (errors.nama ? kelasSalah : kelasNormal)}
          />
          {errors.nama !== "" && (
            <p role="alert" className="mt-1 text-sm text-red-600">⚠️ {errors.nama}</p>
          )}
        </div>

        <div>
          <label htmlFor="meja" className="mb-1 block text-sm font-medium text-maroon-800">
            Nomor Meja
          </label>
          <input
            id="meja"
            type="text"
            inputMode="numeric"
            value={meja}
            onChange={(e) => setMeja(e.target.value)}
            placeholder="Contoh: 5"
            className={kelasInput + (errors.meja ? kelasSalah : kelasNormal)}
          />
          {errors.meja !== "" && (
            <p role="alert" className="mt-1 text-sm text-red-600">⚠️ {errors.meja}</p>
          )}
        </div>

        {errors.pesanan !== "" && (
          <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-700">
            {errors.pesanan}
          </p>
        )}
        {terkirim && (
          <p role="status" className="rounded-xl border border-green-200 bg-green-50 px-4 py-2.5 text-sm text-green-700">
            Pesanan Anda sudah terkirim. Mohon tunggu sebentar, pesanan akan segera kami siapkan. Terima kasih!
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-maroon-700 py-3 text-sm font-bold text-white shadow transition hover:bg-maroon-800 active:scale-95"
        >
          Kirim Pesanan
        </button>
      </form>
    </section>
  );
}

export default FormPesan;