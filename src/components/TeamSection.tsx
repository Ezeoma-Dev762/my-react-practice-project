import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.jpg";
import person6 from "../assets/person6.jpg";
import person7 from "../assets/person7.jpg";
import person8 from "../assets/person8.jpg";
import person9 from "../assets/person9.jpg";
import person10 from "../assets/person10.jpg";
import person11 from "../assets/person11.jpg";
import person12 from "../assets/person12.jpg";
import Achievement from "./Achievement";

const teamMembers = [
  {
    image: person1,
    position: "left-1/2 top-0 -translate-x-1/2",
    size: "h-12 w-12",
  },
  {
    image: person2,
    position: "right-[22%] top-[12%]",
  },
  {
    image: person3,
    position: "right-[5%] top-[45%]",
  },
  {
    image: person4,
    position: "right-[20%] bottom-[8%]",
  },
  {
    image: person5,
    position: "left-[20%] bottom-[8%]",
  },
  {
    image: person6,
    position: "left-[5%] top-[45%]",
  },
  {
    image: person7,
    position: "left-[25%] top-[30%]",
  },
  {
    image: person8,
    position: "left-[27%] top-[60%]",
  },
  {
    image: person9,
    position: "right-[25%] top-[60%]",
  },
  {
    image: person10,
    position: "right-[28%] top-[30%]",
  },
  {
    image: person11,
    position: "left-[3%] top-[10%]",
  },
  {
    image: person12,
    position: "right-[1%] top-[5%]",
  },
];

