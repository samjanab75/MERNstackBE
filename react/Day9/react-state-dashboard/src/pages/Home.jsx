import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-[calc(100vh-72px)]
    bg-[#12051a]
    relative overflow-hidden">

      {/* Background glow */}
      <div
        className="absolute
        -top-32
        -left-32
        w-96
        h-96
        bg-[#6d1b7b]/30
        blur-3xl
        rounded-full"
      />

      <div
        className="absolute
        -bottom-32
        -right-32
        w-96
        h-96
        bg-[#a13bb5]/20
        blur-3xl
        rounded-full"
      />

      <div
        className="relative
        max-w-6xl
        mx-auto
        px-5
        sm:px-8
        py-20
        lg:py-28"
      >

        <div className="max-w-3xl">

          <div
            className="inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-[#2b1037]
            border
            border-[#71317f]
            text-[#e1b7e9]
            text-sm
            mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#c34ed5]" />
            React + Tailwind + JavaScript
          </div>

          <h1
            className="text-4xl
            sm:text-5xl
            lg:text-7xl
            font-black
            leading-tight
            text-white"
          >
            Interactive
            <span className="block text-[#c34ed5]">
              React State Lab
            </span>
          </h1>

          <p
            className="mt-6
            text-base
            sm:text-lg
            text-[#bd91c8]
            max-w-2xl
            leading-relaxed"
          >
            Practice state, events, conditional rendering and
            controlled inputs through real interactive components.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <Link
              to="/practice"
              className="text-center
              px-7 py-3.5
              rounded-xl
              bg-[#6d1b7b]
              hover:bg-[#8e2ca0]
              text-white
              font-semibold
              shadow-lg
              shadow-purple-950/40
              transition"
            >
              Open Practice Lab
            </Link>

            <div
              className="px-7 py-3.5
              rounded-xl
              border border-[#572061]
              text-[#d0a5da]
              text-center"
            >
              5 Interactive Components
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Home;