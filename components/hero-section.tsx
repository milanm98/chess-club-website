import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative h-[300px] lg:h-[450px] w-full">
        <div>
          <Image
            src="/database/hero-img.jpg"
            alt="hero image"
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </div>
      </div>
      <h1 className="text-color italic text-3xl text-left lg:text-4xl mx-6 lg:mt-16  font-semibold uppercase landing-header md:w-4/12">
        Šah klub svih bivših, sadašnjih i budućih gimnazijalaca kao i ostalih
        ljubitelja šaha
      </h1>
    </div>
  )
}

export default HeroSection
