import Hero from "@/components/Hero";
import dataBuku from "@/data/databuku";

export default function HomePage() {

    const totalBuku = dataBuku.length;

    const bukuTersedia = dataBuku.filter(
        (buku) => buku.tersedia === true
    ).length;

    const bukuDipinjam = dataBuku.filter(
        (buku) => buku.tersedia === false
    ).length;

    return (
        <div className="space-y-12">

            <Hero
                nama="Pustaka Senja"
                deskripsi="Sebuah ruang baca yang nyaman untuk menikmati cerita, menambah pengetahuan, dan menemukan inspirasi melalui buku."
                lokasi="Dekat area kampus · Buka setiap hari"
            />

            <section>

                <div className="text-center mb-8">
                    <p className="text-sm text-[#b17e83] mb-2">
                        ✿ Koleksi Kami
                    </p>

                    <h2 className="text-3xl font-bold text-[#60483e]">
                        Ruang untuk Setiap Cerita
                    </h2>

                    <p className="text-[#9b897d] mt-2">
                        Lihat koleksi buku yang tersedia di Pustaka Senja.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    <div className="bg-white border border-[#eee3dc] rounded-2xl p-7 text-center">
                        <p className="text-4xl font-bold text-[#8e6860]">
                            {totalBuku}
                        </p>
                        <p className="text-[#968276] mt-2">
                            Total Koleksi Buku
                        </p>
                    </div>

                    <div className="bg-white border border-[#eee3dc] rounded-2xl p-7 text-center">
                        <p className="text-4xl font-bold text-green-600">
                            {bukuTersedia}
                        </p>
                        <p className="text-[#968276] mt-2">
                            Buku Tersedia
                        </p>
                    </div>

                    <div className="bg-white border border-[#eee3dc] rounded-2xl p-7 text-center">
                        <p className="text-4xl font-bold text-[#b17e83]">
                            {bukuDipinjam}
                        </p>
                        <p className="text-[#968276] mt-2">
                            Buku Dipinjam
                        </p>
                    </div>

                </div>

            </section>

            <section className="bg-[#f1e5dc] rounded-2xl p-8 text-center">

                <h2 className="text-2xl font-bold text-[#60483e] mb-3">
                    Temukan Bacaan Favoritmu!
                </h2>

                <p className="text-[#89766b] mb-5">
                    Setiap buku punya cerita, mungkin salah satunya sedang menunggumu.
                </p>

                <p className="text-[#a47776] text-sm">
                    Happy Reading ♡
                </p>

            </section>

        </div>
    );
}