function TeamSection() {
  return (
    <>
      <section className="relative min-h-[700px] overflow-hidden bg-white mt-24">

      {/* Heading */}
      <div className="pt-10 text-center">
        <p className="md:text-xs font-bold text-teal-500">
          Our Great Team
        </p>

        <h2 className="sm:text-lg md:text-xl font-bold text-gray-900">
          Our Leadership & Team.
        </h2>
      </div>

      {/* Team */}
      <div className="relative mx-auto mt-10 h-[400px] max-w-[1200px]">

        {/* Circles */}
        <div className="absolute left-1/2 top-[40%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-100" />

        <div className="absolute left-1/2 top-[41%] h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-100" />

        <div className="absolute left-1/2 top-[42%] h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-100" />

        {/* Center logo */}
        <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow">
          <span className="text-sm font-bold">
            ABETUP
          </span>
        </div>

        {/* People */}
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`absolute ${member.position}`}
          >
            <img
              src={member.image}
              alt="Team member"
              className="h-10 w-10 rounded-full border-2 border-white object-cover shadow"
            />
          </div>
        ))}
      </div>

      {/* Growth */}
      <div className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-center
          text-center
          mt-12
          gap-6
          md:gap-12
      ">
        <div>
          <p className="text-2xl font-bold">
            We're growing
          </p>
        </div>

        {/* <div className="mt-6 flex items-end justify-center gap-3">

          <div className="flex flex-col items-center">
            <div className="h-8 w-8 rounded-t-md bg-teal-300" />
            <span className="text-[7px] text-gray-500">2005</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-12 w-8 rounded-t-md bg-teal-400" />
            <span className="text-[7px] text-gray-500">2010</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-16 w-8 rounded-t-md bg-purple-300" />
            <span className="text-[7px] text-gray-500">2015</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-20 w-8 rounded-t-md bg-green-300" />
            <span className="text-[7px] text-gray-500">2022</span>
          </div>

        </div> */}

        <div>
          <img
            className="
                w-[280px]
                sm:w-[350px]
                md:w-[400px]
                h-auto
                object-contain
            "
            src="../src/assets/cylinder-shapes.png"
        />
        </div>

        
      </div>

      <div className="flex justify-center items-center">
          <div className="flex flex-row gap-8 lg:gap-10 lg:gap-14 lg:ml-54">
            <div>2005</div>
            <div>2010</div>
            <div>2015</div>
            <div>2022</div>
          </div>
      </div>

    </section>

    <div className="flex font-bold text-xl justify-center my-16">
      <div className="w-[300px] text-center text-xl font-semibold">
        Wanna get the feel of the start of our typical day?
      </div>
    </div>

    <div className="w-full overflow-x-auto">
      <div className="
          flex
          w-max
          items-center
          gap-4
          px-4
          md:mx-auto
          md:justify-center
          md:gap-10
      ">

      <div>
        {/* Image 1 - slightly higher */}
        <img
          src="../src/assets/person13.jpg"
          className="h-[270px] w-[97.5px] -translate-y-4 rounded-md object-cover"
        />
      </div>

      <div>
        {/* Image 2 - lower */}
        <img
          src="../src/assets/person14.jpg"
          className="h-[180px] w-[187.5px] translate-y-5 rounded-md object-cover"
        />
      </div>

      <div>
        {/* Image 3 - normal */}
        <img
          src="../src/assets/person15.jpg"
          className="h-[270px] w-[240px] rounded-md object-cover"
        />
      </div>

      <div>
        {/* Image 4 - higher */}
        <img
          src="../src/assets/person16.jpg"
          className="h-[270px] w-[172.5px] -translate-y-5 rounded-md object-cover"
        />
      </div>

      <div>
        {/* Image 5 - normal */}
        <img
          src="../src/assets/person17.jpg"
          className="h-[270px] w-[232px] rounded-md object-cover"
        />
      </div>
      
      </div>
    </div>

    <div className="mx-auto flex w-fit items-center gap-2 mt-8">
        <button className="border-2 border-teal-400 bg-white rounded-full w-10 h-10 bg-teal-500">
          <span className="my-auto mx-auto text-teal">
            <img className="ml-[6px] size-6" src="../src/assets/back-arrow.png"></img>
          </span>
        </button>

        <button className="rounded-full w-10 h-10">
          <span className="my-auto mx-auto text-white">
            <img className="mr-[6px] size-10" src="../src/assets/right-arrow.png"></img>
          </span>
        </button>
      </div>

    <section
      className="
        mt-12
        relative
        mx-auto
        min-h-[592px]
        max-w-[1100px]
        overflow-hidden
        bg-cover
        bg-center
        bg-[url('../src/assets/manifesto.jpg')]
      "
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-12">

        <h2 className="mb-6 sm:text-lg md:text-xl lg:text-xl font-bold text-white mt-[100px]">
          The ABETUP Manifesto
        </h2>

        <div className="
          grid w-full 
          max-w-[800px]
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3 
          gap-12">

          <div className="flex h-[90px] flex-col items-center justify-center border border-white/40 text-white">
            <span className="sm:text-xl md:text-2xl lg:text-2xl">📋</span>
            <span className="mt-2 text-sm font-semibold">
              We are transparent
            </span>
          </div>

          <div className="flex h-[90px] flex-col items-center justify-center border border-white/40 text-white">
            <span className="sm:text-xl md:text-2xl lg:text-2xl">🕐</span>
            <span className="mt-2 text-sm font-semibold">
              Always on time
            </span>
          </div>

          <div className="flex h-[90px] flex-col items-center justify-center border border-white/40 text-white">
            <span className="sm:text-xl md:text-2xl lg:text-2xl">💼</span>
            <span className="mt-2 text-sm font-semibold">
              Always on budget
            </span>
          </div>

          <div className="flex h-[90px] flex-col items-center justify-center border border-white/40 text-white">
            <span className="sm:text-xl md:text-2xl lg:text-2xl">📈</span>
            <span className="mt-2 text-sm font-semibold">
              Your success is our success
            </span>
          </div>

          <div className="flex h-[90px] flex-col items-center justify-center border border-white/40 text-white">
            <span className="sm:text-xl md:text-2xl lg:text-2xl">💻</span>
            <span className="mt-2 text-sm font-semibold">
              We never stop learning
            </span>
          </div>

          <div className="flex h-[90px] flex-col items-center justify-center border border-white/40 text-white">
            <span className="sm:text-xl md:text-2xl lg:text-2xl">🚚</span>
            <span className="mt-2 text-sm font-semibold">
              Awesome delivery
            </span>
          </div>

        </div>

      </div>
    </section>

    <section className="mx-auto mt-24 w-full max-w-[600px]">
      <div className="grid lg:grid-cols-4 gap-0 text-center">

        <Achievement
          imageLocation="../src/assets/schedule.png"
          achievement="2005 founded"
          color ="text-blue-600"
        />

        <Achievement
          imageLocation="../src/assets/group.png"
          achievement="More than 32 people"
          color = "text-orange-600"
        />

        <Achievement
          imageLocation="../src/assets/layers.png"
          achievement="More than 800 projects developed"
          color = "text-green-500"
        />

        <Achievement
          imageLocation="../src/assets/apartment.png"
          achievement="More than 3 development centers"
          color = "text-purple-800"
        />

      </div>
    </section>

  {/* Footer / CTA */}
  <section className="relative mx-auto mt-20 w-full max-w-[100vw]">

    {/* Contact card */}
    <div
      className="
        absolute
        left-1/2
        top-0
        z-20
        flex
        md:h-[208px]
        md:w-[705px]
        h-[194px]
        w-[565px]
        -translate-x-1/2
        items-center
        justify-center
        rounded-md
        bg-slate-800
        shadow-xl
      "
    >
      <div className="text-center sm:text-lg md:text-2xl font-bold text-white">

        <div>
          If it's thinkable, we make it possible
          <br />
          Let's talk?
        </div>

        <button
          className="
            mt-5
            rounded-sm
            bg-teal-400
            px-12
            py-3
            text-sm
            font-medium
            text-white
            shadow-md
            transition
            hover:bg-teal-600
          "
        >
          Contact Us
        </button>

      </div>
    </div>


    {/* Footer background */}
    <footer
      className="
        relative
        overflow-hidden
        rounded-md
        bg-sky-50
        px-12
        pb-6
        pt-[150px]
        top-20
      "
    >

      {/* Footer content */}
      <div className="grid grid-cols-4 gap-8">

        {/* ABETUP */}
        <div>
          <h2 className="text-xl font-bold">
            ABETUP
          </h2>

          <div className="max-w-sm">
            <p className="mt-3 text-xs leading-5 text-gray-600">
              Lorem Ipsum Register for our free
              online course where we'll show you
              how to successfully make and market
              a website online course
            </p>
          </div>

          {/* Social icons */}
          <div className="mt-4 flex gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-teal-400 text-xs">
              f
            </div>

            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-teal-400 text-xs">
              t
            </div>

            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-teal-400 text-xs">
              in
            </div>

            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-teal-400 text-xs">
              ◎
            </div>
          </div>
        </div>


        {/* About */}
        <div>
          <h3 className="font-bold">
            About
          </h3>

          <div className="mt-4 space-y-1 text-xs text-gray-700">
            <p>Home</p>
            <p>Who We Are</p>
            <p>What We Do?</p>
            <p>Projects Delivery</p>
            <p>Our Products</p>
          </div>
        </div>


        {/* Company */}
        <div>
          <h3 className="font-bold">
            Company
          </h3>

          <div className="mt-4 space-y-1 text-xs text-gray-700">
            <p>Resource</p>
            <p>Resource name</p>
            <p>Another resource</p>
            <p>Final resource</p>
            <p>Another resource</p>
          </div>
        </div>


        {/* Contact */}
        <div>
          <h3 className="font-bold">
            Contact Info
          </h3>

          <div className="mt-4 space-y-2 text-xs text-gray-700">
            <p>
              📍 78 SW 7th Street Miami,
              <br />
              FL 33130, USA
            </p>

            <p>
              📞 +123 454 7876
              <br />
              +222 333 4444
            </p>

            <p>
              ✉️ support@example.com
            </p>
          </div>
        </div>

      </div>


      {/* Copyright */}
      <div className="mt-8 border-t border-gray-300 pt-5 text-center text-xs text-gray-600 font-bold">
        ©2021 ABETUP. All rights reserved.
      </div>

    </footer>

  </section>
    </>
  );
}

export default TeamSection;