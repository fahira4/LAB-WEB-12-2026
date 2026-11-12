import Link from "next/link";
import Hero from "@/components/Hero";
import dataBuku from "@/data/dataBuku";

export default function BerandaPage() {
  const total = dataBuku.length;
  const tersedia = dataBuku.filter((buku) => buku.tersedia).length;
  const dipinjam = dataBuku.filter((buku) => !buku.tersedia).length;

  const statistik = [
    { label: "Total Koleksi Buku", nilai: total },
    { label: "Buku Tersedia", nilai: tersedia },
    { label: "Buku Dipinjam", nilai: dipinjam },
  ];

  return (
    <div className="space-y-10">
      <Hero
        nama="Pustaka Senja"
        slogan="Ruang baca komunitas dekat kampus, tempat tenang untuk membaca, meminjam, dan bertukar cerita."
        lokasi="Jl. Perintis Kemerdekaan, Tamalanrea, Makassar (Dekat Kampus Unhas)"
        jamBuka="Setiap hari, 9.00 - 21.00"
      />

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {statistik.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-l-4 border-slate-200 border-l-teal-600 bg-white p-6 shadow-sm"
          >
            <p className="font-serif text-4xl font-bold text-teal-700">
              {item.nilai}
            </p>
            <p className="mt-1 text-sm text-slate-600">{item.label}</p>
          </div>
        ))}
      </section>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/katalog"
          className="rounded-lg bg-teal-700 px-5 py-2.5 font-medium text-white transition hover:bg-teal-800"
        >
          Jelajahi Katalog
        </Link>
        <Link
          href="/usulan"
          className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 font-medium text-slate-700 transition hover:border-teal-500 hover:text-teal-700"
        >
          Usulkan Buku
        </Link>
      </div>
    </div>
  );
}