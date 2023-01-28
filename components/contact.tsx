const Contact = () => {
  return (
    <section className="text-color text-center ">
      <div className="relative">
        <h1 className="my-6">Kontakt informacije:</h1>
      </div>
      <div className="flex flex-col md:flex-row my-16 gap-4 items-center justify-center md:flex-wrap">
        <div className="max-w-sm rounded overflow-hidden shadow-2xl relative">
          <div className="px-6 py-4 min-h-[300px] min-w-[300px] card-bg-color">
            <h2 className="font-bold mb-6">Rukovodstvo:</h2>
            <h3 className="font-bold mb-2">Predsednik:</h3>
            <h3 className="mb-6">Ivan Tot - 0692705990</h3>
            <h3 className="font-bold">Sekretar:</h3>
            <h3>Martin Hlozan - 062558083</h3>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-2xl relative">
          <div className="px-6 py-4 min-h-[300px] min-w-[300px] card-bg-color">
            <h2 className="font-bold mb-6">Email adrese:</h2>
            <h3 className="font-bold mb-2">Sahovski klub Gimnazijalac:</h3>
            <h3 className="mb-6"> gimnazijalacinfo@gmail.com</h3>
            <h3 className="font-bold">Gimnazija:</h3>
            <h3>info@gimnazijabp.edu.rs</h3>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-2xl relative">
          <div className="px-6 py-4 min-h-[300px] min-w-[300px] card-bg-color">
            <h2 className="font-bold mb-6">Linkovi:</h2>
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
      <div className="my-12 text-color  lg:mx-32" />
    </section>
  )
}

export default Contact
