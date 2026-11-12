"use client";

import { useState } from "react";
import dataBuku from "@/data/databuku";
import BukuCard from "@/components/BukuCard";

const daftarKategori = [
    "Semua",
    "Teknologi",
    "Fiksi",
    "Pengembangan Diri"
];

export default function KatalogPage() {

    const [kategoriAktif, setKategoriAktif] = useState("Semua");

    const bukuDitampilkan = kategoriAktif === "Semua"
        ? dataBuku
        : dataBuku.filter(
            (buku) => buku.kategori === kategoriAktif
        );

    return (
        <section>

            <div className="text-center mb-10">

                <p className="text-sm text-[#b17e83] mb-2">
                    ✿ Our Collection
                </p>

                <h1 className="text-3xl md:text-4xl font-bold text-[#60483e]">
                    Katalog Buku
                </h1>

                <p className="text-[#968276] mt-3">
                    Temukan buku yang ingin kamu baca hari ini.
                </p>

            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-10">

                {daftarKategori.map((kategori) => (
                    <button
                        key={kategori}
                        onClick={() => setKategoriAktif(kategori)}
                        className={
                            kategoriAktif === kategori
                                ? "bg-[#8e6860] text-white px-5 py-2.5 rounded-full text-sm"
                                : "bg-white border border-[#e8d9d0] text-[#89766b] px-5 py-2.5 rounded-full text-sm hover:bg-[#f1e5dc] transition"
                        }
                    >
                        {kategori}
                    </button>
                ))}

            </div>

            <p className="text-sm text-[#9b897d] mb-5">
                Menampilkan {bukuDitampilkan.length} buku
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {bukuDitampilkan.map((buku) => (
                    <BukuCard
                        key={buku.id}
                        buku={buku}
                    />
                ))}

            </div>

        </section>
    );
}