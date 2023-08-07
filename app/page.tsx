import Image from 'next/image'
import '../css/main.css'

export default function Home() {
  return (
    <div className="px-8 py-16 overflow-x-hidden bg-[#fdfcdc]">
      <main>
        <section className="mt-14 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium italic">
            Hack Club and the Girl Scouts of Southwest Texas present...
          </h2>
          <h1 className="mt-4 text-6xl sm:text-8xl md:text-9xl decoration-dotted">Lonestar</h1>
          <h3 className="mt-8 text-xl sm:text-3xl">
            September 15th &bull; San Antonio, Texas
          </h3>
        </section>
      </main>
    </div>
  )
}
