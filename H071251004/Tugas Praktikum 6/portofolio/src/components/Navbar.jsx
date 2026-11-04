function Navbar() {
  const menu = [
    { nama: "Home", tujuan: "#home" },
    { nama: "About", tujuan: "#about" },
    { nama: "Skills", tujuan: "#skills" },
    { nama: "Gallery", tujuan: "#gallery" },
  ];

  return (
    <nav className="sticky top-0 z-50 animate-turun border-b-2 border-tinta bg-kertas/95 backdrop-blur motion-reduce:animate-none">
      <div className="mx-10 flex max-w-8xl flex-col items-start gap-3 px-8 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="#home"
          className="font-judul text-xl font-bold text-tinta"
        >
          Portofolio
        </a>

        <ul className="m-0 flex list-none flex-wrap gap-1 p-0">
          {menu.map((item) => (
            <li key={item.nama}>
              <a
                href={item.tujuan}
                onClick={() => console.log(`Menu ${item.nama} diklik`)}
                className="block rounded-md px-4 py-2 text-sm font-semibold text-tinta transition hover:bg-stabilo focus-visible:outline-2 focus-visible:outline-biru"
              >
                {item.nama}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;