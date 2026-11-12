"use client";

import { useState } from "react";

const pilihanKategori = ["Teknologi", "Fiksi", "Pengembangan Diri"];

export default function UsulanPage() {
  const [nama, setNama] = useState("");
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("");
  const [alasan, setAlasan] = useState("");
  const [pesanError, setPesanError] = useState("");
  const [berhasil, setBerhasil] = useState(false);
  const [daftarUsulan, setDaftarUsulan] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      nama.trim() === "" ||
      judul.trim() === "" ||
      kategori.trim() === "" ||
      alasan.trim() === ""
    ) {
      setBerhasil(false);
      setPesanError("Semua kolom wajib diisi sebelum usulan dikirim.");
      return;
    }

    const usulanBaru = {
      id: Date.now(),
      nama: nama.trim(),
      judul: judul.trim(),
      kategori,
      alasan: alasan.trim(),
    };

    setDaftarUsulan([usulanBaru, ...daftarUsulan]);
    setPesanError("");
    setBerhasil(true);
    setNama("");
    setJudul("");
    setKategori("");
    setAlasan("");
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder:text-slate-400 transition focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20";
  const labelClass = "mb-1 block text-sm font-medium text-slate-700";

  return (
    <section className="mx-auto max-w-lg">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="mb-2 font-serif text-2xl font-bold text-slate-900">
          Usulan Buku
        </h1>
        <p className="mb-6 text-sm text-slate-600">
          Ada judul yang ingin kamu baca di Pustaka Senja? Kirimkan usulanmu di sini.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nama" className={labelClass}>
              Nama Pengusul
            </label>
            <input
              id="nama"
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan nama Anda"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="judul" className={labelClass}>
              Judul Buku yang Diusulkan
            </label>
            <input
              id="judul"
              type="text"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              placeholder="Contoh: The Pragmatic Programmer"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="kategori" className={labelClass}>
              Kategori
            </label>
            <select
              id="kategori"
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
              className={inputClass}
            >
              <option value="">Pilih kategori</option>
              {pilihanKategori.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="alasan" className={labelClass}>
              Alasan Usulan
            </label>
            <textarea
              id="alasan"
              rows={4}
              value={alasan}
              onChange={(e) => setAlasan(e.target.value)}
              placeholder="Mengapa buku ini perlu ada?"
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-teal-700 py-2.5 font-medium text-white transition hover:bg-teal-800"
          >
            Kirim Usulan
          </button>
        </form>

        {pesanError && (
          <p
            role="alert"
            className="mt-4 rounded-lg border border-rose-200 bg-rose-50 p-3 text-center text-sm text-rose-700"
          >
            {pesanError}
          </p>
        )}
        {berhasil && (
          <p
            role="status"
            className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-center text-sm text-emerald-700"
          >
            Usulan berhasil dikirim. Terima kasih!
          </p>
        )}
      </div>

      {daftarUsulan.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-4 font-serif text-xl font-semibold text-slate-900">
            Usulan yang Baru Dikirim
          </h2>
          <ul className="space-y-3">
            {daftarUsulan.map((usulan) => (
              <li
                key={usulan.id}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="font-serif font-semibold text-slate-900">
                  {usulan.judul}
                </p>
                <p className="text-xs font-semibold text-teal-700">
                  {usulan.kategori}
                </p>
                <p className="mt-2 text-sm text-slate-700">{usulan.alasan}</p>
                <p className="mt-2 text-xs text-slate-500">
                  Diusulkan oleh {usulan.nama}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}