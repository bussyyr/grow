// src/App.jsx
import { useState } from "react";
import heroImg from "./assets/hero-building.jpg";
import news1 from "./assets/news1.jpg";
import news2 from "./assets/news2.jpg";
import news3 from "./assets/news3.jpg";
import logo from "./assets/logo.png";

const countryOptions = [
  { value: "iceland", label: "Iceland" },
  { value: "germany", label: "Germany" },
  { value: "czech", label: "Czech Republic" },
];

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

const countryContext = {
  iceland:
    "In Iceland, harsh winds and cold temperatures make robust insulation and wind-resistant detailing especially important.",
  germany:
    "In Germany, efficiency standards and support schemes can strongly support high-performance envelopes and on-site renewables.",
  czech:
    "In Czechia, a mix of continental climate and existing building stock creates good potential for retrofit and PV integration.",
};

const newsItems = [
  {
    title: "Cities push for rooftop solar to cut CO₂ emissions",
    summary:
      "Several European cities are expanding incentives for solar installations on existing roofs to accelerate decarbonisation.",
    source: "Energy Today",
    img: news1,
  },
  {
    title: "Green roofs improve urban climate resilience",
    summary:
      "New studies show that green roofs help reduce heat islands and manage stormwater in dense city districts.",
    source: "Climate Insights",
    img: news2,
  },
  {
    title: "Home retrofits become key in reaching 2030 targets",
    summary:
      "Policy makers highlight building envelopes and unused spaces as a major lever for CO₂ savings in the residential sector.",
    source: "Sustainable Future",
    img: news3,
  },
];

