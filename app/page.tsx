import Image from 'next/image'
import { Gallery } from "../components/Gallery";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import '../css/main.css'

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzBhM21kejc4NTY3OXN2cW8wZmpzajVuOW93Z2J2em5wZTRvbXFjdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KNUgQ8AbU49H9Dv9Gq/giphy-downsized-large.gif')] bg-no-repeat bg-contain bg-top">
      <a href="https://hackclub.com/"><img className="banner" src="https://assets.hackclub.com/flag-orpheus-left.svg" alt="Hack Club"/></a>
      <main>
        <section className="py-32 text-center px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium font-black text-[#F2EADF]">
            Hack Club and the Girl Scouts of Southwest Texas present...
          </h2>
          <h1 className="mt-4 text-6xl sm:text-8xl md:text-9xl text-border title text-[#F2BF80]">Lonestar</h1>
          <h3 className="mt-8 text-xl sm:text-3xl font-black text-[#F2EADF]">
            September 16th &bull; San Antonio, Texas
          </h3>
        </section>
        <section className="px-8 py-12 bg-[#D97373]">
          <div className="mx-auto max-w-2xl space-y-4 text-xl text-center">
            <h2 className="text-4xl title text-[#F2BF80] text-border">Join us for a day of coding!</h2>
            <p className="text-[#f2EADF]">
              Calling all Girl Scouts of Southwest Texas! Join us at Lone Star 
              Hacks and experience the joy of coding, learning from workshops, 
              and showcasing your projects to new friends.
            </p>
            <p className="text-[#f2EADF]">
              Lone Star Hacks is beginner-friendly and open to coders of all 
              experience levels. Whether you're creating a website, an app, or 
              any project that promotes a cause, educates about an issue, or 
              solves a problem, this hackathon is your chance to shine.
            </p>
            <p className="text-[#f2EADF]">
              This event, supported by both the Hack Club community and the 
              Girl Scouts of Southwest Texas, is a celebration of collaboration 
              and empowerment. Bring your own laptop and charger, and let us know 
              if this presents any challenges. We're here to support you and ensure 
              everyone can participate fully.
            </p>
            <p className="text-[#f2EADF]">
              Don't miss out on this incredible opportunity and get ready for a day 
              filled with fun, innovation, and limitless possibilities.
            </p>
          </div>
        </section>
        <section className="py-20 bg-[#BFBCAE]">
          <Gallery />
        </section>
        <section className="px-8 py-12 text-center bg-[#D97373]">
          <h2 className="text-4xl title text-[#F2BF80] text-border">Questions? We&apos;ve got you covered.</h2>
          <FAQ />
        </section>
        <section className="px-12 pb-8 bg-[#D97373] text-[#f2EADF] text-lg">
          <Footer />
        </section>
      </main>
    </div>
  )
}