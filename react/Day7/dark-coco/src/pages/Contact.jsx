import { Link } from "react-router-dom";

function Contact() {
  return (
    <main className="min-h-screen bg-[#F5E6D3] text-[#3E2115] px-6 py-16">

      <div className="max-w-2xl mx-auto text-center">

        <p className="text-[#A65F32] font-semibold uppercase tracking-widest">
          Get In Touch
        </p>

        <h1 className="text-4xl font-bold mt-3">
          Contact Dark Cocoa
        </h1>

        <p className="mt-6 text-lg">
          Have questions about cocoa, chocolate or our website?
          We would love to hear from you.
        </p>

        <div className="bg-white mt-10 p-8 rounded-2xl shadow-md">

          <h2 className="text-2xl font-bold">
            Contact Information
          </h2>

          <p className="mt-4">
            hello@darkcocoa.com
          </p>

          <p className="mt-2">
            Tamil Nadu, India
          </p>

        </div>

        <Link
          to="/"
          className="inline-block mt-8 bg-[#3E2115] text-[#F5E6D3] px-6 py-3 rounded-full hover:bg-[#7A4A2E] transition"
        >
          Back to Home
        </Link>

      </div>

    </main>
  );
}

export default Contact;