function App() {
  const [country, setCountry] = useState("");
  const [spaceType, setSpaceType] = useState("");
  const [roofMaterial, setRoofMaterial] = useState("");
  const [roofShape, setRoofShape] = useState("");
  const [roofPitch, setRoofPitch] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!country || !spaceType || !roofMaterial || !roofShape || !roofPitch) {
      setResult("");
      setError("Please fill in all fields before sending.");
      return;
    }

    const readableCountry = countryOptions.find((o) => o.value === country)?.label;
    const readableSpace = spaceOptions.find((o) => o.value === spaceType)?.label;
    const readableMaterial = materialOptions.find(
      (o) => o.value === roofMaterial
    )?.label;
    const readableShape = shapeOptions.find((o) => o.value === roofShape)?.label;
    const readablePitch = pitchOptions.find((o) => o.value === roofPitch)?.label;

    const climateNote =
      countryContext[country] ??
      "Local climate and policy conditions will further shape the exact CO₂ savings potential.";

    const suggestion = `For your location in ${readableCountry}, based on your ${readableSpace?.toLowerCase()} with a ${readablePitch?.toLowerCase()} ${readableShape?.toLowerCase()} roof made of ${readableMaterial?.toLowerCase()}, there is likely a solid potential for CO₂ savings by combining envelope improvements and on-site renewable energy solutions. ${climateNote} A tailored concept could estimate your annual energy demand, possible PV yield and related CO₂ reductions for this specific configuration.`;

    setError("");
    setResult(suggestion);
  };

  const resetForm = () => {
    setCountry("");
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
    <div className={darkMode ? "dark" : ""}>
      {/* Dark/light background ana container */}
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
        {/* HERO SECTION */}
        <header className="relative h-screen w-full overflow-hidden">
          <img
            src={heroImg}
            alt="Building and rooftop"
            className="h-full w-full object-cover"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          <div className="absolute inset-0 flex flex-col">
            {/* Top bar – logo sağ üstte */}
            <div className="flex items-center justify-end px-6 md:px-10 pt-4">
              <img
                src={logo}
                alt="GROW logo"
                className="h-20 w-20 rounded-full bg-white/90 p-3 shadow-xl object-contain"
              />
            </div>

            {/* Hero content – center */}
            <div className="flex-1 flex items-center justify-center px-6 md:px-10 pb-24">
              <div className="max-w-3xl text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-xl mb-6">
                  Do you want to know how much CO₂ you could save?
                </h1>

                <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8">
                  Read further to find out!
                </p>

                <div className="flex flex-col items-center justify-center gap-3">
  <button
    type="button"
    onClick={scrollToForm}
    className="inline-flex items-center justify-center rounded-full 
               bg-gradient-to-r from-sky-400 via-emerald-400 to-teal-500 
               px-7 py-3 text-sm md:text-base font-semibold text-white 
               shadow-lg shadow-sky-500/40 hover:brightness-110 
               focus:outline-none focus:ring-2 focus:ring-sky-300"
  >
    Start configuration
  </button>

  <span className="text-xs md:text-sm text-white/80 max-w-xs text-center">
    Click to get your tailored suggestion.
  </span>
</div>

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
        <main className="bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300">
          {/* Dark mode toggle – content alanının sol üstü */}
<div className="px-6 md:px-10 lg:px-20 pt-6 flex justify-start">
  <button
    type="button"
    onClick={() => setDarkMode((prev) => !prev)}
    aria-label="Toggle dark mode"
    className={
      "relative flex items-center justify-center w-10 h-10 " +
      "rounded-full border border-slate-300 dark:border-slate-700 " +
      "bg-white/80 dark:bg-slate-900/80 shadow-sm hover:shadow-md " +
      "transition-colors duration-300 transform transition-transform " +
      "duration-500 " +
      (darkMode ? "rotate-180" : "rotate-0")
    }
  >
    <span className="sr-only">Toggle dark mode</span>

    {darkMode ? (
      // ☀️ GÜNEŞ – DARK MODE AÇIKKEN GÖRÜNÜR (Light’a geçeceğini gösteriyor)
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-amber-300"
      >
        <path d="M12 4.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-.5A.75.75 0 0 1 12 7V4.5Zm0 12.25a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM6.22 6.22a.75.75 0 0 0-1.06 0l-.35.35a.75.75 0 0 0 0 1.06l1.77 1.77a.75.75 0 1 0 1.06-1.06L6.22 6.22Zm.36 8.4-1.77 1.77a.75.75 0 0 0 0 1.06l.35.35a.75.75 0 0 0 1.06 0l1.77-1.77a.75.75 0 0 0-1.06-1.06ZM17.78 6.22l-1.77 1.77a.75.75 0 1 0 1.06 1.06l1.77-1.77a.75.75 0 0 0 0-1.06l-.35-.35a.75.75 0 0 0-1.06 0Zm-.36 8.4a.75.75 0 0 0-1.06 1.06l1.77 1.77a.75.75 0 0 0 1.06 0l.35-.35a.75.75 0 0 0 0-1.06l-1.77-1.77ZM4.5 12a.75.75 0 0 1 .75-.75H7a.75.75 0 0 1 0 1.5H5.25A.75.75 0 0 1 4.5 12Zm11.75 0a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z" />
      </svg>
    ) : (
      // 🌙 AY – LIGHT MODE AÇIKKEN GÖRÜNÜR (Dark’a geçeceğini gösteriyor)
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-slate-800"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    )}
  </button>
</div>



          {/* Welcome */}
          <section
            id="welcome"
            className="px-6 md:px-10 lg:px-20 pt-12 md:pt-16 pb-10"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">Welcome</h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-200 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vehicula, felis sed facilisis aliquam, magna justo viverra lorem,
                non consectetur justo felis sed urna. Duis finibus erat at ex
                molestie, nec tincidunt nibh placerat. Curabitur at metus vitae
                purus rhoncus mattis non nec erat.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-200">
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
                <p className="text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-200">
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

              <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 shadow-lg backdrop-blur-sm p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* country */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1 uppercase tracking-wide">
                      Country
                    </label>
                    <select
                      value={country}
                      onChange={(e) => {
                        setCountry(e.target.value);
                        setResult("");
                        setError("");
                      }}
                      className="block w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    >
                      <option value="">Select your country</option>
                      {countryOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* unused space */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1 uppercase tracking-wide">
                      What type of unused space do you have?
                    </label>
                    <select
                      value={spaceType}
                      onChange={(e) => {
                        setSpaceType(e.target.value);
                        setResult("");
                        setError("");
                      }}
                      className="block w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
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
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1 uppercase tracking-wide">
                      Roof material
                    </label>
                    <select
                      value={roofMaterial}
                      onChange={(e) => {
                        setRoofMaterial(e.target.value);
                        setResult("");
                        setError("");
                      }}
                      className="block w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
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
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1 uppercase tracking-wide">
                        Roof shape
                      </label>
                      <select
                        value={roofShape}
                        onChange={(e) => {
                          setRoofShape(e.target.value);
                          setResult("");
                          setError("");
                        }}
                        className="block w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
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
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1 uppercase tracking-wide">
                        Roof pitch
                      </label>
                      <select
                        value={roofPitch}
                        onChange={(e) => {
                          setRoofPitch(e.target.value);
                          setResult("");
                          setError("");
                        }}
                        className="block w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
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
                      disabled={
                        !country ||
                        !spaceType ||
                        !roofMaterial ||
                        !roofShape ||
                        !roofPitch
                      }
                    >
                      Send
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="text-sm md:text-base text-slate-500 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white"
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
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 dark:border-emerald-500/40 dark:bg-emerald-500/10 px-4 py-3">
                      <h3 className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 mb-1">
                        Your tailored suggestion
                      </h3>
                      <p className="text-sm text-emerald-900 dark:text-emerald-100 leading-relaxed">
                        {result}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* NEWS SECTION */}
          <section className="relative px-6 md:px-10 lg:px-20 pb-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Climate & energy news
              </h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-6">
                Stay up to date with developments that shape the context for your
                building&apos;s decarbonisation potential.
              </p>

              {/* Wrapper for scroll + arrows */}
              <div className="relative">
                {/* LEFT ARROW */}
                <button
                  onClick={() => {
                    const el = document.getElementById("news-scroll");
                    el.scrollBy({ left: -400, behavior: "smooth" });
                  }}
                  className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 
                   z-20 bg-white/80 dark:bg-slate-800/90 backdrop-blur-md shadow-lg 
                   rounded-full p-3 hover:bg-white dark:hover:bg-slate-700 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-slate-700 dark:text-slate-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.5L7.5 12L15 4.5"
                    />
                  </svg>
                </button>

                {/* RIGHT ARROW */}
                <button
                  onClick={() => {
                    const el = document.getElementById("news-scroll");
                    el.scrollBy({ left: 400, behavior: "smooth" });
                  }}
                  className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 
                   z-20 bg-white/80 dark:bg-slate-800/90 backdrop-blur-md shadow-lg 
                   rounded-full p-3 hover:bg-white dark:hover:bg-slate-700 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-slate-700 dark:text-slate-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 4.5L16.5 12L9 19.5"
                    />
                  </svg>
                </button>

                {/* SCROLLABLE NEWS CAROUSEL */}
                <div
                  id="news-scroll"
                  className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide scroll-smooth"
                >
                  {newsItems.map((item, idx) => (
                    <article
                      key={idx}
                      className="
                        snap-center
                        flex-shrink-0
                        w-[85%] md:w-[60%] lg:w-[50%]
                        rounded-3xl overflow-hidden shadow-xl 
                        bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700
                      "
                    >
                      {/* IMAGE */}
                      <div className="h-48 md:h-56 lg:h-64 w-full overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* TEXT */}
                      <div className="p-6 flex flex-col justify-between h-[240px] md:h-[220px]">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            {item.summary}
                          </p>
                        </div>

                        <p className="text-[11px] uppercase tracking-wide text-slate-400 dark:text-slate-500 mt-4">
                          {item.source}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
