function Skills() {
  const keahlian = [
    "HTML & CSS",
    "JavaScript",
    "Pemrograman Python",
    "Pemrograman Java",
    "UI/UX Design",
    "PostgreSQL",
  ];

  return (
    <section
      id="skills"
      className="border-y-2 border-tinta bg-white/80 px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="inline-block bg-[linear-gradient(transparent_62%,var(--color-stabilo)_62%)] font-judul text-3xl font-bold text-tinta sm:text-4xl">
          Keahlian
        </h2>
        <h3 className="mt-3 text-lg font-semibold text-tinta/75">
          Beberapa keahlian yang sedang saya pelajari dalam pengembangan web.
        </h3>
        <ul className="m-0 mt-10 grid list-none grid-cols-2 gap-5 p-0 sm:grid-cols-3">
          {keahlian.map((skill, index) => (
            <li
              key={index}
              className="rounded-lg border-2 border-tinta bg-white px-4 py-5 text-center font-semibold text-tinta shadow-[4px_4px_0_var(--color-tinta)] transition hover:-translate-y-1 hover:bg-stabilo"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;