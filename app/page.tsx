import Image from 'next/image'
import '../css/main.css'

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[url('../public/asteroid.gif')] bg-no-repeat bg-contain bg-top">
      <main>
        <section className="py-32 text-center px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium font-black text-[#F7F7FF]">
            Hack Club and the Girl Scouts of Southwest Texas present...
          </h2>
          <h1 className="mt-4 text-6xl sm:text-8xl md:text-9xl text-border title text-[#05204A]">Lonestar</h1>
          <h3 className="mt-8 text-xl sm:text-3xl font-black text-[#F7F7FF]">
            September 15th &bull; San Antonio, Texas
          </h3>
        </section>
        <section className="px-8 py-12 bg-[#C03221]">
          <div className="mx-auto max-w-2xl space-y-4 text-xl text-center">
            <h2 className="text-4xl title text-[#05204A] text-border">Join us for a day of coding!</h2>
            <p className="text-[#F7F7FF]">
              Calling all Girl Scouts of Southwest Texas! Join us at Lone Star 
              Hacks and experience the joy of coding, learning from workshops, 
              and showcasing your projects to new friends.
            </p>
            <p className="text-[#F7F7FF]">
              Lone Star Hacks is beginner-friendly and open to coders of all 
              experience levels. Whether you're creating a website, an app, or 
              any project that promotes a cause, educates about an issue, or 
              solves a problem, this hackathon is your chance to shine.
            </p>
            <p className="text-[#F7F7FF]">
              This event, supported by both the Hack Club community and the 
              Girl Scouts of Southwest Texas, is a celebration of collaboration 
              and empowerment. Bring your own laptop and charger, and let us know 
              if this presents any challenges. We're here to support you and ensure 
              everyone can participate fully.
            </p>
            <p className="text-[#F7F7FF]">
              Don't miss out on this incredible opportunity and get ready for a day 
              filled with fun, innovation, and limitless possibilities.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}