// src/App.jsx
import { useState } from "react";
import { suggestionData } from "./data";
import heroImg from "./assets/hero-building.jpeg";

const countryOptions = [
  { value: "germany", label: "Germany" },
  { value: "iceland", label: "Iceland" },
  { value: "czech", label: "Czech" },
];

const roofOptions = [
  { value: "flat", label: "Flat roof" },
  { value: "pitched", label: "Pitched roof" },
];

const wallOptions = [
  { value: "brick", label: "Brick wall" },
  { value: "wood", label: "Wood wall" },
];

function App() {
  const [country, setCountry] = useState("");
  const [roofType, setRoofType] = useState("");
  const [wallType, setWallType] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!country || !roofType || !wallType) {
      setResult("");
      setError("Please select country, roof type and wall type.");
      return;
    }

    const suggestion =
      suggestionData[country]?.[roofType]?.[wallType] ??
      "No suggestion found for this combination in the data.";

    setError("");
    setResult(suggestion);
  };

  const resetSelections = () => {
    setCountry("");
    setRoofType("");
    setWallType("");
    setResult("");
    setError("");
  };

  const scrollToForm = () => {
    const el = document.getElementById("configurator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToIntro = () => {
    const el = document.getElementById("intro");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO SECTION */}
      <header className="relative h-[70vh] w-full overflow-hidden">
        <img
  src={heroImg}
  alt="Building and rooftop"
  className="h-full w-full object-cover"
/>


        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-between">
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 md:px-10 pt-4">
            <span className="text-sm font-semibold tracking-wide text-white/90 uppercase">
              GROW
            </span>
            <span className="text-xs md:text-sm text-white/80">
              Iceland · Germany · Czechia
            </span>
          </div>

          {/* Hero content */}
          <div className="px-6 md:px-10 pb-20 max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow mb-4">
              Plan your rooftop & wall combination with confidence.
            </h1>
            <p className="text-sm md:text-base text-white/85 max-w-xl mb-6">
              Explore typical envelopes for different climates and get a quick
              qualitative suggestion for energy performance, moisture and
              structural behaviour.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm md:text-base font-semibold text-slate-900 shadow-md hover:bg-slate-100"
              >
                Start configuration
              </button>
              <span className="text-xs md:text-sm text-white/80">
                Scroll to discover more details & the form
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator arrow */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <button
            type="button"
            onClick={scrollToIntro}
            className="flex flex-col items-center text-white/80 hover:text-white focus:outline-none"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase mb-1">
              Scroll
            </span>
            <span className="animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25L12 15.75L4.5 8.25"
                />
              </svg>
            </span>
          </button>
        </div>
      </header>

      {/* CONTENT SECTIONS */}
      <main className="bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100">
        {/* How it works */}
        <section
          id="intro"
          className="px-6 md:px-10 lg:px-20 pt-12 md:pt-16 pb-8"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              How this tool works
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-8">
              The configurator combines three simple inputs – country, roof
              type and wall type – and returns a text-based suggestion. It
              doesn&apos;t calculate exact U-values or structural loads, but it
              gives a quick sense of what to watch out for in different
              climates.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-semibold mb-2 text-slate-800">
                  1 · Choose your context
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Start by selecting Iceland, Germany or Czechia to reflect the
                  climatic and regulatory environment.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-semibold mb-2 text-slate-800">
                  2 · Define roof & wall
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Pick a roof type and wall type to represent your envelope
                  concept at a high level.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-semibold mb-2 text-slate-800">
                  3 · Read the suggestion
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  The tool generates a short explanation highlighting PV
                  potential, insulation and durability aspects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Long text */}
        <section className="px-6 md:px-10 lg:px-20 pb-10 md:pb-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              About this configurator
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-3">
              This simple tool helps you explore different building envelope
              configurations for three countries: Iceland, Germany and Czechia.
              By combining country, roof type and wall type, you get a short
              qualitative suggestion that focuses on aspects like insulation, PV
              feasibility, wind loads and moisture protection.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-3">
              In a real project, this could be extended with more detailed
              parameters, like U-values, cost estimates, structural constraints
              and climate-specific design guidelines. For now, it&apos;s a
              lightweight way to compare a few typical combinations and see
              which ones might make more sense for your use case.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-slate-700">
              Scroll further down to use the form. After selecting your inputs,
              you&apos;ll get a text suggestion that you can refine or replace
              with your own engineering logic later on.
            </p>
          </div>
        </section>

        {/* FORM SECTION */}
        <section
          id="configurator"
          className="px-6 md:px-10 lg:px-20 pb-16 md:pb-20"
        >
          <div className="max-w-2xl mx-auto">
            <div className="mb-6 text-center">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                Configuration form
              </h2>
              <p className="text-sm md:text-base text-slate-500">
                Choose a country, roof type and wall type, then click{" "}
                <span className="font-medium">Show suggestion</span>.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/90 shadow-lg backdrop-blur-sm p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Top grid */}
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Country */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                      Country
                    </label>
                    <select
                      value={country}
                      onChange={(e) => {
                        setCountry(e.target.value);
                        setResult("");
                        setError("");
                      }}
                      className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    >
                      <option value="">Select a country</option>
                      {countryOptions.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Roof type */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                      Roof type
                    </label>
                    <select
                      value={roofType}
                      onChange={(e) => {
                        setRoofType(e.target.value);
                        setResult("");
                        setError("");
                      }}
                      disabled={!country}
                      className={`block w-full rounded-xl border px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 ${
                        !country
                          ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
                          : "bg-white border-slate-300"
                      }`}
                    >
                      <option value="">Select a roof type</option>
                      {roofOptions.map((r) => (
                        <option key={r.value} value={r.value}>
                          {r.label}
                        </option>
                      ))}
                    </select>
                    {!country && (
                      <p className="mt-1 text-xs text-slate-400">
                        Select a country first.
                      </p>
                    )}
                  </div>

                  {/* Wall type */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                      Wall type
                    </label>
                    <select
                      value={wallType}
                      onChange={(e) => {
                        setWallType(e.target.value);
                        setResult("");
                        setError("");
                      }}
                      disabled={!roofType}
                      className={`block w-full rounded-xl border px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 ${
                        !roofType
                          ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
                          : "bg-white border-slate-300"
                      }`}
                    >
                      <option value="">Select a wall type</option>
                      {wallOptions.map((w) => (
                        <option key={w.value} value={w.value}>
                          {w.label}
                        </option>
                      ))}
                    </select>
                    {!roofType && (
                      <p className="mt-1 text-xs text-slate-400">
                        Select a roof type first.
                      </p>
                    )}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-2.5 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1 disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={!country || !roofType || !wallType}
                  >
                    Show suggestion
                  </button>
                  <button
                    type="button"
                    onClick={resetSelections}
                    className="text-sm md:text-base text-slate-500 hover:text-slate-700"
                  >
                    Reset
                  </button>
                </div>
              </form>

              {/* Error / Result */}
              <div className="mt-6 space-y-3">
                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </div>
                )}

                {result && !error && (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                    <h3 className="text-sm font-semibold text-emerald-800 mb-1">
                      Suggestion
                    </h3>
                    <p className="text-sm text-emerald-900 leading-relaxed">
                      {result}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* small footer */}
            <p className="mt-6 text-center text-xs text-slate-400">
              Demo tool – replace the text logic with your own engineering
              model later.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
