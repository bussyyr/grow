// src/App.jsx
import { useState } from "react";
import heroImg from "./assets/hero-building.jpeg";

const spaceOptions = [
  { value: "roof", label: "Roof" },
  { value: "balcony", label: "Balcony" },
  { value: "terrace", label: "Terrace" },
  { value: "yard", label: "Yard" },
  { value: "basement", label: "Basement" },
];

const materialOptions = [
  { value: "asphalt_shingles", label: "Asphalt shingles" },
  { value: "metal", label: "Metal" },
  { value: "clay_tiles", label: "Clay tiles" },
  { value: "concrete_tiles", label: "Concrete tiles" },
];

const shapeOptions = [
  { value: "gable", label: "Gable" },
  { value: "flat", label: "Flat" },
  { value: "shed", label: "Shed" },
  { value: "pyramid", label: "Pyramid" },
];

const pitchOptions = [
  { value: "low", label: "Low" },
  { value: "conventional", label: "Conventional" },
  { value: "steep", label: "Steep" },
];

const newsItems = [
  {
    title: "Cities push for rooftop solar to cut CO₂ emissions",
    summary:
      "Several European cities are expanding incentives for solar installations on existing roofs to accelerate decarbonisation.",
    source: "Energy Today",
  },
  {
    title: "Green roofs improve urban climate resilience",
    summary:
      "New studies show that green roofs help reduce heat islands and manage stormwater in dense city districts.",
    source: "Climate Insights",
  },
  {
    title: "Home retrofits become key in reaching 2030 targets",
    summary:
      "Policy makers highlight building envelopes and unused spaces as a major lever for CO₂ savings in the residential sector.",
    source: "Sustainable Future",
  },
];

function App() {
  const [spaceType, setSpaceType] = useState("");
  const [roofMaterial, setRoofMaterial] = useState("");
  const [roofShape, setRoofShape] = useState("");
  const [roofPitch, setRoofPitch] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!spaceType || !roofMaterial || !roofShape || !roofPitch) {
      setResult("");
      setError("Please fill in all fields before sending.");
      return;
    }

    const readableSpace = spaceOptions.find((o) => o.value === spaceType)?.label;
    const readableMaterial = materialOptions.find(
      (o) => o.value === roofMaterial
    )?.label;
    const readableShape = shapeOptions.find((o) => o.value === roofShape)?.label;
    const readablePitch = pitchOptions.find((o) => o.value === roofPitch)?.label;

    const suggestion = `Based on your ${readableSpace?.toLowerCase()} with a ${readablePitch?.toLowerCase()} ${readableShape?.toLowerCase()} roof made of ${readableMaterial?.toLowerCase()}, there is likely a solid potential for CO₂ savings by combining better insulation and on-site renewable energy solutions. A tailored concept could estimate your annual energy demand, possible PV yield and related CO₂ reductions for this specific configuration.`;

    setError("");
    setResult(suggestion);
  };

  const resetForm = () => {
    setSpaceType("");
    setRoofMaterial("");
    setRoofShape("");
    setRoofPitch("");
    setResult("");
    setError("");
  };

  const scrollToForm = () => {
    const el = document.getElementById("configurator");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWelcome = () => {
    const el = document.getElementById("welcome");
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
          </div>

          {/* Hero content */}
          <div className="px-6 md:px-10 pb-20 max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow mb-4">
              Do you want to know how much CO₂ you could save?
            </h1>
            <p className="text-sm md:text-base text-white/85 max-w-xl mb-6">
              Read further to find out!
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
                Scroll to explore more details and get your tailored suggestion.
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator arrow */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <button
            type="button"
            onClick={scrollToWelcome}
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
        {/* Welcome */}
        <section
          id="welcome"
          className="px-6 md:px-10 lg:px-20 pt-12 md:pt-16 pb-10"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">Welcome</h2>
            <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vehicula, felis sed facilisis aliquam, magna justo viverra lorem,
              non consectetur justo felis sed urna. Duis finibus erat at ex
              molestie, nec tincidunt nibh placerat. Curabitur at metus vitae
              purus rhoncus mattis non nec erat.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-slate-700">
              Phasellus commodo, justo eget rhoncus malesuada, lorem odio
              volutpat magna, at hendrerit justo mi vitae est. Vivamus
              malesuada, nibh ac malesuada pellentesque, enim elit iaculis
              metus, in fermentum magna mauris non augue. Morbi tempor, leo non
              egestas bibendum, velit urna tempus sapien, at tristique ipsum
              lectus vitae lacus.
            </p>
          </div>
        </section>

        {/* FORM SECTION */}
        <section
          id="configurator"
          className="px-6 md:px-10 lg:px-20 pb-16 md:pb-20"
        >
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                Personal recommendation configurator
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-700">
                Please fill out this form and we tailor a personal recommendation
                suitable for you:
                <br />
                <br />
                Type of your roof is an essential component that plays a
                significant role. The roof protects the building from harsh
                weather conditions, enhances its aesthetic appeal, and provides
                insulation to keep the interior comfortable. There are various
                types of roofs, each with its unique features and benefits. To
                be able to recommend you the most suitable solution, please fill
                in the following:
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/90 shadow-lg backdrop-blur-sm p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* unused space */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                    What type of unused space do you have?
                  </label>
                  <select
                    value={spaceType}
                    onChange={(e) => {
                      setSpaceType(e.target.value);
                      setResult("");
                      setError("");
                    }}
                    className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  >
                    <option value="">Select a type of space</option>
                    {spaceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* roof material */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                    Roof material
                  </label>
                  <select
                    value={roofMaterial}
                    onChange={(e) => {
                      setRoofMaterial(e.target.value);
                      setResult("");
                      setError("");
                    }}
                    className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  >
                    <option value="">Select roof material</option>
                    {materialOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* roof shape + pitch */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                      Roof shape
                    </label>
                    <select
                      value={roofShape}
                      onChange={(e) => {
                        setRoofShape(e.target.value);
                        setResult("");
                        setError("");
                      }}
                      className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    >
                      <option value="">Select roof shape</option>
                      {shapeOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                      Roof pitch
                    </label>
                    <select
                      value={roofPitch}
                      onChange={(e) => {
                        setRoofPitch(e.target.value);
                        setResult("");
                        setError("");
                      }}
                      className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    >
                      <option value="">Select roof pitch</option>
                      {pitchOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-2.5 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1 disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={!spaceType || !roofMaterial || !roofShape || !roofPitch}
                  >
                    Send
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
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
                      Your tailored suggestion
                    </h3>
                    <p className="text-sm text-emerald-900 leading-relaxed">
                      {result}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* NEWS SECTION */}
        <section className="px-6 md:px-10 lg:px-20 pb-16 md:pb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Climate & energy news
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-6">
              Stay up to date with developments that shape the context for your
              building&apos;s decarbonisation potential.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {newsItems.map((item, idx) => (
                <article
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mb-3">
                      {item.summary}
                    </p>
                  </div>
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">
                    {item.source}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
