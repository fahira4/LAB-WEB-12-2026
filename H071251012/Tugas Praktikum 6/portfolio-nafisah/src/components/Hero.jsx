function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#fff6f9] px-6 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

        {/* Profile Photo */}
        <div className="relative mx-auto w-full max-w-95">

          {/* Photo Frame */}
        <div className="absolute -bottom-3 -left-3 h-full w-full rounded-4xl border border-[#e9b6ca]" />
        <div className="group relative overflow-hidden rounded-4xl border-[6px] border-white bg-[#f6e5ec] shadow-[0_18px_45px_rgba(150,95,120,0.12)]">

            <img
            src="/visya.jpeg"
            className="h-105 w-full object-cover object-center transition duration-500 group-hover:scale-[1.03] sm:h-120"
            />

            {/* Soft Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#37242c]/20 via-transparent to-transparent" />

            {/* Photo Caption */}
            <div className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-xs tracking-wide text-[#80616f] backdrop-blur-sm">
            @visyark
            </div>
        </div>

          {/* Small Decorations */}
        <span className="absolute -right-3 top-8 h-5 w-5 rounded-full border border-[#e9b6ca] bg-[#fff6f9]" />
        <span className="absolute -left-5 top-12 text-2xl text-[#d98eac]">
            +
        </span>
        </div>

        {/* Introduction */}
        <div className="pt-2 text-center md:text-left">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c77998]">
            pojok visya
        </p>

        <h1 className="font-['Quicksand'] text-4xl font-bold leading-tight text-[#684f5c] sm:text-5xl lg:text-6xl">
            In my own,
            <br />
            <span className="text-[#d98eac]">
            Element.
            </span>
        </h1>

        <p className="mt-6 text-base font-medium text-[#c77998]">
            Hello, I'm Vie!
        </p>

        <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#806d78] sm:text-base md:mx-0">
            An Information Systems student who loves art, music,
            and creative design. I enjoy dancing, singing,
            and exploring the world of UI/UX design.
        </p>

          {/* Navigation Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">

            <a
            href="#about"
            className="rounded-full bg-[#d98eac] px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#c77998] hover:shadow-md"
            >
            About Me
            </a>

            <a
            href="#gallery"
            className="rounded-full border border-[#e9b6ca] bg-white px-6 py-3 text-sm font-medium text-[#b96f8d] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff0f5]"
            >
            View Gallery
            </a>

        </div>

          {/* Interests */}
        <div className="mt-9 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#bd829a] sm:gap-4 md:justify-start">
            <span>Dance</span>

            <span className="text-[#e9b6ca]">
            /
            </span>

            <span>Music</span>

            <span className="text-[#e9b6ca]">
            /
            </span>

            <span>Design</span>

        </div>
        </div>
    </div>
    </section>
);
}

export default Hero;