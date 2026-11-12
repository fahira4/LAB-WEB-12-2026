function Skills() {
return (
    <section
    id="skills"
    className="bg-[#fff6f9] px-6 py-20 md:px-12 md:py-24"
    >
    <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#bd7895]">
            Things I love </p>

        <h2 className="mt-3 font-['Quicksand'] text-3xl font-bold text-[#65515b] sm:text-4xl">
            My <span className="text-[#d98eac]">Passions</span>
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#806d76] sm:text-base">
            A little space for the things that make me happy.
        </p>

        <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#e9bdce]" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">

          {/* Traditional Dance */}
        <article className="group overflow-hidden rounded-3xl border border-[#f0dce5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(150,95,120,0.09)]">

            <div className="overflow-hidden bg-[#f8edf2]">
            <img
                src="/images/dance.jpeg"
                alt="Traditional dance"
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
            />
            </div>

            <div className="p-6">
            <p className="text-xs  text-[#c77999]">
                01 / MOVEMENT
            </p>

            <h3 className="mt-4 font-['Quicksand'] text-xl font-bold text-[#694f5d]">
                Traditional Dance
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#887582]">
                Expressing stories, culture, and emotions through
                the beauty of traditional dance.
            </p>

            <div className="mt-6 h-px bg-[#f3e5eb]" />  {/* grs */}

            <p className="mt-4 text-xs text-[#bd91a5]">
                A way to express myself.
            </p>
            </div>
        </article>

          {/* Singing */}
        <article className="overflow-hidden rounded-3xl border border-[#f0dce5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(150,95,120,0.09)]">

            <div className="flex h-60 flex-col items-center justify-center bg-[#fbeef3] px-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#edccda] bg-white text-3xl text-[#c77999]">
                ♫ </div>

            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-[#bd7895]">
                Little Cover Sessions </p>

            <p className="mt-2 text-sm text-[#887582]">
                Songs, in my own voice.</p>
            </div>

            <div className="p-6">
            <p className="text-xs tracking-[0.2em] text-[#c77999]">
                02 / MUSIC </p>

            <h3 className="mt-4 font-['Quicksand'] text-xl font-bold text-[#694f5d]">
                Singing </h3>

            <p className="mt-3 text-sm  text-[#887582]">
                Finding joy and expressing myself through music.</p>

              {/* First Audio */}
            <div className="mt-6 rounded-2xl border border-[#f0dce5] bg-[#fff9fb] p-4">
                <div className="mb-3">
                <h4 className="text-sm font-semibold text-[#694f5d]">
                    Next2u</h4>

                <p className="mt-1 text-xs text-[#b38b9c]">
                    My cover</p>
                </div>

                <audio
                controls
                preload="metadata"
                className="w-full"
                >
                <source
                    src="/audio/next2u.mp3"
                    type="audio/mpeg"
                />
                Your browser does not support audio playback.
                </audio>
            </div>

              {/* Second Audio */}
            <div className="mt-3 rounded-2xl border border-[#f0dce5] bg-[#fff9fb] p-4">
                <div className="mb-3">
                <h4 className="text-sm font-semibold text-[#694f5d]">
                    Summer Eyes</h4>

                <p className="mt-1 text-xs text-[#b38b9c]">
                    My cover</p>
                </div>

                <audio
                controls
                preload="metadata"
                className="w-full"
                >
                <source
                    src="/audio/summereyes.mp3"
                    type="audio/mpeg"
                    
                    />
                Your browser does not support audio playback.
                </audio>
            </div>
            </div>
        </article>

          {/* UI/UX Design */}
        <article className="group overflow-hidden rounded-3xl border border-[#f0dce5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(150,95,120,0.09)]">

            <div className="flex h-60 items-center justify-center overflow-hidden bg-[#f8edf2] p-4">
            <img
                src="/images/uiux.png"
                alt="UI/UX design project"
                className="max-h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                loading="lazy"
            />
            </div>

            <div className="p-6">
            <p className="text-xs tracking-[0.2em] text-[#c77999]">
                03 / CREATIVITY</p>

            <h3 className="mt-4 font-['Quicksand'] text-xl font-bold text-[#694f5d]">
                UI/UX Design</h3>

            <p className="mt-3 text-sm leading-7 text-[#887582]">
                Exploring layouts, colors, and user experiences
                to turn ideas into thoughtful digital designs.</p>

            <div className="mt-6 h-px bg-[#f3e5eb]" />

            <p className="mt-4 text-xs tracking-wide text-[#bd91a5]">
                Design with intention. </p>
            </div>
        </article>

        </div>

        <div className="mt-12 text-center">
        <p className="text-xs tracking-[0.18em] text-[#bd91a5]">
            MOVEMENT · MUSIC · CREATIVITY
        </p>
        </div>

    </div>
    </section>
);
}

export default Skills;