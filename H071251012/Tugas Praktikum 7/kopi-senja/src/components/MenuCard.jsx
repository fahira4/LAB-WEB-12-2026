    import { useState } from "react";

    function MenuCard({ menu, onTambah }) {

    const [detailTerbuka, setDetailTerbuka] = useState(false);

    return (
        <div className="bg-white rounded-2xl p-5 border border-[#E8C8C8] shadow-sm">

        <div className="flex justify-between items-start">

            <div>
            <h3 className="text-lg font-bold text-[#493942]">
                {menu.nama}
            </h3>

            <p className="text-sm text-[#B58C9A] mt-1">
                {menu.kategori}
            </p>
            </div>

            <span className={`text-xs px-3 py-1 rounded-full ${
            menu.tersedia
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
            }`}>
            {menu.tersedia ? "Tersedia" : "Habis"}
            </span>

        </div>

        <p className="text-lg font-bold text-[#765866] mt-4">
            Rp {menu.harga.toLocaleString("id-ID")}
        </p>

        <button
            onClick={() => setDetailTerbuka(!detailTerbuka)}
            className="text-sm text-[#B58C9A] underline mt-3"
        >
            {detailTerbuka ? "Tutup Detail" : "Lihat Detail"}
        </button>

        {detailTerbuka && (
            <p className="text-sm text-[#765866] mt-3">
            {menu.deskripsi}
            </p>
        )}

        <button
            onClick={() => onTambah(menu)}
            disabled={!menu.tersedia}
            className={`w-full mt-5 py-2 rounded-xl font-semibold ${
            menu.tersedia
                ? "bg-[#B58C9A] text-white hover:bg-[#765866]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
        >
            {menu.tersedia ? "Tambah Pesanan" : "Menu Habis"}
        </button>

        </div>
    );
    }

    export default MenuCard;