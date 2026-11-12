function Hero() {
  const nama = "Zahra Intan Pratiwi";
  const deskripsi =
    "Mahasiswa Sistem Informasi Universitas Hasanuddin yang mendalami perancangan antarmuka UI/UX, pengembangan web, serta pengelolaan manajemen sistem informasi.";

  const sapaKenalan = () => {
    console.log("Tombol Lihat Selengkapnya diklik");
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 py-16 md:py-28"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="mb-3 animate-muncul font-semibold text-biru motion-reduce:animate-none [animation-delay:300ms]">
            Selamat datang di portofolio saya!
          </p>
          <h1 className="animate-muncul font-judul text-4xl font-bold leading-tight text-tinta motion-reduce:animate-none sm:text-5xl lg:text-6xl [animation-delay:500ms]">
            {nama}
          </h1>
          <p className="mx-auto mt-5 max-w-lg animate-muncul text-lg leading-relaxed text-tinta/75 motion-reduce:animate-none md:mx-0 [animation-delay:700ms]">
            {deskripsi}
          </p>
          
          <a
            href="#about"
            onClick={sapaKenalan}
            className="inline-block mt-8 animate-muncul cursor-pointer rounded-lg border-2 border-tinta bg-biru px-8 py-3 font-semibold text-white shadow-[4px_4px_0_var(--color-tinta)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-biru-gelap hover:shadow-[2px_2px_0_var(--color-tinta)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-biru motion-reduce:animate-none [animation-delay:900ms]"
          >
            Lihat Selengkapnya →
          </a>
        </div>

        <div className="order-1 mx-auto w-60 animate-membesar motion-reduce:animate-none sm:w-72 md:order-2 md:w-80 [animation-delay:200ms]">
          <div className="relative rotate-3 border-2 border-tinta bg-white p-3 pb-12 shadow-[8px_8px_0_var(--color-tinta)]">
            <div className="absolute -top-4 left-1/2 h-7 w-28 -translate-x-1/2 -rotate-3 bg-stabilo/90" />
            <img
              src="/Foto_Profil.jpeg"
              alt="Foto profil Zahra"
              className="aspect-square w-full border border-tinta/20 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;