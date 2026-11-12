function About() {
const details = [
    {
    icon: "𑄝੭",
    label: "Name",
    value: "Vie",
    },
    {
    icon: "͙͘͡★",
    label: "Major",
    value: "Information Systems",
    },
    {
    icon: "𑣲𝄞",
    label: "Hobbies",
    value: "Dancing & Singing",
    },
    {
    icon: "𝜗ৎ",
    label: "Interest",
    value: "UI/UX Design",
    },
];

return (
    <section id="about"
    className="bg-white px-6 py-20 sm:py-24"
    >
    <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#bd7895]">
            A little introduction
        </p>

        <h2 className="mt-3 font-['Quicksand'] text-3xl font-bold text-[#65515b] sm:text-4xl">
            A Little About{" "}
            <span className="text-[#d98eac]">Me</span>
        </h2>

        <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#e9bdce]" />

        <p className="mx-auto mt-8 max-w-2xl text-sm text-[#806d76]">
            Hi, i'm Vie! An Information Systems student
            with a love for art, music, and creative design.
            I enjoy dancing, singing, and exploring UI/UX
            design to bring creative ideas to life.
        </p>
        </div>

        {/* Personal Details */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {details.map((item) => (
            <div
            key={item.label}
            className="group flex items-center gap-4 rounded-2xl border border-[#f0d9e2] bg-[#fff9fb] p-5 transition duration-300 hover:border-[#e5b1c5] hover:bg-[#fff5f8]"
            >
              {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fbe7ef] text-xl text-[#bd7895] transition duration-300 group-hover:bg-[#f5dce7]">
                {item.icon}
            </div>

              {/* Text */}
            <div>
                <p className="text-xs tracking-wide text-[#bd91a5]">
                {item.label}
                </p>

                <p className="mt-1 text-sm font-semibold text-[#65515b] sm:text-base">
                {item.value}
                </p>
            </div>
            </div>
        ))}
        </div>

        {/* Small Closing Text */}
        <div className="mt-10 text-center">
        <p className="text-xs tracking-wide text-[#bd91a5]">
            A little bit of art, a little bit of music, a little bit of me.
        </p>
        </div>

    </div>
    </section>
);
}

export default About;