// import Navbar from "./Navbar";

function AboutHero({children}) {
  return (
    <section className="relative h-[280px] w-[100%] overflow-hidden bg-[#effcff]">

      {/* =========================
          GEOMETRIC BACKGROUND
          ========================= */}

      {/* Large white diagonal shape - left */}
      <div
        className="
          absolute
          -left-[120px]
          -top-[100px]
          h-[500px]
          w-[300px]
          rotate-[18deg]
          bg-white/40
        "
      />

      {/* Large white diagonal shape - center-left */}
      <div
        className="
          absolute
          left-[18%]
          -top-[140px]
          h-[550px]
          w-[230px]
          rotate-[18deg]
          bg-white/35
        "
      />

      {/* Faint blue diagonal shape - center */}
      <div
        className="
          absolute
          left-[38%]
          -top-[120px]
          h-[500px]
          w-[220px]
          rotate-[18deg]
          bg-cyan-100/30
        "
      />

      {/* White diagonal shape - center-right */}
      <div
        className="
          absolute
          left-[55%]
          -top-[130px]
          h-[550px]
          w-[240px]
          rotate-[18deg]
          bg-white/30
        "
      />

      {/* Faint shape - right */}
      <div
        className="
          absolute
          right-[5%]
          -top-[150px]
          h-[500px]
          w-[180px]
          rotate-[18deg]
          bg-cyan-100/30
        "
      />


      {/* =========================
          DECORATIVE DOTS
          ========================= */}

      {/* Left green dot */}
      <div
        className="
          absolute
          left-[4%]
          top-[48%]
          h-2
          w-2
          rounded-full
          bg-emerald-400
        "
      />

      {/* Left blue dot */}
      <div
        className="
          absolute
          left-[9%]
          top-[72%]
          h-2
          w-2
          rounded-full
          bg-sky-300
        "
      />

      {/* Left purple dot */}
      <div
        className="
          absolute
          left-[10%]
          top-[40%]
          h-1
          w-1
          rounded-full
          bg-purple-400
        "
      />

      {/* Left dark blue dot */}
      <div
        className="
          absolute
          left-[11%]
          top-[58%]
          h-1
          w-1
          rounded-full
          bg-blue-600
        "
      />

      {/* Right green dot */}
      <div
        className="
          absolute
          right-[7%]
          top-[45%]
          h-2
          w-2
          rounded-full
          bg-emerald-400
        "
      />

      {/* Right blue dot */}
      <div
        className="
          absolute
          right-[7%]
          top-[65%]
          h-2
          w-2
          rounded-full
          bg-sky-300
        "
      />

      {/* Right purple dot */}
      <div
        className="
          absolute
          right-[12%]
          top-[40%]
          h-1
          w-1
          rounded-full
          bg-purple-400
        "
      />

      {/* =========================
          HERO CONTENT
          ========================= */}

      <div className="z-10">
        <>
          {children}
        </>
        
      </div>
    </section>
  );
}

export default AboutHero;