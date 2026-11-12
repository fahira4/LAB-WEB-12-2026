import foto1 from "../assets/gallery/foto1.jpeg";
import foto2 from "../assets/gallery/foto2.jpeg";
import foto3 from "../assets/gallery/foto3.jpeg";
import foto4 from "../assets/gallery/foto4.jpeg";

function Gallery() {
const photos = [
    {
    image: foto1,
    title: "Ini TUMBAAALL",
    description: "penyemangat kuyiah dd.",
    },
    {
    image: foto3,
    title: "enhaakuuu",
    description: "my day ones fr.",
    },
    {
    image: foto2,
    title: "oyulyul",
    description: "ini photoism ketiga aq sm ohyul wkoakwowk.",
    },
    {
    image: foto4,
    title: "yeochin",
    description: "dd kgn jipren.",
    },
];

return (
    <section
    id="gallery"
    className="bg-white px-6 py-20 md:px-12">
    <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 text-center">
        <p className="text-xs tracking-[0.2em] text-[#bd7895]">
            MY LITTLE CIRCLE</p>

        <h2 className="mt-3 text-3xl font-bold text-[#65515b] sm:text-4xl">
            FOTO KITA{" "}
            <span className="text-[#d98eac]">BLUR..</span> </h2>

        <p className="mt-4 text-sm leading-7 text-[#806d76]">
            Mereka Aja.</p>

        <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#e9bdce]"></div>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {photos.map((photo, index) => (
            <div key={photo.title} className="group">
            <div className="overflow-hidden rounded-2xl bg-[#fff5f8] p-2">
                <img
                src={photo.image}
                alt={photo.title}
                className="h-72 w-full rounded-xl object-cover transition duration-300 group-hover:scale-105"/>
            </div>

              {/* Photo Information */}
            <div className="mt-4">
                <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-[#65515b]">
                    {photo.title}</h3>

                <span className="text-xs tracking-widest text-[#bd91a5]">
                    0{index + 1}
                </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-[#9a8590]">
                {photo.description}
                </p>

                <div className="mt-4 h-px w-10 bg-[#e9bdce] transition-all duration-300 group-hover:w-16"></div>
        </div>

            </div>
        ))}

        </div>

        <p className="mt-14 text-center text-xs tracking-[0.15em] text-[#bd91a5]">
            my little archive. ♡ </p>

    </div>
    </section>
);
}

export default Gallery;