import ScrollHelper from '../helpers/scroll-helper'

const Contact = () => {
  return (
    <section className="text-color text-center ">
      <div className="relative">
        <ScrollHelper id="kontakt" classes="absolute bottom-28 invisible" />
        <h1 className="my-6 text-3xl lg:text-4xl">Kontakt informacije:</h1>
      </div>
      <div className="flex flex-col md:flex-row my-16 gap-4 items-center justify-center md:flex-wrap">
        <div className="max-w-sm rounded overflow-hidden shadow-2xl  relative">
          <div className="px-6 py-4 min-h-[300px] min-w-[300px]">
            <p className="font-bold text-2xl mb-6 text-color">Rukovodstvo:</p>
            <p className="font-bold text-xl mb-2 text-color">Predsednik:</p>
            <p className="text-gray-700 text-xl mb-6 text-color">
              Ivan Tot - 0692705990
            </p>
            <p className="font-bold text-xl mb-2 text-color">Sekretar:</p>
            <p className="text-gray-700 text-xl mb-2 text-color">
              Martin Hlozan - 062558083
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl  relative">
          <div className="px-6 py-4 min-h-[300px] min-w-[300px]">
            <p className="font-bold text-2xl mb-6 text-color">Email adrese:</p>
            <p className="font-bold text-xl mb-2 text-color">
              Sahovski klub Gimnazijalac:
            </p>
            <p className="text-gray-700 text-xl mb-6 text-color">
              gimnazijalacinfo@gmail.com
            </p>
            <p className="font-bold text-xl mb-2 text-color">Gimnazija:</p>
            <p className="text-gray-700 text-xl mb-2 text-color">
              info@gimnazijabp.edu.rs
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl  relative">
          <div className="px-6 py-4 min-h-[300px] min-w-[300px]">
            <p className="font-bold text-2xl mb-6 text-color">Linkovi:</p>

            <a
              className="font-bold text-xl mb-8 text-color underline hover:text-zinc-600 inline-block"
              href="https://lichess.org/team/gimnazijalac"
              target="_blank"
              rel="noreferrer"
            >
              Lichess
            </a>
            <br />
            <a
              className="font-bold text-xl mb-8 text-color underline  hover:text-zinc-600 inline-block"
              href="https://www.facebook.com/%C5%A0ah-klub-Gimnazijalac-979024278831201"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="my-12 text-color  lg:mx-32 border-b-2  border-[#5e503f]" />
    </section>
  )
}

export default Contact
