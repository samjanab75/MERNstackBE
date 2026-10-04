function About() {
  return (
    <main className="min-h-screen bg-[#F5E6D3] text-[#3E2115] px-6 py-16">

      <div className="max-w-4xl mx-auto">

        <p className="text-[#A65F32] font-semibold uppercase tracking-widest">
          About Our Cocoa
        </p>

        <h1 className="text-4xl font-bold mt-3">
          What Is Dark Cocoa?
        </h1>

        <p className="mt-6 text-lg leading-8">
          Dark cocoa comes from cacao beans and is known for its
          deep, rich and slightly bitter chocolate flavor.
        </p>

        <p className="mt-5 leading-8">
          Cocoa contains naturally occurring plant compounds called
          flavanols. It also provides minerals such as magnesium,
          iron and copper.
        </p>

        <div className="mt-10 bg-white p-8 rounded-2xl shadow-md">

          <h2 className="text-2xl font-bold">
            Why Choose Dark Chocolate?
          </h2>

          <p className="mt-4 leading-7">
            Chocolate with a higher percentage of cocoa generally
            provides a stronger cocoa flavor. However, the nutritional
            profile varies between products, especially depending on
            added sugar and serving size.
          </p>

        </div>

      </div>

    </main>
  );
}

export default About;