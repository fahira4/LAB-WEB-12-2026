import foto1 from "../assets/gallery/Foto1.png";
import foto2 from "../assets/gallery/Foto2.png";
import foto3 from "../assets/gallery/Foto3.png";
import foto4 from "../assets/gallery/Foto4.png";

function Gallery() {
  const daftarFoto = [
    { id: 1, judul: "Website Wisata", gambar: foto1 },
    { id: 2, judul: "Website Concert", gambar: foto2 },
    { id: 3, judul: "Website Sistem Laporan Praktikum", gambar: foto3 },
    { id: 4, judul: "Website Tugas Tim", gambar: foto4 },
  ];

  return (
    <section id="gallery" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="inline-block bg-[linear-gradient(transparent_62%,var(--color-stabilo)_62%)] font-judul text-3xl font-bold text-tinta sm:text-4xl">
          Galeri Hasil Proyek
        </h2>
        
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {daftarFoto.map((foto) => (
            <figure
              key={foto.id}
              className="group m-0 flex flex-col justify-between overflow-hidden border-2 border-tinta bg-white p-4 shadow-[6px_6px_0_var(--color-tinta)] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--color-tinta)]"
            >
              <div className="overflow-hidden bg-kertas border border-tinta/20">
                <img
                  src={foto.gambar}
                  alt={foto.judul}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <figcaption className="mt-4 border-t-2 border-tinta/15 pt-3 text-center text-base font-bold text-tinta">
                {foto.judul}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;