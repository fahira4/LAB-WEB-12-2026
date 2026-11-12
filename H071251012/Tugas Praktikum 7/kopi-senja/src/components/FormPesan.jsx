    import { useState } from "react";

    function FormPesan({ pesanan, onKirim }) {

    const [nama, setNama] = useState("");
    const [nomorMeja, setNomorMeja] = useState("");
    const [pesanError, setPesanError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (pesanan.length === 0) {
        setPesanError("Silakan pilih menu terlebih dahulu.");
        return;
        }

        if (nama.trim() === "" || nomorMeja.trim() === "") {
        setPesanError("Nama dan nomor meja harus diisi.");
        return;
        }

        if (!Number.isInteger(Number(nomorMeja)) || Number(nomorMeja) < 1) {
        setPesanError("Nomor meja harus berupa angka positif.");
        return;
        }

        onKirim();

        setNama("");
        setNomorMeja("");
        setPesanError("");
    }

    return (
        <section className="max-w-6xl mx-auto px-6 py-8">

        <div className="bg-white rounded-2xl border border-[#E8C8C8] p-6 shadow-sm">

            <h2 className="text-2xl font-bold text-[#493942] mb-2">
            Data Pemesan
            </h2>

            <p className="text-sm text-[#B58C9A] mb-6">
            Lengkapi data sebelum mengirim pesanan.
            </p>

            <form onSubmit={handleSubmit}>

            <div className="mb-4">

                <label className="block text-sm font-medium text-[#493942] mb-2">
                Nama Pelanggan
                </label>

                <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Masukkan nama kamu"
                className="w-full border border-[#E8C8C8] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#B58C9A]"
                />

            </div>

            <div className="mb-5">

                <label className="block text-sm font-medium text-[#493942] mb-2">
                Nomor Meja
                </label>

                <input
                type="number"
                min="1"
                value={nomorMeja}
                onChange={(e) => setNomorMeja(e.target.value)}
                placeholder="Masukkan nomor meja"
                className="w-full border border-[#E8C8C8] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#B58C9A]"
                />

            </div>

            {pesanError && (
                <p className="text-sm text-red-500 mb-4">
                {pesanError}
                </p>
            )}

            <button
                type="submit"
                className="w-full bg-[#765866] text-white py-3 rounded-xl font-semibold hover:bg-[#493942]"
            >
                Kirim Pesanan
            </button>

            </form>

        </div>

        </section>
    );
    }

    export default FormPesan;