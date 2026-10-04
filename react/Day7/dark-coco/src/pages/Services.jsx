function Services() {
  return (
    <main className="min-h-screen bg-[#F5E6D3] text-[#3E2115] px-6 py-16">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center">

          <p className="text-[#A65F32] font-semibold uppercase tracking-widest">
            Cocoa Knowledge
          </p>

          <h1 className="text-4xl font-bold mt-3">
            Dark Cocoa Benefits
          </h1>

          <p className="max-w-2xl mx-auto mt-4">
            Dark cocoa can be part of a balanced diet when enjoyed
            in suitable portions and when the product's sugar content
            is considered.
          </p>

        </div>


        {/* Benefits Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {/* Card 1 */}

          <div className="bg-white p-7 rounded-2xl shadow-md hover:-translate-y-2 transition">

            <div className="text-4xl">
              🍫
            </div>

            <h2 className="text-2xl font-bold mt-4">
              Cocoa Flavanols
            </h2>

            <p className="mt-4">
              Cocoa naturally contains flavanols, plant compounds
              that are being studied for their potential health effects.
            </p>

          </div>


          {/* Card 2 */}

          <div className="bg-white p-7 rounded-2xl shadow-md hover:-translate-y-2 transition">

            <div className="text-4xl">
              🌰
            </div>

            <h2 className="text-2xl font-bold mt-4">
              Natural Minerals
            </h2>

            <p className="mt-4">
              Cocoa provides minerals including magnesium, iron
              and copper.
            </p>

          </div>


          {/* Card 3 */}

          <div className="bg-white p-7 rounded-2xl shadow-md hover:-translate-y-2 transition">

            <div className="text-4xl">
              ❤️
            </div>

            <h2 className="text-2xl font-bold mt-4">
              Enjoy Responsibly
            </h2>

            <p className="mt-4">
              Dark chocolate can be enjoyed in moderation as part
              of a balanced eating pattern.
            </p>

          </div>

        </div>


        {/* Advantages */}

        <section className="mt-16">

          <h2 className="text-3xl font-bold text-center">
            Advantages of Dark Cocoa
          </h2>

          <div className="mt-8 bg-[#7A4A2E] text-[#F5E6D3] p-8 rounded-2xl">

            <ul className="space-y-4 list-disc list-inside">

              <li>
                Rich and intense chocolate flavor.
              </li>

              <li>
                Contains naturally occurring cocoa compounds.
              </li>

              <li>
                Provides minerals such as magnesium, iron and copper.
              </li>

              <li>
                Can be enjoyed in small portions as part of a balanced diet.
              </li>

            </ul>

          </div>

        </section>


        {/* Disadvantages */}

        <section className="mt-16">

          <h2 className="text-3xl font-bold text-center">
            Possible Disadvantages
          </h2>

          <div className="mt-8 bg-[#3E2115] text-[#F5E6D3] p-8 rounded-2xl">

            <ul className="space-y-4 list-disc list-inside">

              <li>
                Some products contain significant added sugar.
              </li>

              <li>
                Chocolate can be calorie-dense, so portion size matters.
              </li>

              <li>
                Cocoa naturally contains caffeine and theobromine.
              </li>

              <li>
                Some people may be sensitive to caffeine or chocolate.
              </li>

            </ul>

          </div>

        </section>

      </div>

    </main>
  );
}

export default Services;