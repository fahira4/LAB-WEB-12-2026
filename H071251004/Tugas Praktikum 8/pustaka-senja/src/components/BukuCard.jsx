"use client";

import { useState } from "react";
import Link from "next/link";

function BukuCard({ id, judul, penulis, kategori, tahun, tersedia }) {
  const [favorit, setFavorit] = useState(false);

  return (
    <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-400 hover:shadow-md">
      <div>
        <div className="mb-3 flex items-start justify-between gap-2">
          <span className="text-xs font-semibold text-teal-700">{kategori}</span>
          <span
            className={
              tersedia
                ? "rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700"
                : "rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-700"
            }
          >
            {tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>
        </div>
        <h3 className="font-serif text-lg font-semibold leading-snug text-slate-900">
          {judul}
        </h3>
        <p className="mt-1 text-sm text-slate-600">{penulis}</p>
        <p className="text-sm text-slate-500">Terbit {tahun}</p>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3">
        <button
          type="button"
          onClick={() => setFavorit(!favorit)}
          aria-pressed={favorit}
          className={
            favorit
              ? "rounded-lg bg-teal-700 px-3 py-1.5 text-sm font-medium text-white transition"
              : "rounded-lg bg-slate-100 px-3 py-1.5 text-sm text-slate-700 transition hover:bg-slate-200"
          }
        >
          {favorit ? "★ Favorit" : "☆ Simpan"}
        </button>
        <Link
          href={`/katalog/${id}`}
          className="text-sm font-medium text-teal-700 hover:text-teal-800 hover:underline"
        >
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}

export default BukuCard;