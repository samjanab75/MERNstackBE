import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen bg-[#F5E6D3] text-[#3E2115]">

      <section className="text-center px-6 py-20">

        <p className="text-[#A65F32] font-semibold uppercase tracking-widest">
          Pure Cocoa Experience
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Discover the World of Dark Cocoa
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-lg">
          Explore the rich taste, nutritional qualities, benefits,
          advantages and considerations of dark cocoa.
        </p>

        <Link
          to="/services"
          className="inline-block mt-8 bg-[#3E2115] text-[#F5E6D3] px-7 py-3 rounded-full hover:bg-[#7A4A2E] transition"
        >
          Explore Cocoa Benefits
        </Link>

      </section>

    </main>
  );
}

export default Home;