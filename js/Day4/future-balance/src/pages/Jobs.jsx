import {
  AlertTriangle,
  Brain,
  CheckCircle2,
  Code2,
  Heart,
  ShieldCheck,
  Users,
} from "lucide-react";

function Jobs() {
  return (
    <main className="min-h-screen bg-[#f4e9d8]">

      {/* HERO */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <p className="font-semibold uppercase tracking-[0.25em] text-[#2a9d8f]">
            AI • JOBS • HUMANITY
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-bold leading-tight text-[#063b4c] md:text-7xl">
            When technology changes,
            <span className="text-[#6a994e]"> work changes.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5a5a5a]">
            AI is changing the way people work. But technology should
            support people — not replace human value.
          </p>

        </div>
      </section>

      {/* VALID DATA */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-4xl font-bold text-[#063b4c]">
            What the evidence tells us
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {/* ILO */}
            <div className="rounded-3xl bg-[#063b4c] p-7 text-white">

              <Brain className="h-9 w-9 text-[#ffe8a3]" />

              <p className="mt-5 text-5xl font-bold">
                1 in 4
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Workers
              </h3>

              <p className="mt-3 leading-7 text-white/75">
                The ILO estimates that one in four workers globally
                are in occupations with some exposure to Generative AI.
              </p>

              <p className="mt-4 text-sm text-[#ffe8a3]">
                ILO, 2025
              </p>

            </div>

            {/* TRANSFORMATION */}
            <div className="rounded-3xl bg-[#2a9d8f] p-7 text-white">

              <Users className="h-9 w-9 text-[#ffe8a3]" />

              <h3 className="mt-5 text-2xl font-bold">
                Jobs can change
              </h3>

              <p className="mt-3 leading-7 text-white/80">
                AI exposure does not automatically mean the entire job
                will disappear. Many jobs are more likely to be transformed.
              </p>

            </div>

            {/* HUMAN */}
            <div className="rounded-3xl bg-[#f4c430] p-7 text-[#063b4c]">

              <Heart className="h-9 w-9" />

              <h3 className="mt-5 text-2xl font-bold">
                Humans matter
              </h3>

              <p className="mt-3 leading-7 text-[#063b4c]/80">
                Human judgement, responsibility, communication and
                understanding remain important.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* HUMAN VS AI */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-2">

            {/* HUMAN */}
            <div className="rounded-3xl bg-[#063b4c] p-8 text-white">

              <CheckCircle2 className="h-9 w-9 text-[#ffe8a3]" />

              <h2 className="mt-5 text-3xl font-bold">
                What humans bring
              </h2>

              <ul className="mt-6 space-y-4 text-white/80">
                <li>• Critical thinking</li>
                <li>• Creativity</li>
                <li>• Problem solving</li>
                <li>• Communication</li>
                <li>• Empathy</li>
                <li>• Responsibility</li>
              </ul>

            </div>

            {/* RISKS */}
            <div className="rounded-3xl bg-white p-8">

              <AlertTriangle className="h-9 w-9 text-[#c0392b]" />

              <h2 className="mt-5 text-3xl font-bold text-[#063b4c]">
                Why human control matters
              </h2>

              <ul className="mt-6 space-y-4 text-[#5a5a5a]">
                <li>• AI can produce incorrect information.</li>
                <li>• AI systems can contain bias.</li>
                <li>• AI can create privacy risks.</li>
                <li>• Important decisions need human oversight.</li>
              </ul>

            </div>

          </div>

        </div>
      </section>

      {/* DEVELOPERS */}
      <section className="bg-[#063b4c] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">

          <Code2 className="h-10 w-10 text-[#ffe8a3]" />

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            The future developer should use AI —
            <span className="text-[#ffe8a3]"> not depend on it.</span>
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-white/75">
            Developers should understand programming fundamentals,
            review AI-generated code, test it and take responsibility
            for the final software.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Understand",
              "Create",
              "Review",
              "Test",
              "Verify",
              "Take Responsibility",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold"
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL MESSAGE */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#2a9d8f] p-10 text-center text-white md:p-14">

          <ShieldCheck className="mx-auto h-12 w-12 text-[#ffe8a3]" />

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Technology should serve humans.
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/85">
            Use technology to improve human life while protecting
            human dignity, judgement, creativity and responsibility.
          </p>

          <p className="mt-7 text-2xl font-bold text-[#ffe8a3]">
            Learn AI. Use AI. But stay human.
          </p>

        </div>
      </section>

      {/* SOURCES */}
      <footer className="bg-[#063b4c] px-6 py-8 text-white">
        <div className="mx-auto max-w-7xl">

          <h3 className="font-bold">
            Sources
          </h3>

          <p className="mt-3 text-sm text-white/60">
            ILO — Generative AI and Jobs, 2025
          </p>

          <p className="text-sm text-white/60">
            UNESCO — Recommendation on the Ethics of Artificial Intelligence
          </p>

          <p className="text-sm text-white/60">
            WHO — Ethics and Governance of Artificial Intelligence
          </p>

        </div>
      </footer>

    </main>
  );
}

export default Jobs;