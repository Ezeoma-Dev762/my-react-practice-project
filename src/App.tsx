// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import Navbar from "./components/Navbar";
// import AboutUs from "./components/AboutUs";
import AboutHero from "./components/AboutHero";
import MainSection from "./components/MainSection";
import TeamSection from "./components/TeamSection";
import Navbar from "./components/Navbar";
// import './App.css'

function App() {
  return (
    <div className="min-h-screen  w-full md:w-full">
      {/* <Navbar /> */}
      {/* <AboutUs /> */}
      <AboutHero>
        <Navbar />

        <div className="relative flex h-full flex-col items-center justify-center">

        <h1 className="text-4xl md:text-5xl mt-32 font-bold text-gray-950">
          About Us
        </h1>

        <p className="mt-2 text-md md:text-lg font-bold text-gray-900">
          Home <span className="mx-2">→</span> About Us Page
        </p>

      </div>
      </AboutHero>

      <MainSection />

      <TeamSection />
      {/* <main className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <div className="rounded-xl bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold">
            Hello React + Tailwind!
          </h1>

          <p className="mt-4 text-gray-600">
            Tailwind CSS is working.
          </p>

          <button className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </main> */}
    </div>
  );
}

export default App;
