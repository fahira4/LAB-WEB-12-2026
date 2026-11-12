import Link from "next/link";
import dataBuku from "@/data/databuku";

export default async function DetailBukuPage({ params }) {

    const { id } = await params;
    const buku = dataBuku.find(
        (item) => item.id === id
    );

    if (!buku) {
        return (
            <div className="text-center py-20">

                <h1 className="text-3xl font-bold text-[#8e6860] mb-4">
                    Buku Tidak Ditemukan
                </h1>

                <p className="text-[#968276] mb-6">
                    Maaf, buku yang kamu cari tidak tersedia.
                </p>

                <Link
                    href="/katalog"
                    className="bg-[#8e6860] text-white px-6 py-3 rounded-full"
                >
                    ← Kembali ke Katalog
                </Link>

            </div>
        );
    }

    return (
        <section className="max-w-2xl mx-auto">

            <Link
                href="/katalog"
                className="text-sm text-[#a47776] hover:underline"
            >
                ← Kembali ke Katalog
            </Link>

            <div className="bg-white border border-[#eee3dc] rounded-3xl p-8 md:p-10 mt-6 shadow-sm">

                <span className="inline-block bg-[#f5eae6] text-[#a47776] px-4 py-2 rounded-full text-xs mb-6">
                    {buku.kategori}
                </span>

                <h1 className="text-3xl font-bold text-[#60483e] mb-3">
                    {buku.judul}
                </h1>

                <p className="text-[#968276] mb-8">
                    Ditulis oleh {buku.penulis}
                </p>

                <div className="border-y border-[#eee3dc] py-5 space-y-3">

                    <p className="text-[#806e62]">
                        <span className="font-semibold">ID Buku:</span> {buku.id}
                    </p>

                    <p className="text-[#806e62]">
                        <span className="font-semibold">Tahun Terbit:</span> {buku.tahun}
                    </p>

                    <p className="text-[#806e62]">
                        <span className="font-semibold">Kategori:</span> {buku.kategori}
                    </p>

                    <p className="text-[#806e62]">
                        <span className="font-semibold">Status:</span>{" "}
                        {buku.tersedia ? (
                            <span className="text-green-600">Tersedia</span>
                        ) : (
                            <span className="text-red-500">Sedang Dipinjam</span>
                        )}
                    </p>

                </div>

                <div className="mt-8">

                    <h2 className="text-xl font-bold text-[#60483e] mb-3">
                        Sinopsis Buku
                    </h2>

                    <p className="text-[#89766b] leading-relaxed">
                        {buku.sinopsis}
                    </p>

                </div>

                <div className="mt-8 bg-[#f7eee9] rounded-2xl p-5 text-center">
                    <p className="text-sm text-[#a47776]">
                        Selamat menikmati bacaanmu di Pustaka Senja ♡
                    </p>
                </div>

            </div>

        </section>
    );
}