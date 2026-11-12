"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const daftarMenu = [
    { nama: "Beranda", path: "/" },
    { nama: "Katalog", path: "/katalog" },
    { nama: "Usulan Buku", path: "/usulan" }
];

function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="bg-[#fffaf6] border-b border-[#eaded5] sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

                <Link href="/" className="text-xl font-bold text-[#765747]">
                    Pustaka<span className="text-[#c28f91]"> Senja.</span>
                </Link>

                <ul className="flex items-center gap-6">
                    {daftarMenu.map((item) => {
                        const isActive =
                            item.path === "/"
                                ? pathname === "/"
                                : pathname.startsWith(item.path);

                        return (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className={
                                        isActive
                                            ? "text-[#a56e73] font-semibold border-b-2 border-[#c28f91] pb-1"
                                            : "text-[#89796e] hover:text-[#a56e73] transition"
                                    }
                                >
                                    {item.nama}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;