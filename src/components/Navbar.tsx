import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 z-50 w-full">

      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between md:px-6 px-12">

        {/* Logo */}
        <div className="text-4xl font-bold text-black md:text-5xl">
          ABETUP
        </div>

        {/* Desktop */}
        <div className="hidden md:flex flex-col items-end">

          {/* Contact */}
          <p className="flex items-center text-sm font-bold text-teal-400">
            <img
              className="size-5"
              src="../src/assets/telephone_icon.png"
            />

            <span className="mx-2">
              (786)673 0734 (Habilamos Espanol)
            </span>

            <img
              className="size-5"
              src="../src/assets/united-states_icon.png"
            />

            <img
              className="mx-2 size-5"
              src="../src/assets/down-arrow_icon.png"
            />
          </p>

          {/* Navigation */}
          <div className="mt-2 flex items-center gap-8">

            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Work</a>
            <a href="#">Blog</a>

            <button className="rounded-md bg-teal-500 px-8 py-3 text-sm font-medium text-white">
              LET'S TALK
            </button>

          </div>
        </div>


        {/* Mobile */}
        <div className="relative md:hidden">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-10 flex w-40 flex-col gap-4 bg-white p-4 shadow-lg">

              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">About</a>
              <a href="#">Work</a>
              <a href="#">Blog</a>

            </div>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;