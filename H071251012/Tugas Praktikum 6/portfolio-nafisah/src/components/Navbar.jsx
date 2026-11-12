    import { useState } from "react";

    function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 border-b border-[#f3e5eb] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            {/* Logo */}
            <a
            href="#home"
            onClick={() => console.log("Menu yang diklik: Home")}
            className="text-xl font-semibold tracking-tight text-[#d98eac]"
            >
            Vie<span className="text-[#694f5d]">.</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
                <a
                key={link.name}
                href={link.href}
                onClick={() => console.log("Menu yang diklik:", link.name)}
                className="text-sm text-[#806d78] transition-colors duration-200 hover:text-[#d98eac]"
                >
                {link.name}
                </a>
            ))}
            </div>

            {/* Mobile Menu Button */}
            <button
            type="button"
            onClick={() => {
                console.log(menuOpen ? "Menu HP ditutup" : "Menu HP dibuka");
                setMenuOpen(!menuOpen);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f0dce5] text-[#a66f87] transition hover:bg-[#fff5f8] md:hidden"
            >
            <span className="text-xl">
                {menuOpen ? "×" : "☰"}
            </span>
            </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
            <div className="border-t border-[#f3e5eb] bg-white px-6 py-4 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
                {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                    console.log("Menu yang diklik:", link.name);
                    setMenuOpen(false);
                    }}
                    className="rounded-xl px-4 py-3 text-sm text-[#806d78] transition-colors hover:bg-[#fff5f8] hover:text-[#d98eac]"
                >
                    {link.name}
                </a>
                ))}
            </div>
            </div>
        )}
        </nav>
    );
    }

    export default Navbar;

