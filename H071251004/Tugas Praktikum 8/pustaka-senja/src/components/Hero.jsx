function Hero({ nama, slogan, lokasi, jamBuka }) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-700 via-teal-600 to-sky-700 px-8 py-16 shadow-md sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-40 h-48 w-48 rounded-full bg-sky-300/15"
      />
      <div className="relative">
        <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-6xl">
          {nama}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-teal-50">
          {slogan}
        </p>
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
          <div>
            <dt className="text-teal-100/80">Lokasi</dt>
            <dd className="mt-0.5 font-semibold text-white">{lokasi}</dd>
          </div>
          <div>
            <dt className="text-teal-100/80">Jam buka</dt>
            <dd className="mt-0.5 font-semibold text-white">{jamBuka}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default Hero;