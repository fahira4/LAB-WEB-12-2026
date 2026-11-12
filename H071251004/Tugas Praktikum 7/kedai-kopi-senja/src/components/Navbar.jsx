function Navbar({ daftarKategori, kategoriAktif, onKategoriClick, jumlahItem, totalHarga }) {
  return (
    <header className="sticky top-0 z-20 bg-maroon-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
        
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg">☕</span>
            Kedai Kopi Senja
          </h1>

          <p className="min-w-[160px] text-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-maroon-800 md:hidden">
            🛒 {jumlahItem} · Rp {totalHarga.toLocaleString("id-ID")}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {daftarKategori.map((kat) => (
            <li key={kat}>
              <button
                type="button"
                onClick={() => onKategoriClick(kat)}
                className={
                  kat === kategoriAktif
                    ? "rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-maroon-800 shadow"
                    : "rounded-full border border-white/30 px-4 py-1.5 text-sm text-maroon-100 transition hover:bg-white/10"
                }
              >
                {kat}
              </button>
            </li>
          ))}
        </ul>

        <p className="hidden min-w-[210px] text-center rounded-full bg-white px-4 py-1.5 text-sm text-maroon-800 md:block">
          🛒 <span className="font-bold">{jumlahItem}</span> item ·{" "}
          <span className="font-bold tabular-nums">Rp {totalHarga.toLocaleString("id-ID")}</span>
        </p>

      </div>
    </header>
  );
}

export default Navbar;