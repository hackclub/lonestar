import Image from 'next/image'
import { Gallery } from "../components/Gallery";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import '../css/main.css'

export default function Home() {
  return (
    <div className="font-light">
      <a href="https://hackclub.com/"><img className="banner" src="https://assets.hackclub.com/flag-orpheus-left.svg" alt="Hack Club"/></a>
      <main>
        <section className="py-32 text-center px-8 bg-[#00000077] relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white">
            Hack Club and the Girl Scouts of Southwest Texas present...
          </h2>
          <h1 className="mt-4 text-6xl sm:text-8xl md:text-9xl text-border title text-[#f2b974]">Lonestar</h1>
          <h3 className="mt-8 text-xl sm:text-3xl text-white">
            September 16th &bull; San Antonio, Texas
          </h3>

          <video className="absolute top-0 left-0 w-[100%] h-[100%] -z-10 object-cover" width='1024' height='576' autoPlay loop muted playsInline>
            <source src='/video/video.webm' type='video/webm' />
            <source src='/video/video.mp4' type='video/mp4' />
          </video>
        </section>
        <section className="px-8 py-12 bg-[#eaa5a5] text-black">
          <div className="mx-auto max-w-2xl space-y-4 text-xl text-center">
            <h2 className="text-5xl title text-[#9d2e2e] mb-6">Join us for a day of coding!</h2>
            <p>
              Calling all Girl Scouts of Southwest Texas! Join us at Lone Star 
              Hacks and experience the joy of coding, learning from workshops, 
              and showcasing your projects to new friends.
            </p>
            <p>
              Lone Star Hacks is beginner-friendly and open to coders of all 
              experience levels. Whether you're creating a website, an app, or 
              any project that promotes a cause, educates about an issue, or 
              solves a problem, this hackathon is your chance to shine.
            </p>
            <p>
              This event, supported by both the Hack Club community and the 
              Girl Scouts of Southwest Texas, is a celebration of collaboration 
              and empowerment. Bring your own laptop and charger, and let us know 
              if this presents any challenges. We're here to support you and ensure 
              everyone can participate fully.
            </p>
            <p>
              Don't miss out on this incredible opportunity and get ready for a day 
              filled with fun, innovation, and limitless possibilities.
            </p>
          </div>
        </section>
        <section className="py-20 bg-[#e3d3d3]">
          <Gallery />
        </section>
        <section className="px-8 py-12 text-center bg-[#eaa5a5] text-black">
          <h2 className="text-5xl title text-[#9d2e2e] mb-6">Questions? We&apos;ve got you covered.</h2>
          <FAQ />
          <div className="mt-20 text-xl">
            <h2 className="text-5xl title text-[#9d2e2e] mb-6">Location and Registration</h2>
            <p>The event is located at the Girl Scouts of Southwest Texas at <a className="text-[#9d2e2e] underline" href="https://goo.gl/maps/9SMtgDJ8ChbJrEB26" target="_blank">811 N Coker Loop, San Antonio, TX 78216</a>.</p>
            <p className="mt-3">If you are not registering through Girl Scouts, email <a className="text-[#9d2e2e] underline" href="mailto:lonestar@hackclub.com">lonestar@hackclub.com</a> to confirm your registration.</p>
            <p className="mt-3 font-medium">See you at 5:00 PM on September 15th, 2023!</p>
          </div>
        </section>
        <section className="pt-10 px-12 pb-8 bg-[#eaa5a5] text-black text-lg">
          <Footer />
        </section>
      </main>
    </div>
  )
}