import Carousel from './carousel'
import SliderImages from '../public/database/landing-page-images/sliderImages.json'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative">
        <Carousel show={1} withIndicator>
          <Image
            priority
            layout="fill"
            alt="image-slider"
            src={SliderImages[0].src}
            key={SliderImages[0].key}
          />

          {SliderImages.map((image) => {
            if (image.key !== 1) {
              console.log(image)

              return (
                <Image
                  alt={`image-slider-${image.key}`}
                  src={image.src}
                  key={image.key}
                  layout="fill"
                />
              )
            }
          })}
        </Carousel>
      </div>
      <h1 className="text-color italic text-3xl text-left lg:text-5xl mx-6 lg:mt-20 font-semibold uppercase landing-header">
        Šah klub svih bivših, sadašnjih i budućih gimnazijalaca kao i ostalih
        ljubitelja šaha
      </h1>
    </div>
  )
}

export default HeroSection
