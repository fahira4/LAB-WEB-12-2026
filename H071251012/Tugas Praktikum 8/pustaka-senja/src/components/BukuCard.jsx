"use client";

import { useState } from "react";
import Link from "next/link";

function BukuCard({ buku }) {
    const [suka, setSuka] = useState(false);

    return (
        <div className="bg-white border border-[#eee3dc] rounded-2xl p-5 shadow-sm hover:shadow-md transition">

            <div className="flex items-start justify-between mb-4">

                <span className="text-xs bg-[#f5eae6] text-[#a47776] px-3 py-1 rounded-full">
                    {buku.kategori}
                </span>

                <button
                    onClick={() => setSuka(!suka)}
                    className="text-xl"
                >
                    {suka ? "♥" : "♡"}
                </button>

            </div>

            <h2 className="text-xl font-bold text-[#60483e] mb-2">
                {buku.judul}
            </h2>

            <p className="text-sm text-[#938176] mb-3">
                {buku.penulis}
            </p>

            <p className="text-sm text-[#a28f83] mb-4">
                Tahun terbit: {buku.tahun}
            </p>

            <div className="mb-5">
                {buku.tersedia ? (
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full">
                        ● Tersedia
                    </span>
                ) : (
                    <span className="text-xs bg-red-100 text-red-600 px-3 py-1.5 rounded-full">
                        ● Sedang Dipinjam
                    </span>
                )}
            </div>

            <Link
                href={`/katalog/${buku.id}`}
                className="block text-center bg-[#8e6860] text-white py-2.5 rounded-xl text-sm hover:bg-[#76554f] transition"
            >
                Lihat Detail →
            </Link>

        </div>
    );
}

export default BukuCard;