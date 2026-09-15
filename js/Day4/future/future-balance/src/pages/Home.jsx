function Home() {
  return (
    <main className="bg-[#f4e9d8]">

      <section className="mx-auto max-w-7xl px-6 py-24">

        <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-[#2a9d8f]">
          AI • WORK • HUMANITY
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight text-[#063b4c] md:text-7xl">
          The future is changing.
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-[#6a994e] md:text-5xl">
          Are we ready?
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5a5a5a]">
          Artificial intelligence is changing how people learn,
          work and build technology. FutureBalance helps us
          understand these changes without fear and prepare
          for a changing world.
        </p>

      </section>


      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-3">

        <div className="rounded-3xl bg-[#063b4c] p-8 text-white">

          <span className="text-sm text-[#ffe8a3]">
            01
          </span>

          <h3 className="mt-4 text-2xl font-bold">
            Understand AI
          </h3>

          <p className="mt-4 leading-7 text-white/80">
            Learn what artificial intelligence is,
            what it can do and where humans are still needed.
          </p>

        </div>


        <div className="rounded-3xl bg-[#2a9d8f] p-8 text-white">

          <span className="text-sm text-[#ffe8a3]">
            02
          </span>

          <h3 className="mt-4 text-2xl font-bold">
            Understand Work
          </h3>

          <p className="mt-4 leading-7 text-white/80">
            Explore how automation and AI can change
            industries and careers.
          </p>

        </div>


        <div className="rounded-3xl bg-[#f4c430] p-8 text-[#063b4c]">

          <span className="text-sm">
            03
          </span>

          <h3 className="mt-4 text-2xl font-bold">
            Prepare People
          </h3>

          <p className="mt-4 leading-7">
            Build skills, adaptability and a balanced
            mindset for the future.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Home;