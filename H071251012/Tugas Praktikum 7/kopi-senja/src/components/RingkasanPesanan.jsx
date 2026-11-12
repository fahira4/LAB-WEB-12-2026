    function RingkasanPesanan({
    pesanan,
    jumlahPesanan,
    totalHarga,
    onKurangi,
    onHapus
    }) {

    return (
        <section className="max-w-6xl mx-auto px-6 py-8">

        <div className="bg-white rounded-2xl border border-[#E8C8C8] p-6 shadow-sm">

            <h2 className="text-2xl font-bold text-[#493942] mb-5">
            Ringkasan Pesanan
            </h2>

            {pesanan.length === 0 ? (

            <p className="text-center text-[#B58C9A] py-5">
                Belum ada pesanan.
            </p>

            ) : (

            <div className="space-y-4">

                {pesanan.map((item) => (
                <div
                    key={item.id}
                    className="flex justify-between items-center border-b border-[#F0E2E4] pb-4"
                >

                    <div>
                    <h3 className="font-semibold text-[#493942]">
                        {item.nama}
                    </h3>

                    <p className="text-sm text-[#B58C9A]">
                        Rp {item.harga.toLocaleString("id-ID")}
                    </p>
                    </div>

                    <div className="flex items-center gap-3">

                    <button
                        onClick={() => onKurangi(item.id)}
                        className="bg-[#F3E4E7] text-[#765866] w-8 h-8 rounded-full"
                    >
                        -
                    </button>

                    <span className="font-semibold text-[#493942]">
                        {item.jumlah}
                    </span>

                    <button
                        onClick={() => onHapus(item.id)}
                        className="text-sm text-red-400"
                    >
                        Hapus
                    </button>

                    </div>

                </div>
                ))}

            </div>

            )}

            <div className="border-t border-[#E8C8C8] mt-5 pt-5">

            <div className="flex justify-between text-[#765866]">
                <span>Jumlah Item</span>
                <span>{jumlahPesanan} item</span>
            </div>

            <div className="flex justify-between mt-3 text-lg font-bold text-[#493942]">
                <span>Total Harga</span>

                <span>
                Rp {totalHarga.toLocaleString("id-ID")}
                </span>
            </div>

            </div>

        </div>

        </section>
    );
    }

    export default RingkasanPesanan;