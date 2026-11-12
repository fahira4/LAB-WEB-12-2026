import Link from "next/link";

function Hero({ nama, deskripsi, lokasi }) {
    return (
        <section className="bg-[#f1e5dc] rounded-3xl px-8 py-16 md:px-14 text-center">

            <p className="text-sm font-medium text-[#a47776] mb-4">
                ✿ A little place for book lovers
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#60483e] mb-5">
                Selamat Datang di
                <br />
                <span className="text-[#b17e83]">{nama}</span>
            </h1>

            <p className="text-[#806e62] max-w-xl mx-auto leading-relaxed mb-4">
                {deskripsi}
            </p>

            <p className="text-sm text-[#9b8174] mb-8">
                ♡ {lokasi}
            </p>

            <div className="flex flex-wrap justify-center gap-4">

                <Link
                    href="/katalog"
                    className="bg-[#8e6860] text-white px-6 py-3 rounded-full hover:bg-[#76554f] transition"
                >
                    Jelajahi Buku →
                </Link>

                <Link
                    href="/usulan"
                    className="border border-[#a77d78] text-[#805e59] px-6 py-3 rounded-full hover:bg-[#e7d5cb] transition"
                >
                    Usulkan Buku
                </Link>

            </div>

        </section>
    );
}

export default Hero;