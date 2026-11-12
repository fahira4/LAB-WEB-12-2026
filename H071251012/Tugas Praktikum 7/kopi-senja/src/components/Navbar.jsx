    function Navbar({ kategoriAktif, onPilihKategori }) {

    const daftarKategori = [
        "Semua",
        "Kopi",
        "Non-Kopi",
        "Makanan"
    ];

    return (
        <nav className="bg-[#765866] text-white px-6 py-5 shadow-md">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

            <div>
            <h1 className="text-2xl font-bold">
                Kedai Kopi Senja
            </h1>

            <p className="text-sm text-[#E8C8C8]">
                A little coffee, a little happiness.
            </p>
            </div>

            <div className="flex flex-wrap gap-2">

            {daftarKategori.map((kategori) => (
                <button
                key={kategori}
                onClick={() => onPilihKategori(kategori)}
                className={`px-4 py-2 rounded-full text-sm ${
                    kategoriAktif === kategori
                    ? "bg-[#E8C8C8] text-[#493942]"
                    : "bg-[#B58C9A] text-white hover:bg-[#9D7585]"
                }`}
                >
                {kategori}
                </button>
            ))}

            </div>

        </div>

        </nav>
    );
    }

    export default Navbar;