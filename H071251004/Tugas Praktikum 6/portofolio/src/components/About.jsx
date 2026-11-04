function About() {
  const deskripsi =
    "Saya merupakan mahasiswa Sistem Informasi Semester 3 yang mendalami integrasi antara desain pengalaman pengguna dan manajemen teknologi. Berorientasi pada pengembangan produk digital yang terstruktur, fungsional, serta memberikan dampak nyata.";

  const infoKartu = [
    {id: "01", label: "PROGRAM STUDI", isi: "Sistem Informasi", rotasi: "-rotate-1", warna: "bg-[#fff9d2]"},
    {id: "02", label: "UNIVERSITAS", isi: "Universitas Hasanuddin", rotasi: "rotate-1", warna: "bg-white"},
    {id: "03", label: "DOMISILI", isi: "Makassar, Sulawesi Selatan", rotasi: "rotate-2", warna: "bg-white"},
    {id: "04", label: "FOKUS MINAT", isi: "Manajemen Sistem Informasi (MSI)", rotasi: "-rotate-2", warna: "bg-[#eef2ff]"},
  ];

  return (
    <section id="about" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="inline-block bg-[linear-gradient(transparent_62%,var(--color-stabilo)_62%)] font-judul text-3xl font-bold text-tinta sm:text-4xl">
              Tentang Saya
            </h2>
            <p className="mt-5 text-base leading-relaxed text-tinta/80 sm:text-lg">
              {deskripsi}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-7">
            {infoKartu.map((item) => (
              <div
                key={item.id}
                className={`relative border-2 border-tinta ${item.warna} ${item.rotasi} p-5 shadow-[5px_5px_0_var(--color-tinta)] transition hover:rotate-0 hover:shadow-[7px_7px_0_var(--color-tinta)]`}
              >
                <div className="absolute -top-3 left-1/2 h-5 w-16 -translate-x-1/2 bg-tinta/15 border border-tinta/30" />
                
                <p className="text-xs font-bold tracking-wider text-biru">
                  // {item.id} • {item.label}
                </p>
                <h3 className="mt-2 text-base font-bold text-tinta md:text-lg">
                  {item.isi}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;