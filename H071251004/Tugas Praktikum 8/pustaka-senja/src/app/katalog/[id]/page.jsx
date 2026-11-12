import Link from "next/link";
import dataBuku from "@/data/dataBuku";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((item) => item.id === id);

  if (!buku) {
    return (
      <div className="py-16 text-center">
        <h1 className="mb-4 font-serif text-2xl font-bold text-rose-600">
          Buku dengan ID &quot;{id}&quot; tidak ditemukan.
        </h1>
        <Link
          href="/katalog"
          className="font-medium text-teal-700 hover:text-teal-800 hover:underline"
        >
          &larr; Kembali ke Katalog
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
          {buku.kategori}
        </span>
        <span
          className={
            buku.tersedia
              ? "rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700"
              : "rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700"
          }
        >
          {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
        </span>
      </div>
      <h1 className="font-serif text-3xl font-bold text-slate-900">
        {buku.judul}
      </h1>
      <p className="mt-1 text-slate-600">
        {buku.penulis} &middot; Terbit {buku.tahun}
      </p>
      <h2 className="mt-6 font-semibold text-teal-700">Sinopsis</h2>
      <p className="mt-2 mb-8 leading-relaxed text-slate-700">
        {buku.sinopsis}
      </p>
      <Link
        href="/katalog"
        className="inline-block rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:border-teal-500 hover:text-teal-700"
      >
        &larr; Kembali ke Katalog
      </Link>
    </article>
  );
}