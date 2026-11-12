"use client";

import { useState } from "react";

export default function UsulanPage() {

    const [nama, setNama] = useState("");
    const [judul, setJudul] = useState("");
    const [kategori, setKategori] = useState("");
    const [alasan, setAlasan] = useState("");

    const [pesan, setPesan] = useState("");
    const [daftarUsulan, setDaftarUsulan] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        if (
            nama.trim() === "" ||
            judul.trim() === "" ||
            kategori.trim() === "" ||
            alasan.trim() === ""
        ) {
            setPesan("Mohon lengkapi semua kolom terlebih dahulu.");
            return;
        }

        const usulanBaru = {
            id: Date.now(),
            nama: nama,
            judul: judul,
            kategori: kategori,
            alasan: alasan
        };

        setDaftarUsulan([...daftarUsulan, usulanBaru]);

        setPesan("Usulan buku berhasil dikirim! Terima kasih ♡");

        setNama("");
        setJudul("");
        setKategori("");
        setAlasan("");
    }

    return (
        <section className="max-w-2xl mx-auto">

            <div className="text-center mb-8">

                <p className="text-sm text-[#b17e83] mb-2">
                    ✿ Your Recommendation
                </p>

                <h1 className="text-3xl font-bold text-[#60483e]">
                    Usulkan Buku
                </h1>

                <p className="text-[#968276] mt-3">
                    Punya rekomendasi buku menarik? Bagikan dengan kami!
                </p>

            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white border border-[#eee3dc] rounded-3xl p-7 md:p-9 shadow-sm space-y-5"
            >

                <div>
                    <label className="block text-sm font-medium text-[#72574c] mb-2">
                        Nama Pengusul
                    </label>

                    <input
                        type="text"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        placeholder="Masukkan nama kamu"
                        className="w-full border border-[#e8d9d0] rounded-xl px-4 py-3 outline-none focus:border-[#b17e83]"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-[#72574c] mb-2">
                        Judul Buku
                    </label>

                    <input
                        type="text"
                        value={judul}
                        onChange={(e) => setJudul(e.target.value)}
                        placeholder="Masukkan judul buku"
                        className="w-full border border-[#e8d9d0] rounded-xl px-4 py-3 outline-none focus:border-[#b17e83]"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-[#72574c] mb-2">
                        Kategori Buku
                    </label>

                    <select
                        value={kategori}
                        onChange={(e) => setKategori(e.target.value)}
                        className="w-full border border-[#e8d9d0] rounded-xl px-4 py-3 outline-none focus:border-[#b17e83] bg-white"
                    >
                        <option value="">Pilih kategori buku</option>
                        <option value="Teknologi">Teknologi</option>
                        <option value="Fiksi">Fiksi</option>
                        <option value="Pengembangan Diri">Pengembangan Diri</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-[#72574c] mb-2">
                        Alasan Usulan
                    </label>

                    <textarea
                        rows={4}
                        value={alasan}
                        onChange={(e) => setAlasan(e.target.value)}
                        placeholder="Ceritakan alasan kamu merekomendasikan buku ini..."
                        className="w-full border border-[#e8d9d0] rounded-xl px-4 py-3 outline-none focus:border-[#b17e83] resize-none"
                    />
                </div>

                {pesan && (
                    <p className="text-sm text-[#a47776] bg-[#f7eee9] p-3 rounded-xl">
                        {pesan}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full bg-[#8e6860] text-white py-3 rounded-xl hover:bg-[#76554f] transition"
                >
                    Kirim Usulan ♡
                </button>

            </form>

            {daftarUsulan.length > 0 && (
                <section className="mt-10">

                    <h2 className="text-xl font-bold text-[#60483e] mb-5">
                        Daftar Usulan Buku
                    </h2>

                    <div className="space-y-4">

                        {daftarUsulan.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white border border-[#eee3dc] rounded-2xl p-5"
                            >

                                <h3 className="font-bold text-[#60483e]">
                                    {item.judul}
                                </h3>

                                <p className="text-sm text-[#a47776] mt-1">
                                    Oleh {item.nama}
                                </p>

                                <p className="text-xs text-[#968276] mt-2">
                                    {item.kategori}
                                </p>

                                <p className="text-sm text-[#89766b] mt-3">
                                    {item.alasan}
                                </p>

                            </div>
                        ))}

                    </div>

                </section>
            )}

        </section>
    );
}