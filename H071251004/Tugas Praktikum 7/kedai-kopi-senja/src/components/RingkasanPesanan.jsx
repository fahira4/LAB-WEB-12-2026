function RingkasanPesanan({ itemPesanan, jumlahItem, totalHarga, onTambah, onKurang }) {
  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-card">
      <div className="bg-maroon-700 px-5 py-3 text-white">
        <h2 className="text-lg font-bold">Ringkasan Pesanan</h2>
      </div>

      <div className="p-5">
        {itemPesanan.length === 0 ? (
          <div className="py-6 text-center">
            <p className="text-4xl">🛒</p>
            <p className="mt-2 text-sm text-maroon-600">Belum ada pesanan. Silakan pilih menu.</p>
          </div>
        ) : (
          <ul className="divide-y divide-maroon-100">
            {itemPesanan.map((item) => (
              <li key={item.id} className="flex items-center justify-between gap-3 py-3 text-sm">
                <div className="min-w-0">
                  <p className="truncate font-semibold text-maroon-900">{item.nama}</p>
                  <p className="text-maroon-600">
                    Rp {item.harga.toLocaleString("id-ID")} × {item.jumlah} ={" "}
                    <span className="font-semibold">
                      Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => onKurang(item.id)}
                    aria-label={"Kurangi " + item.nama}
                    className="h-8 w-8 rounded-full border border-maroon-200 text-maroon-700 transition hover:bg-maroon-100"
                  >
                    −
                  </button>
                  <span className="w-5 text-center font-bold">{item.jumlah}</span>
                  <button
                    type="button"
                    onClick={() => onTambah(item.id)}
                    aria-label={"Tambah " + item.nama}
                    className="h-8 w-8 rounded-full bg-maroon-600 text-white transition hover:bg-maroon-700"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex items-center justify-between rounded-xl bg-maroon-50 px-4 py-3">
          <span className="text-sm text-maroon-700">{jumlahItem} item</span>
          <span className="text-xl font-extrabold text-maroon-700">
            Rp {totalHarga.toLocaleString("id-ID")}
          </span>
        </div>
      </div>
    </section>
  );
}

export default RingkasanPesanan;