import { useState } from "react";

const ikonKategori = {
  Kopi: "☕",
  "Non-Kopi": "🍵",
  Makanan: "🍽️",
};

function MenuCard({ id, nama, kategori, harga, tersedia, deskripsi, onTambah }) {
  const [detailTerbuka, setDetailTerbuka] = useState(false);

  return (
    <article
      className={
        "flex flex-col self-start overflow-hidden rounded-2xl bg-white shadow-card transition " +
        (tersedia ? "hover:-translate-y-1 hover:shadow-xl" : "")
      }
    >
      <div
        className={
          "relative flex h-28 items-center justify-center text-5xl " +
          (tersedia ? "bg-maroon-100" : "bg-gray-200 grayscale")
        }
      >
        <span>{ikonKategori[kategori]}</span>
        <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-maroon-700">
          {kategori}
        </span>
        {!tersedia && (
          <span className="absolute right-3 top-3 rounded-full bg-maroon-800 px-2.5 py-0.5 text-xs font-bold text-white">
            Habis
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-maroon-900">{nama}</h3>
          <p className="whitespace-nowrap text-lg font-extrabold text-maroon-600">
            Rp {harga.toLocaleString("id-ID")}
          </p>
        </div>

        {detailTerbuka && (
          <p className="mt-2 rounded-lg bg-maroon-50 p-3 text-sm text-maroon-800">{deskripsi}</p>
        )}

        <div className="mt-auto flex gap-2 pt-4">
          <button
            type="button"
            onClick={() => setDetailTerbuka(!detailTerbuka)}
            className="flex-1 rounded-xl border border-maroon-200 px-3 py-2 text-sm font-medium text-maroon-700 transition hover:bg-maroon-50"
          >
            {detailTerbuka ? "Tutup Detail" : "Lihat Detail"}
          </button>
          <button
            type="button"
            disabled={!tersedia}
            onClick={() => onTambah(id)}
            className="flex-1 rounded-xl bg-maroon-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-maroon-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
          >
            {tersedia ? "+ Tambah" : "Habis"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default MenuCard;